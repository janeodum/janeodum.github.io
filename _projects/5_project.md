---
layout: page
title: "EpiCast"
description: "Multi-modal AI epidemiological surveillance system for West Africa"
img: "assets/img/5.jpg"
importance: 1
category: Research
related_publications: false
---

<!-- TODO(jane): EpiCast won a competition and the win appears nowhere on this site.
     Fill in the exact competition name, the award tier and the date, then uncomment
     the line below. Add a matching one-liner in _news/ so it also shows on the home
     page. Do not paraphrase the award name from memory - use the official wording.

> **Award:** <tier> - <official competition name>, <month year>
-->

**Multi-Modal AI Epidemiological Surveillance System**

Built a mobile-first disease surveillance platform for West Africa (ECOWAS) combining fine-tuned medical LLMs with audio AI for syndromic monitoring and cough-based respiratory illness detection.

Fine-tuned and quantized MedGemma 4B to GGUF format for on-device inference, enabling a complete offline AI stack on mobile devices with sub-second response times and zero cloud dependency.

Integrated MedGemma SigLIP for clinical image triage, HeAR audio models for cough classification, and a multilingual NLP pipeline trained on 3,400+ corpus-grounded examples across French, Hausa, and Yoruba.

Designed a 4-tab mobile interface (Dashboard, Intake, Alerts, Reports) with real-time syndromic heatmaps and automated situation report generation using MedGemma 27B.

**Tech Stack:** MedGemma 4B/27B, MedGemma SigLIP, Google HeAR, FastAPI, RunPod Serverless, Python

<!-- TODO(jane): EpiCast is the strongest project here and has no images. Drop the
     screenshots into assets/img/ (the 4-tab mobile interface, a syndromic heatmap and
     a generated situation report), then uncomment the rows below, replace the paths
     and captions, and set one of them as the `img:` thumbnail in the front matter
     above, which currently points at a theme stock photo.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/epicast-dashboard.png" title="EpiCast dashboard" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/epicast-heatmap.png" title="Syndromic heatmap" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption describing what each screenshot shows.
</div>
-->
