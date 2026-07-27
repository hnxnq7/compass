// @ts-nocheck
import {
  removeAllChildren,
  getBasePath,
  getFullSlugFromUrl,
  simplifySlug,
  resolveBasePath,
} from "@quartz-community/utils";

(function () {
  function getSlugFromUrl() {
    var slug = getFullSlugFromUrl();
    var base = getBasePath();
    if (base && slug.startsWith(base.replace(/^\//, ""))) {
      slug = slug.slice(base.replace(/^\//, "").length);
      if (slug.startsWith("/")) slug = slug.slice(1);
    }
    return slug;
  }

  function loadScript(src) {
    var existing = document.querySelector('script[src="' + src + '"]');
    if (existing) return Promise.resolve();
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.crossOrigin = "anonymous";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  Promise.all([
    loadScript("https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"),
    loadScript("https://cdn.jsdelivr.net/npm/pixi.js@8/dist/pixi.js"),
  ])
    .then(function () {
      initGraph();
    })
    .catch(function (err) {
      console.error("[Graph] Failed to load libraries:", err);
      var containers = document.querySelectorAll(".graph-container");
      for (var i = 0; i < containers.length; i++) {
        containers[i].textContent = "Graph could not load. Check your network connection.";
        containers[i].style.display = "flex";
        containers[i].style.alignItems = "center";
        containers[i].style.justifyContent = "center";
        containers[i].style.color = "var(--gray)";
        containers[i].style.fontSize = "0.9rem";
      }
    });

  function initGraph() {
    var d3 = window.d3;
    var PIXI = window.PIXI;

    if (!d3 || !PIXI) {
      console.error("[Graph] Libraries not loaded");
      return;
    }

    var localStorageKey = "graph-visited";

    function getVisited() {
      return new Set(JSON.parse(localStorage.getItem(localStorageKey) || "[]"));
    }

    function addToVisited(slug) {
      var visited = getVisited();
      visited.add(slug);
      localStorage.setItem(localStorageKey, JSON.stringify(Array.from(visited)));
    }

    // Whether to include #entity nodes (companies/labs/projects/orgs) in the
    // graph. Persisted across renders/pages so the toggle sticks as you browse.
    var entitiesToggleKey = "graph-show-entities";

    // Whether the docked "graph view" split panel is open. Persisted so it stays
    // open as you navigate — including graph-node clicks, which are full page loads
    // (window.location.href) rather than SPA transitions, so an in-memory flag or a
    // class on <html> wouldn't survive them.
    var dockStateKey = "graph-docked-open";

    function getShowEntities(configDefault) {
      var stored = localStorage.getItem(entitiesToggleKey);
      if (stored === null) return configDefault !== false;
      return stored === "true";
    }

    function setShowEntities(value) {
      localStorage.setItem(entitiesToggleKey, value ? "true" : "false");
      var toggles = document.querySelectorAll(".entities-toggle");
      for (var i = 0; i < toggles.length; i++) {
        toggles[i].setAttribute("aria-pressed", value ? "true" : "false");
      }
    }

    // Resolves CSS color values containing calc()/var() that PixiJS cannot parse.
    // Uses a temp DOM element so the browser's CSS engine evaluates the expression.
    function resolveColor(value, fallback) {
      if (!value) return fallback;
      var el = document.createElement("div");
      el.style.color = value;
      el.style.position = "absolute";
      el.style.visibility = "hidden";
      document.body.appendChild(el);
      var resolved = getComputedStyle(el).color;
      el.remove();
      return resolved || fallback;
    }

    async function renderGraph(graph, fullSlug, renderGeneration) {
      var slug = simplifySlug(fullSlug);
      if (slug === "") slug = "index";
      var visited = getVisited();
      removeAllChildren(graph);

      if (renderGeneration !== undefined && renderGeneration !== currentRenderGeneration) {
        console.log("[Graph] Stale render, skipping");
        return function () {};
      }

      var config = JSON.parse(graph.dataset["cfg"] || "{}");
      var enableDrag = config.drag;
      var enableZoom = config.zoom;
      var depth = config.depth;
      var scale = config.scale || 1;
      var repelForce = config.repelForce || 0.5;
      var centerForce = config.centerForce || 0.3;
      var linkDistance = config.linkDistance || 30;
      var fontSize = config.fontSize || 0.6;
      var opacityScale = config.opacityScale || 1;
      var removeTags = config.removeTags || [];
      var showTags = config.showTags;
      var showEntities = getShowEntities(config.showEntities);
      var focusOnHover = config.focusOnHover;
      var enableRadial = config.enableRadial;

      var data;
      try {
        var dataRaw = await fetchData;
        data = new Map();
        for (var key in dataRaw) {
          data.set(simplifySlug(key), dataRaw[key]);
        }
      } catch (err) {
        console.error("[Graph] Error loading data:", err);
        return function () {};
      }

      var width = graph.offsetWidth;
      var height = Math.max(graph.offsetHeight, 250);

      var links = [];
      var allTags = [];
      var validLinks = new Set(data.keys());
      // Meta/index pages (tagged field-meta: Overview, Field Backlog, Live Feed Vision)
      // link to nearly every note in the site as plain navigation, not a real
      // conceptual connection. Left in, they'd render as a mega-hub with 70+ edges
      // that dominates the whole graph. Drop them as graph nodes entirely.
      var metaPages = new Set();
      var entityPages = new Set();
      data.forEach(function (details, source) {
        var tags = details.tags || [];
        if (tags.indexOf("field-meta") !== -1) {
          metaPages.add(source);
        }
        if (tags.indexOf("entity") !== -1) {
          entityPages.add(source);
        }
      });
      // The "Entities" toggle hides #entity nodes (companies/labs/projects/orgs)
      // so the graph can show just the fields graph, or both layers together.
      var excludedPages = metaPages;
      if (!showEntities) {
        excludedPages = new Set(metaPages);
        entityPages.forEach(function (id) {
          excludedPages.add(id);
        });
      }

      // A meta page (Overview, Field Backlog, Live Feed Vision) contributes no edges
      // anywhere EXCEPT when you're standing on it and viewing its own local graph —
      // otherwise that page's local preview would just be a lone dot, since its only
      // links are the ones we deliberately strip everywhere else to avoid the mega-hub.
      var isLocalView = depth >= 0;

      data.forEach(function (details, source) {
        var isSelfMetaException = isLocalView && source === slug && metaPages.has(source);
        if (excludedPages.has(source) && !isSelfMetaException) return;
        var outgoing = details.links || [];
        for (var i = 0; i < outgoing.length; i++) {
          var dest = simplifySlug(outgoing[i]);
          if (validLinks.has(dest) && !excludedPages.has(dest)) {
            links.push({ source: source, target: dest });
          }
        }

        if (showTags) {
          var tags = details.tags || [];
          for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if (removeTags.indexOf(tag) === -1) {
              var tagSlug = simplifySlug("tags/" + tag);
              if (allTags.indexOf(tagSlug) === -1) {
                allTags.push(tagSlug);
              }
              links.push({ source: source, target: tagSlug });
            }
          }
        }
      });

      var neighbourhood = new Set();
      if (depth >= 0) {
        var queue = [slug];
        var seen = new Set([slug]);
        for (var d = 0; d <= depth && queue.length > 0; d++) {
          var nextQueue = [];
          for (var qi = 0; qi < queue.length; qi++) {
            var cur = queue[qi];
            neighbourhood.add(cur);
            for (var li = 0; li < links.length; li++) {
              var link = links[li];
              if (link.source === cur && !seen.has(link.target)) {
                seen.add(link.target);
                nextQueue.push(link.target);
              }
              if (link.target === cur && !seen.has(link.source)) {
                seen.add(link.source);
                nextQueue.push(link.source);
              }
            }
          }
          queue = nextQueue;
        }
      } else {
        validLinks.forEach(function (id) {
          if (!excludedPages.has(id) || id === slug) {
            neighbourhood.add(id);
          }
        });
        for (var i = 0; i < allTags.length; i++) {
          neighbourhood.add(allTags[i]);
        }
      }

      var nodes = [];
      var nodeMap = new Map();
      neighbourhood.forEach(function (url) {
        var isTag = url.startsWith("tags/");
        var text = isTag ? "#" + url.substring(5) : data.get(url)?.title || url;
        var nodeTags = isTag ? [] : data.get(url)?.tags || [];
        var node = {
          id: url,
          text: text,
          tags: nodeTags,
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          vx: 0,
          vy: 0,
        };
        nodes.push(node);
        nodeMap.set(url, node);
      });

      var graphLinks = [];
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (neighbourhood.has(link.source) && neighbourhood.has(link.target)) {
          var sourceNode = nodeMap.get(link.source);
          var targetNode = nodeMap.get(link.target);
          if (sourceNode && targetNode) {
            graphLinks.push({ source: sourceNode, target: targetNode });
          }
        }
      }

      var styles = getComputedStyle(document.documentElement);
      var secondary = resolveColor(styles.getPropertyValue("--secondary").trim(), "#c792ea");
      var tertiary = resolveColor(styles.getPropertyValue("--tertiary").trim(), "#82aaff");
      var gray = resolveColor(styles.getPropertyValue("--gray").trim(), "#6c6c6c");
      var lightgray = resolveColor(styles.getPropertyValue("--lightgray").trim(), "#d4d4d4");
      var dark = resolveColor(styles.getPropertyValue("--dark").trim(), "#1a1a1a");
      var light = resolveColor(styles.getPropertyValue("--light").trim(), "#f5f5f5");
      var bodyFont = styles.getPropertyValue("--bodyFont").trim() || "inherit";

      // Node size loosely encodes connectedness, but deliberately gently: the curve
      // is shallow and capped so an ordinary hub never balloons. The current page is
      // marked by COLOR (--secondary), not size, so it gets a fixed modest radius
      // regardless of degree — otherwise, on a high-fan-out page (e.g. the meta
      // homepage, which links to nearly everything) it would pin to the cap and read
      // as one giant central dot swallowing its neighbours.
      var maxNodeRadius = 6;
      var currentNodeRadius = 4;
      function nodeRadiusFor(d) {
        if (d.id === slug) return currentNodeRadius;
        var numLinks = 0;
        for (var i = 0; i < graphLinks.length; i++) {
          if (graphLinks[i].source.id === d.id || graphLinks[i].target.id === d.id) {
            numLinks++;
          }
        }
        return Math.min(2 + Math.sqrt(numLinks) * 0.8, maxNodeRadius);
      }

      var app = new PIXI.Application();
      await app.init({
        width: width,
        height: height,
        antialias: true,
        backgroundAlpha: 0,
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        eventMode: "static",
      });

      graph.appendChild(app.canvas);

      var stage = new PIXI.Container();
      app.stage.addChild(stage);

      var simulation = d3
        .forceSimulation(nodes)
        .force("charge", d3.forceManyBody().strength(-100 * repelForce))
        .force("center", d3.forceCenter().strength(centerForce))
        .force("link", d3.forceLink(graphLinks).distance(linkDistance))
        .force("collide", d3.forceCollide().radius(nodeRadiusFor).iterations(3));

      if (enableRadial) {
        var radius = (Math.min(width, height) / 2) * 0.8;
        simulation.force("radial", d3.forceRadial(radius).strength(0.2));
      }

      var linkContainer = new PIXI.Container();
      var nodesContainer = new PIXI.Container();
      var labelsContainer = new PIXI.Container();
      stage.addChild(linkContainer);
      stage.addChild(nodesContainer);
      stage.addChild(labelsContainer);

      var nodeRenderData = [];
      var linkRenderData = [];
      var hoveredNodeId = null;
      var hoveredNeighbours = new Set();
      // Sticky focus: in the docked/global graph we keep the current page's Markov
      // blanket (the node + its direct neighbours) emphasized by default, as if it
      // were permanently hovered. Mousing over another node overrides it; mousing
      // away falls back to this instead of un-focusing the whole graph. Null in the
      // local graph, which is already depth-limited to the blanket anyway.
      var stickyFocusId = null;
      var dragStartTime = 0;
      var dragging = false;
      var currentTransform = d3.zoomIdentity;

      var nodeRadius = nodeRadiusFor;

      function nodeColor(d) {
        var isCurrent = d.id === slug;
        if (isCurrent) {
          return secondary;
        } else if (visited.has(d.id) || d.id.startsWith("tags/")) {
          return tertiary;
        } else {
          return gray;
        }
      }

      function updateHoverInfo(newHoveredId) {
        hoveredNodeId = newHoveredId;

        if (newHoveredId === null) {
          hoveredNeighbours = new Set();
          for (var i = 0; i < nodeRenderData.length; i++) {
            nodeRenderData[i].active = false;
          }
          for (var i = 0; i < linkRenderData.length; i++) {
            linkRenderData[i].active = false;
          }
        } else {
          hoveredNeighbours = new Set();

          for (var i = 0; i < linkRenderData.length; i++) {
            var linkData = linkRenderData[i].simulationData;
            if (linkData.source.id === newHoveredId || linkData.target.id === newHoveredId) {
              hoveredNeighbours.add(linkData.source.id);
              hoveredNeighbours.add(linkData.target.id);
              linkRenderData[i].active = true;
            } else {
              linkRenderData[i].active = false;
            }
          }

          hoveredNeighbours.add(newHoveredId);

          for (var i = 0; i < nodeRenderData.length; i++) {
            if (hoveredNeighbours.has(nodeRenderData[i].simulationData.id)) {
              nodeRenderData[i].active = true;
            } else {
              nodeRenderData[i].active = false;
            }
          }
        }
      }

      function renderLinks() {
        for (var i = 0; i < linkRenderData.length; i++) {
          var linkData = linkRenderData[i];
          var alpha = 1;
          if (hoveredNodeId !== null) {
            alpha = linkData.active ? 1 : 0.2;
          }
          linkData.alpha = alpha;
          linkData.color = linkData.active ? gray : lightgray;
        }
      }

      // Single source of truth for label visibility. When a node is focused (hovered,
      // or the sticky current-page focus in the docked graph) we reveal the labels of
      // its ENTIRE Markov blanket — the focused node plus every direct neighbour — and
      // hide the rest, so you can read the whole neighbourhood at a glance rather than
      // hovering nodes one at a time. With no focus, labels fall back to the landmark
      // floor (category roots stay legible) lifted by the current zoom level, matching
      // the zoom handler's own formula.
      function renderLabels() {
        var defaultScale = 1 / scale;
        var activeScale = defaultScale * 1.1;
        var zoomScale = currentTransform.k * opacityScale;
        var scaleOpacity = Math.max((zoomScale - 1) / 3.75, 0);

        for (var i = 0; i < nodeRenderData.length; i++) {
          var nodeData = nodeRenderData[i];
          var id = nodeData.simulationData.id;
          var label = nodeData.label;
          var nodeTags = nodeData.simulationData.tags || [];
          var isLandmark = nodeTags.indexOf("field-root") !== -1;

          if (hoveredNodeId !== null) {
            label.alpha = hoveredNeighbours.has(id) ? 1 : 0;
          } else {
            label.alpha = Math.max(scaleOpacity, isLandmark ? 0.85 : 0);
          }

          label.scale.set(id === hoveredNodeId ? activeScale : defaultScale);
        }
      }

      function renderNodes() {
        for (var i = 0; i < nodeRenderData.length; i++) {
          var nodeData = nodeRenderData[i];
          var alpha = 1;
          if (hoveredNodeId !== null && focusOnHover) {
            alpha = nodeData.active ? 1 : 0.2;
          }
          nodeData.gfx.alpha = alpha;
        }
      }

      function renderPixiFromD3() {
        renderNodes();
        renderLinks();
        renderLabels();
      }

      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var nodeId = node.id;
        var isTagNode = nodeId.startsWith("tags/");
        var radius = nodeRadius(node);
        var color = nodeColor(node);
        // Landmark nodes (category roots) keep their label visible by default so the
        // graph reads as a map at a glance, not just a cloud of dots you have to hover
        // one at a time. Everything else still reveals on hover/zoom as before.
        var isLandmark = !isTagNode && node.tags && node.tags.indexOf("field-root") !== -1;

        var label = new PIXI.Text({
          text: node.text,
          style: {
            fontSize: fontSize * 15,
            fill: dark,
            fontFamily: bodyFont,
            fontWeight: isLandmark ? "bold" : "normal",
          },
          resolution: window.devicePixelRatio * 4,
        });
        label.anchor.set(0.5, 1.2);
        label.alpha = isLandmark ? 0.85 : 0;
        label.scale.set(1 / scale);
        labelsContainer.addChild(label);

        var gfx = new PIXI.Graphics();
        gfx.circle(0, 0, radius);
        gfx.fill({ color: isTagNode ? light : color });
        if (isTagNode) {
          gfx.stroke({ width: 2, color: tertiary });
        }

        gfx.eventMode = "static";
        gfx.cursor = "pointer";
        gfx.label = nodeId;

        (function (n, g) {
          g.on("pointerover", function () {
            updateHoverInfo(n.id);
            if (!dragging) {
              renderPixiFromD3();
            }
          });

          g.on("pointerleave", function () {
            updateHoverInfo(stickyFocusId);
            if (!dragging) {
              renderPixiFromD3();
            }
          });
        })(node, gfx);

        nodesContainer.addChild(gfx);

        nodeRenderData.push({
          simulationData: node,
          gfx: gfx,
          label: label,
          color: color,
          alpha: 1,
          active: false,
        });
      }

      for (var i = 0; i < graphLinks.length; i++) {
        var link = graphLinks[i];
        var gfx = new PIXI.Graphics();
        gfx.eventMode = "none";
        linkContainer.addChild(gfx);

        linkRenderData.push({
          simulationData: link,
          gfx: gfx,
          color: lightgray,
          alpha: 1,
          active: false,
        });
      }

      if (enableDrag) {
        var dragSubject = function (event) {
          var mouseX = (event.x - currentTransform.x) / currentTransform.k;
          var mouseY = (event.y - currentTransform.y) / currentTransform.k;

          for (var i = 0; i < nodes.length; i++) {
            var n = nodes[i];
            var dx = mouseX - n.x - width / 2;
            var dy = mouseY - n.y - height / 2;
            var dist = Math.sqrt(dx * dx + dy * dy);
            var rad = nodeRadius(n);
            if (dist < rad + 5) {
              return n;
            }
          }
          return null;
        };

        var dragStarted = function (event) {
          if (!event.active) simulation.alphaTarget(1).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
          var mouseSimX = (event.x - currentTransform.x) / currentTransform.k - width / 2;
          var mouseSimY = (event.y - currentTransform.y) / currentTransform.k - height / 2;
          event.subject.__dragOffset = {
            x: mouseSimX - event.subject.x,
            y: mouseSimY - event.subject.y,
          };
          dragStartTime = Date.now();
          dragging = true;
          hoveredNodeId = event.subject.id;
        };

        var dragDragged = function (event) {
          var mouseSimX = (event.x - currentTransform.x) / currentTransform.k - width / 2;
          var mouseSimY = (event.y - currentTransform.y) / currentTransform.k - height / 2;
          event.subject.fx = mouseSimX - event.subject.__dragOffset.x;
          event.subject.fy = mouseSimY - event.subject.__dragOffset.y;
        };

        var dragEnded = function (event) {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
          dragging = false;
          updateHoverInfo(stickyFocusId);
          renderPixiFromD3();

          if (Date.now() - dragStartTime < 500) {
            var target = resolveBasePath(event.subject.id);
            window.location.href = target;
          }
        };

        var drag = d3
          .drag()
          .container(app.canvas)
          .subject(dragSubject)
          .on("start", dragStarted)
          .on("drag", dragDragged)
          .on("end", dragEnded);

        d3.select(app.canvas).call(drag);
      } else {
        for (var i = 0; i < nodeRenderData.length; i++) {
          (function (nodeData) {
            nodeData.gfx.on("click", function () {
              var target = resolveBasePath(nodeData.simulationData.id);
              window.location.href = target;
            });
          })(nodeRenderData[i]);
        }
      }

      if (enableZoom) {
        var zoomed = function (event) {
          currentTransform = event.transform;
          stage.scale.set(currentTransform.k, currentTransform.k);
          stage.position.set(currentTransform.x, currentTransform.y);

          var newScale = currentTransform.k * opacityScale;
          var scaleOpacity = Math.max((newScale - 1) / 3.75, 0);

          var activeLabels = [];
          var landmarkFloors = new Map();
          for (var i = 0; i < nodeRenderData.length; i++) {
            var nd = nodeRenderData[i];
            if (nd.active) {
              activeLabels.push(nd.label);
            }
            var tags = nd.simulationData.tags;
            if (tags && tags.indexOf("field-root") !== -1) {
              landmarkFloors.set(nd.label, 0.85);
            }
          }

          for (var i = 0; i < labelsContainer.children.length; i++) {
            var label = labelsContainer.children[i];
            if (activeLabels.indexOf(label) === -1) {
              var floor = landmarkFloors.has(label) ? landmarkFloors.get(label) : 0;
              label.alpha = Math.max(scaleOpacity, floor);
            }
          }
        };

        var zoom = d3
          .zoom()
          .extent([
            [0, 0],
            [width, height],
          ])
          .scaleExtent([0.25, 4])
          .on("zoom", zoomed);

        d3.select(app.canvas).call(zoom);
      }

      var stopAnimation = false;
      function animate() {
        if (stopAnimation) return;

        for (var i = 0; i < nodeRenderData.length; i++) {
          var n = nodeRenderData[i];
          var x = n.simulationData.x;
          var y = n.simulationData.y;
          if (x != null && y != null) {
            n.gfx.position.set(x + width / 2, y + height / 2);
            if (n.label) {
              n.label.position.set(x + width / 2, y + height / 2);
            }
          }
        }

        for (var i = 0; i < linkRenderData.length; i++) {
          var l = linkRenderData[i];
          var linkData = l.simulationData;
          var sx = linkData.source.x;
          var sy = linkData.source.y;
          var tx = linkData.target.x;
          var ty = linkData.target.y;
          if (sx != null && sy != null && tx != null && ty != null) {
            l.gfx.clear();
            l.gfx.moveTo(sx + width / 2, sy + height / 2);
            l.gfx.lineTo(tx + width / 2, ty + height / 2);
            l.gfx.stroke({ alpha: l.alpha, width: 1, color: l.color });
          }
        }

        requestAnimationFrame(animate);
      }

      // The docked/global graph (depth < 0, i.e. !isLocalView) opens already focused
      // on the current page's Markov blanket; the local graph is depth-limited to that
      // blanket to begin with, so it needs no sticky focus.
      if (!isLocalView && nodeMap.has(slug)) {
        stickyFocusId = slug;
      }

      simulation.on("tick", function () {});
      simulation.restart();
      updateHoverInfo(stickyFocusId);
      renderPixiFromD3();
      animate();

      return function () {
        stopAnimation = true;
        simulation.stop();
        try {
          app.destroy(true);
        } catch (_) {
          // PixiJS may throw if WebGL context was already lost.
        }
      };
    }

    var localCleanups = [];
    var globalCleanups = [];
    var currentRenderGeneration = 0;

    function cleanupLocal() {
      for (var i = 0; i < localCleanups.length; i++) {
        localCleanups[i]();
      }
      localCleanups = [];
    }

    function cleanupGlobal() {
      for (var i = 0; i < globalCleanups.length; i++) {
        globalCleanups[i]();
      }
      globalCleanups = [];
    }

    var globalContainers = [];
    var globalIcons = [];
    var closeButtons = [];
    var closeClickHandler = null;
    var documentKeydownHandler = null;
    var iconClickHandler = null;
    var entitiesToggles = [];
    var entitiesToggleClickHandler = null;

    function hideGlobalGraph() {
      cleanupGlobal();
      // Un-narrow the body (see html.graph-docked in base.scss).
      document.documentElement.classList.remove("graph-docked");
      localStorage.setItem(dockStateKey, "false");
      for (var i = 0; i < globalContainers.length; i++) {
        globalContainers[i].classList.remove("active");
        var sidebar = globalContainers[i].closest(".sidebar");
        if (sidebar) {
          sidebar.style.zIndex = "";
        }
      }
    }

    function anyGlobalGraphActive() {
      // The <html> class is the source of truth: unlike the .active class on the
      // panel (which a SPA DOM-morph can drop on navigation), it always survives, so
      // the dock reliably re-opens itself after you click through to another page.
      if (document.documentElement.classList.contains("graph-docked")) {
        return true;
      }
      for (var i = 0; i < globalContainers.length; i++) {
        if (globalContainers[i].classList.contains("active")) {
          return true;
        }
      }
      return false;
    }

    function showGlobalGraph() {
      cleanupGlobal();
      // Narrow the body so the fixed dock doesn't overlap content (base.scss).
      document.documentElement.classList.add("graph-docked");
      localStorage.setItem(dockStateKey, "true");
      var currentSlug = getSlugFromUrl();
      for (var i = 0; i < globalContainers.length; i++) {
        var container = globalContainers[i];
        container.classList.add("active");
        var sidebar = container.closest(".sidebar");
        if (sidebar) {
          sidebar.style.zIndex = "1";
        }

        var graphContainer = container.querySelector(".global-graph-container");
        if (graphContainer) {
          (function (gc) {
            renderGraph(gc, currentSlug, undefined)
              .then(function (cleanup) {
                globalCleanups.push(cleanup);
              })
              .catch(function (err) {
                console.error("[Graph] Global render error:", err);
              });
          })(graphContainer);
        }
      }
    }

    function toggleGlobalGraph() {
      if (anyGlobalGraphActive()) {
        hideGlobalGraph();
      } else {
        showGlobalGraph();
      }
    }

    function renderLocal() {
      cleanupLocal();
      var thisGeneration = ++currentRenderGeneration;
      var slug = getSlugFromUrl();
      addToVisited(slug);

      var localContainers = document.querySelectorAll(".graph-container");
      for (var i = 0; i < localContainers.length; i++) {
        (function (container) {
          renderGraph(container, slug, thisGeneration)
            .then(function (cleanup) {
              if (thisGeneration === currentRenderGeneration) {
                localCleanups.push(cleanup);
              }
            })
            .catch(function (err) {
              console.error("[Graph] Local render error:", err);
            });
        })(localContainers[i]);
      }
    }

    function handleNav(e) {
      var slug = e.detail ? e.detail.url : getSlugFromUrl();
      addToVisited(simplifySlug(slug));

      renderLocal();

      globalContainers = Array.from(document.querySelectorAll(".global-graph-outer"));

      if (iconClickHandler) {
        for (var i = 0; i < globalIcons.length; i++) {
          globalIcons[i].removeEventListener("click", iconClickHandler);
        }
      }

      globalIcons = Array.from(document.querySelectorAll(".global-graph-icon"));
      iconClickHandler = function () {
        toggleGlobalGraph();
      };
      for (var i = 0; i < globalIcons.length; i++) {
        globalIcons[i].addEventListener("click", iconClickHandler);
      }

      if (entitiesToggleClickHandler) {
        for (var i = 0; i < entitiesToggles.length; i++) {
          entitiesToggles[i].removeEventListener("click", entitiesToggleClickHandler);
        }
      }

      entitiesToggles = Array.from(document.querySelectorAll(".entities-toggle"));
      setShowEntities(getShowEntities(true));
      entitiesToggleClickHandler = function () {
        var current = getShowEntities(true);
        setShowEntities(!current);
        renderLocal();
        if (anyGlobalGraphActive()) {
          showGlobalGraph();
        }
      };
      for (var i = 0; i < entitiesToggles.length; i++) {
        entitiesToggles[i].addEventListener("click", entitiesToggleClickHandler);
      }

      // The docked graph is a persistent split panel, so it does NOT close on an
      // outside click (that would fight navigation — every node click is "outside").
      // It closes via the in-panel × button, the globe toggle, or Escape.
      if (closeClickHandler) {
        for (var i = 0; i < closeButtons.length; i++) {
          closeButtons[i].removeEventListener("click", closeClickHandler);
        }
      }
      closeButtons = Array.from(document.querySelectorAll(".global-graph-close"));
      closeClickHandler = function () {
        hideGlobalGraph();
      };
      for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", closeClickHandler);
      }

      if (documentKeydownHandler) {
        document.removeEventListener("keydown", documentKeydownHandler);
      }
      documentKeydownHandler = function (e) {
        if (e.key === "Escape") {
          if (anyGlobalGraphActive()) {
            hideGlobalGraph();
          }
          return;
        }

        if (e.key === "g" && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
          e.preventDefault();
          toggleGlobalGraph();
        }
      };
      document.addEventListener("keydown", documentKeydownHandler);

      // Re-open the dock if it was open before this navigation. anyGlobalGraphActive()
      // covers SPA transitions (the <html> class survives); the localStorage check
      // covers full page loads from graph-node clicks and fresh sessions.
      if (anyGlobalGraphActive() || localStorage.getItem(dockStateKey) === "true") {
        showGlobalGraph();
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        handleNav({ detail: { url: getSlugFromUrl() } });
      });
    } else {
      handleNav({ detail: { url: getSlugFromUrl() } });
    }
    document.addEventListener("prenav", function () {
      cleanupLocal();
      cleanupGlobal();
    });
    document.addEventListener("nav", handleNav);
    document.addEventListener("render", handleNav);

    function handleThemeChange() {
      renderLocal();
      if (anyGlobalGraphActive()) {
        showGlobalGraph();
      }
    }
    document.addEventListener("themechange", handleThemeChange);
  }
})();
