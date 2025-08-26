# Designify: Research Report

## Abstract
Designify explores community‑driven product design where voting data informs merchandise production. The research focuses on participatory design workflows and the integration of payment processing within a feedback loop.

## Introduction
Community engagement can surface niche product ideas. Designify allows users to submit designs and collectively decide which items reach manufacturing, reducing inventory risk.

## System Architecture
A Next.js frontend interfaces with a Firebase backend for authentication and storage. Cloudinary hosts submitted images while Stripe manages payments for unlocked products.

## Implementation
Voting thresholds trigger webhooks that create Stripe checkout sessions. Real‑time updates propagate via Firebase listeners, ensuring participants see campaign status instantly.

## Results
Pilot tests with sample designs showed increased participation when voting progress was visually represented. Stripe transactions completed successfully in a test environment.

## Future Work
Future research includes dynamic pricing strategies, reputation systems for designers, and on‑chain provenance records for limited editions.
