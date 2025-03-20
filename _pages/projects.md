---
layout: page
title: Prev Research
permalink: /projects/
description: A growing collection of my Previous research and projects.
nav: true
nav_order: 1
display_categories: [Previous Research, fun]
horizontal: false
---
## Adaptive Quantile Guidance in Diffusion Models: Multi-Task Learning for Pandemic Time Series Forecasting  

### Background
  
The COVID-19 pandemic, alongside seasonal epidemics like influenza and RSV, shows the critical need for accurate and uncertainty-aware time series forecasting to guide public health responses. While large-scale epidemiological data (e.g., CDC-reported cases, hospitalizations) offers opportunities to model disease dynamics, existing approaches face significant challenges. Conventional statistical methods (e.g., ARIMA) struggle with non-stationary patterns and sparse observations, while deep learning methods (e.g., transformers, recurrent networks) often produce miscalibrated uncertainty estimates. Diffusion models, though promising for probabilistic forecasting, still remains data-inefficient when trained on single domains and lack mechanisms to dynamically adjust prediction intervals during volatility shifts. There are two key gaps: (1) **cross-domain generalization**—models trained on one disease (e.g., COVID-19) fail to leverage shared temporal patterns from related domains (e.g., influenza); and (2) **rigid uncertainty calibration**—fixed quantiles in diffusion models lead to overconfident or underprepared forecasts during outbreak surges.  

### Solution

This paper introduces *Adaptive Quantile Diffusion (AQDiff)*, a diffusion-based framework for pandemic forecasting that addresses these gaps through two strategies: **(1)** *multi-task pre-training* across heterogeneous epidemiological datasets (COVID-19, ILI, RSV) to learn shared temporal dynamics, and **(2)** *adaptive quantile guidance* that dynamically adjusts prediction intervals using real-time residual feedback. The pre-training phase trains a single diffusion model on multiple disease datasets, enabling knowledge transfer to improve data efficiency. During fine-tuning, the model employs an exponential-weighted buffer of recent forecast errors to iteratively refine quantile levels, this ensures calibrated uncertainty estimates. For example, if recent predictions underestimate actual cases (residuals skew positive), the system automatically increases quantile targets to produce more conservative forecasts.  

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
