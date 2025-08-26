# Startup Funding Simulator: Research Report

## Abstract
This study models equity dilution across funding rounds, providing founders with interactive visualizations of cap table evolution.

## Introduction
Understanding how valuations affect ownership is critical for startup planning. The simulator offers an educational tool to explore hypothetical investment scenarios.

## System Architecture
A React and TypeScript frontend utilizes Zustand for state management. The math.js library powers financial computations, while localStorage preserves scenarios between sessions.

## Implementation
Users define initial ownership, investor terms, and follow‑on rounds. The system recalculates post‑money valuations and investor stakes in real time, updating charts accordingly.

## Results
Case studies based on public startup data reproduced known dilution trajectories, suggesting accuracy of the underlying formulas.

## Future Work
Future enhancements include collaboration features, API endpoints for saving scenarios to a database, and Monte Carlo simulations for probabilistic outcomes.
