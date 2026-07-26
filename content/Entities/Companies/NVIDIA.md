---
tags:
  - entity
type: company
status: active
works_in:
  - "[[AI Hardware & Compute]]"
  - "[[Foundation Model Training]]"
  - "[[Inference & Serving Systems]]"
  - "[[Optical Interconnect & Co-Packaged Optics]]"
  - "[[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]]"
  - "[[KV-Cache Optimization & Compression]]"
  - "[[Quantization]]"
  - "[[Spatial Intelligence]]"
  - "[[Video Generation & World Models]]"
  - "[[Vision-Language-Action Models & Embodied Robotics]]"
---

## NVIDIA

*The dominant AI accelerator maker, and increasingly a full-stack player across hardware, systems software, and model infrastructure.*

## What they do
- Designs the GPUs (H100/H200, Blackwell, Rubin generations) that train and serve the large majority of frontier models
- Owns the CUDA software ecosystem most ML frameworks are built on top of, which is as much of a moat as the silicon itself
- Building out co-packaged optics / silicon photonics for scale-up interconnect (see [[Optical Interconnect & Co-Packaged Optics]]), and biomolecular foundation model tooling for life sciences (see [[AI for Biology, Genomics & Drug Discovery]])
- Ships Cosmos, a platform for "physical AI" (video/world models and simulation for robotics), and Isaac GR00T, a humanoid-specific robot foundation model and simulation stack — both invested directly in [[Video Generation & World Models]] and [[Vision-Language-Action Models & Embodied Robotics]]
- Investor/backer in spatial-AI startups (e.g. World Labs) rather than a direct model builder in [[Spatial Intelligence]] itself

## Where they fit
- Sits underneath nearly every other field in this atlas as the compute substrate — [[Foundation Model Training]] and [[Inference & Serving Systems]] both depend directly on NVIDIA hardware and software choices (e.g. MoE routing efficiency, quantization support are partly determined by what the silicon does well)
- Increasingly not just a hardware vendor but a systems-design partner — pushing disaggregated serving, co-packaged optics, and reference architectures that shape how the rest of the industry builds
- Isaac GR00T makes NVIDIA one of the leading humanoid-specific foundation-model/simulation stacks in [[Vision-Language-Action Models & Embodied Robotics]], alongside pure-play labs like Physical Intelligence and Google DeepMind
- Cosmos positions NVIDIA on the "simulator for physical AI" side of [[Video Generation & World Models]], distinct from pure creative-video players (Sora, Veo, Kling)
- In [[Spatial Intelligence]], NVIDIA shows up as capital and compute backing the category (World Labs' funding round) rather than as a model builder itself

## Notable work / recent moves
- Backed World Labs' \$1B spatial-intelligence funding round (see [[Spatial Intelligence]])
- Pushing co-packaged optics into production for scale-out and scale-up interconnect, targeting 2026 commercial availability
- Publishing reference biomolecular foundation model use cases for life-sciences discovery
- NVIDIA Dynamo (GA March 2026, GTC) — open-source orchestration layer for disaggregated prefill/decode serving, routing work across dedicated worker pools and coordinating cluster-scale KV cache via its KV Block Manager
- KVTC (ICLR 2026) — PCA-based KV-cache compression reporting up to 20x reduction
- Blackwell's fifth-generation Tensor Cores add native NVFP4/MXFP4 support, with TensorRT-LLM as the production quantization/serving stack built around it
- Isaac GR00T humanoid foundation-model/simulation stack and Cosmos physical-AI platform, both under active development as of 2026

## Watch list
- NVIDIA developer/technical blog, GTC keynotes

## Connections
**Works in:** [[AI Hardware & Compute]], [[Foundation Model Training]], [[Inference & Serving Systems]], [[Optical Interconnect & Co-Packaged Optics]], [[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]], [[KV-Cache Optimization & Compression]], [[Quantization]], [[Spatial Intelligence]], [[Video Generation & World Models]], [[Vision-Language-Action Models & Embodied Robotics]]
