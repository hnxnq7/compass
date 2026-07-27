---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Supervised & Parameter-Efficient Fine-Tuning]]"
---

## UW NLP (Zettlemoyer Lab)

*Luke Zettlemoyer's group at the University of Washington — home of Tim Dettmers' QLoRA, the paper that made LoRA fine-tuning of large models practical on a single consumer GPU.*

## What they do
- Academic NLP lab at UW spanning language model pretraining, quantization, and efficient adaptation methods
- Authored "QLoRA: Efficient Finetuning of Quantized LLMs" (Dettmers, Pagnoni, Holtzman, Zettlemoyer — UW, NeurIPS 2023): combines 4-bit NormalFloat quantization, double quantization, and paged optimizers with LoRA adapters to fine-tune a 65B-parameter model on a single 48GB GPU while preserving full 16-bit fine-tuning quality
- Trained Guanaco on top of QLoRA, reaching 99.3% of ChatGPT's performance on the Vicuna benchmark with 24 hours of fine-tuning on one GPU — the notable result that made the method's practical impact concrete rather than theoretical

## Where they fit
- QLoRA is the direct technical answer to this field's "what seems genuinely hard here" tension between PEFT's capacity bottleneck and hardware accessibility — it doesn't remove the bottleneck, but it moves the hardware bar low enough that PEFT became the default rather than a niche technique
- Complements [[Unsloth]] (which further speeds up and reduces memory for LoRA/QLoRA kernels specifically) and [[Hugging Face]]'s PEFT library (the reference implementation both QLoRA and Unsloth's kernels plug into)

## Notable work / recent moves
- QLoRA's bitsandbytes quantization library remains a standard dependency across the PEFT/LoRA fine-tuning ecosystem, including Unsloth's and Hugging Face's stacks

## Watch list
- Tim Dettmers' publication page, UW NLP group site

## Connections
**Works in:** [[Supervised & Parameter-Efficient Fine-Tuning]]
