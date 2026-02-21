---
layout: page
title: Projects
permalink: /projects/
description: Research and applied projects spanning AI, ML, and software engineering.
nav: true
nav_order: 1
display_categories: [Previous Research, fun]
horizontal: false
---

## EpiCast — Multi-Modal AI Epidemiological Surveillance System
*AI-powered disease surveillance for underserved regions.* **In Development**

EpiCast is a multi-modal AI epidemiological surveillance system designed for West Africa, addressing the critical gap in real-time disease monitoring in low-resource settings. It combines large language models (MedGemma) for multilingual syndromic report extraction with audio AI models (Google HeAR) for cough-based respiratory illness detection, deployed on RunPod serverless GPU infrastructure.

---

## OmniAsset — Consolidated Asset Tracking App
*All your assets. One dashboard.* **Shipyard Creator Contest**

OmniAsset is a React Native mobile application that gives users a unified view of all their financial and physical assets in one place. It aggregates data across accounts, investments, and holdings to provide real-time consolidated net worth tracking, trend analysis, and asset breakdowns.

---

## Omnia — AI-Powered Animated Love Story Generator
*Turn your love story into an animated film.* **Completed**

Omnia is an AI-powered application that transforms couples' personal love stories into animated short films. Users input relationship details and Omnia generates a personalized animated narrative using Stable Diffusion for image generation and AnimateDiff for video animation, delivered through a full-stack client-server architecture.

---

## Pincel (Diagramify) — Research Paper to Architecture Diagram Converter
*From dense research to clear architecture — instantly.* **Completed**

Pincel is an AI tool that reads academic research papers and automatically converts the described model architectures, pipelines, and system designs into clean, structured architecture diagrams. Built for researchers and engineers who need to quickly understand or present complex AI/ML systems without manually redrawing them.

---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
