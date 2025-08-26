# SafeJew Community Platform: Research Report

## Abstract
SafeJew investigates crowdsourced reporting of antisemitic incidents, combining geospatial visualization with secure submission workflows.

## Introduction
Communities benefit from transparent incident tracking to allocate resources and raise awareness. This project studies how digital reporting can support safety efforts without compromising privacy.

## System Architecture
React provides the client interface, while Node.js with MongoDB stores reports. Mapbox renders geospatial markers, and Auth0 manages authentication for administrators.

## Implementation
Submissions are validated client‑side and server‑side, then geocoded before storage. Admin dashboards display aggregated statistics, enabling trend analysis.

## Results
Testing with mock data demonstrated intuitive map navigation and low latency for marker updates. The system maintained data integrity under concurrent submissions.

## Future Work
Future research will explore encrypted report storage, cross‑city data federation, and predictive analytics to anticipate incident hotspots.
