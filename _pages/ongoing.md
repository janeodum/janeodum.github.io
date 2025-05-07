---
layout: page
title: Cur Research
permalink: /Ongoing Research/
description:
nav: true
---
### Forecasting Complex Epidemic Dynamics with Generative Multimodal Models

#### Background  
Accurate epidemic forecasting is critical for public‑health planning—informing decisions about hospital capacity, staffing, medical supplies, and non‑pharmaceutical interventions. Traditional models (e.g., compartmental SIR frameworks or individual statistical methods) often use a single data stream (case counts or hospitalization rates) and provide point estimates without well‑calibrated uncertainty. Meanwhile, public aggregators like the CDC gather dozens of COVID‑19 forecasts, each built on varying data‐collection protocols and modeling assumptions, making apples‑to‑apples comparison difficult. Moreover, standard evaluation metrics (RMSE, MAE) don’t fully capture a model’s ability to anticipate peaks, troughs, or tail risks under evolving conditions.

#### Solution  
My dissertation research develops and rigorously evaluates **generative multimodal forecasting models** that unify heterogeneous epidemic data—case counts, genomic surveillance (variant frequencies), mobility patterns, and healthcare utilization—into a single probabilistic framework. Key elements include:

1. **Inclusion Criteria & Data Curation**  
   - Compile COVID‑19 and influenza‑like‑illness (ILI) weekly datasets spanning multiple seasons.  
   - Identify “peak” and “trough” periods where mortality curves sharply rise or fall, since model bias is most pronounced there.

2. **Model Architecture**  
   - **Diffusion & Transformer Hybrid:** Employ a perturb‑and‑denoise pipeline augmented by self‑attention blocks to capture long‑range dependencies and cross‑modal interactions.  
   - **Quantile‑Guided Sampling:** Use adaptive guidance to steer generative paths toward specific quantiles, ensuring accurate tail‐risk forecasts (e.g., ICU‑surge scenarios).

3. **Benchmarking & Evaluation**  
   - **Category 1 vs. Category 2 Models:** Mirror the CDC’s framework by grouping forecasts that explicitly cover peaks/troughs (Category 1) versus those that don’t (Category 2).  
   - **Fair Comparison:** Align prediction dates across all models; compute symmetric mean absolute percentage error (sMAPE) and continuous ranked probability score (CRPS) on daily and weekly horizons.  
   - **Robustness Tests:** Evaluate performance under simulated data shifts (e.g., sudden variant emergence, mobility surges).

4. **Key Findings**  
   - Our generative multimodal model reduces sMAPE by 15–25% over the CDC’s best single‑stream forecast on peak weeks.  
   - Uncertainty intervals capture observed hospitalization surges 90% of the time, compared to 60% for baseline statistical models.  
   - Influenza‑like‑illness experiments confirm generality: comparable gains in weekly ILI forecasts over traditional autoregressive baselines.

5. **Broader Impact & Next Steps**  
   - Release an open‑source benchmarking suite to standardize epidemic forecast evaluation.  
   - Extend to other domains (climate extremes, energy demand) by swapping in domain‐specific data modalities.  
   - Develop a lightweight dashboard for real‑time decision support in public‑health agencies.

By integrating diverse data sources within a principled generative framework and focusing on rigorous, fair evaluation metrics, my work delivers robust, uncertainty‑aware forecasts that outperform current CDC‑aggregated models—providing clearer guidance for resource allocation and intervention planning.  
