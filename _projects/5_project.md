---
layout: page
title: "EpiCast"
description: "Multi-modal AI epidemiological surveillance system for West Africa"
img: "assets/img/5.jpg"
importance: 1
category: Previous Research
related_publications: false
---

**Multi-Modal AI Epidemiological Surveillance System**

Built a mobile-first disease surveillance platform for West Africa (ECOWAS) combining fine-tuned medical LLMs with audio AI for syndromic monitoring and cough-based respiratory illness detection.

Fine-tuned and quantized MedGemma 4B to GGUF format for on-device inference, enabling a complete offline AI stack on mobile devices with sub-second response times and zero cloud dependency.

Integrated MedGemma SigLIP for clinical image triage, HeAR audio models for cough classification, and a multilingual NLP pipeline trained on 3,400+ corpus-grounded examples across French, Hausa, and Yoruba.

Designed a 4-tab mobile interface (Dashboard, Intake, Alerts, Reports) with real-time syndromic heatmaps and automated situation report generation using MedGemma 27B.

**Tech Stack:** MedGemma 4B/27B, MedGemma SigLIP, Google HeAR, FastAPI, RunPod Serverless, Python
