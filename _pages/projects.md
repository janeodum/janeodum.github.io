---
layout: page
title: Projects
permalink: /projects/
description: Research and applied projects spanning AI, ML, and software engineering.
nav: true
nav_order: 1
display_categories: [Research, Applied, Product]
horizontal: false
---

## EpiCast — Multi-Modal AI Epidemiological Surveillance System

Built a mobile-first disease surveillance platform for West Africa (ECOWAS) combining fine-tuned medical LLMs with audio AI for syndromic monitoring and cough-based respiratory illness detection. Integrates MedSigLIP for clinical image triage, HeAR audio models for cough classification, and a multilingual NLP pipeline trained on 9,700+ corpus-grounded examples across French, Hausa, and Yoruba.

---

## OmniAsset — AI-Driven Consolidated Asset Tracking Platform

Built a React Native mobile app that tracks six asset classes (stocks, crypto, real estate, vehicles, precious metals, cash) with live market pricing, unified net worth calculation, and AI-powered portfolio risk analysis. Integrates a financial LLM agent for personalized portfolio critique and a FIRE calculator with interactive wealth projections.

---

## Omnia — AI-Powered Animated Love Story Generator

Engineered a full-stack generative AI pipeline that transforms couples' narratives into personalized animated short films using multi-modal LLMs for story understanding, scene decomposition, and character-consistent image generation. Features a two-stage architecture with LLM-driven scene synthesis and image-to-video animation.

---

## Pincel (Diagramify) — Research Paper to Architecture Diagram Converter

Developed an AI-powered tool that automatically generates publication-quality architecture diagrams from research papers and codebases, reducing manual diagram creation time from 4-8 hours to minutes. Designed for academic workflows with support for NeurIPS, ICML, and ICLR diagram styles.

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
