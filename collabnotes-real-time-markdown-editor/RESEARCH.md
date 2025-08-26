# CollabNotes: Research Report

## Abstract
CollabNotes evaluates real‑time collaborative editing using WebSockets and Markdown rendering. This study discusses conflict resolution, latency considerations, and user experience for synchronous note taking.

## Introduction
Remote teams require lightweight collaborative tools. Unlike heavyweight document suites, CollabNotes aims for simplicity while preserving real‑time responsiveness and version safety.

## System Architecture
The system employs a React interface communicating with a Node.js server via Socket.IO. Each document session broadcasts edits to peers and persists revisions in MongoDB for recovery.

## Implementation
We implemented operational transform‑style merging to reconcile concurrent edits. Markdown parsing runs client‑side for immediate preview while the server maintains canonical text state.

## Results
Simulated editing sessions with up to ten clients maintained sub‑200ms latency and zero data loss during disconnects, validating the Socket.IO approach for small teams.

## Future Work
Research avenues include integrating CRDT algorithms for offline support, rich media embedding, and access control layers for large organizations.
