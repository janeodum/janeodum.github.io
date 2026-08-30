---
layout: page
title: Research
permalink: /research/
redirect_from:
  - /Ongoing Research/
  - /Ongoing%20Research/
description: Generative and multimodal approaches to time series forecasting under sparse data and uncertainty.
nav: true
nav_order: 0
---
### Forecasting Complex Time Series Dynamics with Generative Multimodal Models

My research focuses on **generative frameworks** for **multimodal and single modal time series forecasting**, unifying diverse streams, numerical counts, policy or textual annotations, graph‐structured mobility data, and sensor readings into coherent, uncertainty‐aware predictions. The work I do applies analogous principles to purely temporal and structured modalities.

#### 1. Multimodal Fusion  
- **Numerical Data:** daily case counts, hospital occupancy, energy usage  
- **Textual Signals:** policy announcements, public‐health advisories, news sentiment  
- **Graph Inputs:** aggregated mobility/contact networks, supply‐chain topologies  
- **Shared Latent Space:** modality‐specific encoders feed into a unified representation, with cross‐attention mechanisms inspired by transformer architectures

> *“By treating each data modality as a sequence of tokens, we leverage attention to learn interactions across streams—much like in vision transformers, but wholly within the time‑series domain.”*

#### 2. Generative Forecasting & Uncertainty  
- **Diffusion‐Style Sampling:** a learnable perturb‐and‐denoise process that yields full trajectory ensembles  
- **Quantile Conditioning:** guide sampling toward specified quantiles (e.g., 95th percentile demand) to assess tail‑risk scenarios. This is similar to the way classifier free guidance work in diffusion model.
- **Flow‐Based Refinement:** apply continuous normalizing flows to sharpen distributional outputs and correct sampling biases

> *“Our hybrid diffusion–flow pipeline produces well‐calibrated uncertainty bands, that offers decision‑makers clear confidence intervals instead of single‑point estimates.”*

<!-- TODO(jane): the section numbering runs 1, 2, 4, 5 - section 3 is missing.
     If it was dropped deliberately, renumber the two headings below to
     "#### 3. Evaluation & Case Studies" and "#### 4. Future Directions".
     If it was lost, restore it here as section 3. -->

#### 4. Evaluation & Case Studies  
- **Generic Time Series Benchmarks:**  
  - Evaluate on standard forecasting datasets (M‑3, M‑4, NN5) covering industry, finance, and demographics.  
  - Compare point‑forecast accuracy (sMAPE, MASE) and probabilistic metrics (CRPS, interval coverage) against classic and state‑of‑the‑art baselines (ARIMA, ETS, Prophet).  
- **Epidemic Forecasting:**  
  - COVID‑19 and influenza‑like‑illness (ILI) weekly forecasts, benchmarked against CDC‑aggregated models with aligned dates and metrics (sMAPE, CRPS, coverage).  
Each study measures both point‐error (sMAPE, RMSE) and distributional accuracy (CRPS, quantile coverage).

#### 5. Future Directions  

#### Interpretability & Explainability  
- **Attention Maps:** visualize which modalities (e.g., mobility vs. text signals) drive forecast changes at each timestep  

- **Local Attribution:** adapt SHAP‐style methods to our generative paths, highlight key inputs behind any given prediction

> *“These explainability tools ensure transparency and build trust, critical when forecasts guide high‑stakes resource allocation.”*

- **Dynamic Adaptation:** implement online learning to update models as new data arrive.  
- **Meta‐Learning Extensions:** enable rapid adaptation to new domains (e.g., emerging pathogens).  
- **Open‑Source Toolkit:** package our multimodal encoders, generative samplers, and explainability modules—so that colleagues specializing in generative vision or interpretability methods can readily contribute their expertise.


