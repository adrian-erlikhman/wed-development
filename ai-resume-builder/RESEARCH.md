# AI Resume Builder: Research Report

## Abstract
This paper investigates a system that converts structured user inputs into polished resumes using natural language generation and PDF rendering. The project evaluates prompt engineering techniques for consistent resume styles and the performance of server‑side PDF generation.

## Introduction
Modern job seekers often maintain multiple resume versions. Automating resume creation reduces cognitive load and ensures consistency. We explore an AI pipeline that transforms user forms into contextually rich resumes.

## System Architecture
The application comprises a React frontend, an Express API, and OpenAI's GPT model for text synthesis. User data flows from the form to the API, which crafts prompts and converts model output into HTML. PDFKit then renders the HTML into downloadable PDFs.

## Implementation
We developed a schema to capture experience, education, and skills. The backend sanitizes inputs, orchestrates GPT requests, and streams generated sections to the client. PDF creation occurs server‑side to maintain formatting control.

## Results
Initial tests with sample resumes produced coherent, professional documents. Average generation time remained under five seconds, demonstrating viability for interactive use.

## Future Work
Further research includes optimizing prompt templates, introducing resume themes, and evaluating alternative LLMs for cost and latency trade‑offs. Incorporating user feedback loops could improve accuracy over time.
