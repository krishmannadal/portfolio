The portfolio currently uses highly structured, research-oriented placeholder data to maintain its layout. To replace this with your actual work, I need you to gather specific information for each project.

You can provide this to me in a markdown file, a JSON file, or just paste it in the chat.

Here is the exact checklist of what I need for each project:

1. The Basics
Project Name: (e.g., "Mini-R1" or "Nullius")
One-Liner: A single sentence summarizing what it is and the outcome.
Full Description: 1-2 paragraphs detailing the project context, what you built, and what you discovered.
Role & Timeline: Your role (e.g., "Sole Architect") and when it was done (e.g., "2024–2025").
Hardware Used: (e.g., "1x NVIDIA RTX 4050 Laptop GPU (6 GB VRAM)")
2. Links
GitHub URL
Demo / Live URL (if applicable)
Report / Paper URL (if applicable)
3. Quantitative Metrics (Provide 4-6)
For each metric, provide:

Label: (e.g., "Throughput", "Parameters", "Accuracy")
Value: (e.g., "17,316 tok/s", "42.1M", "24.28% → 2.48%")
Subtext: A tiny explanation (e.g., "Peak VRAM: 3.4 GB")
4. The Engineering & Architecture
The "Why": Why did you build this? What limitation in existing tools/research were you trying to overcome?
The Research Question: What exact hypothesis were you testing?
Architecture Details: 3-5 bullet points on the technical architecture (e.g., "12-layer decoder-only Transformer", "Custom 8k BPE Tokenizer").
Implementation Details: 3-5 bullet points on how you built it (e.g., "Pure PyTorch without HuggingFace abstractions", "Contiguous EOS token packing").
5. Experiments & Findings
For every experiment you ran within the project, provide:

Title:
Hypothesis: What did you think would happen?
Expected vs. Observed: What actually happened? (Include numerical deltas if possible).
Verdict: Was it a DISCOVERY, NULL RESULT, CONFIRMED, or REVISED & RETRACTED?
6. The "Audit" Story (Crucial for the "Serious Engineer" vibe)
If a project had a moment where you caught a mistake, found data leakage, or realized a metric was deceptive, provide:

Original Claim: What did you originally think you achieved?
The Flaw Found: How did you realize it was wrong? (e.g., "Found 35.5% train/eval overlap").
Root Cause & Revised Metric: What was the real number/truth?
Reproducibility Guarantee: How did you fix the pipeline so this doesn't happen again?
7. Hindsight
Limitations: 2-3 bullet points on what the project cannot do or where the methodology falls short.
Key Lessons: 2-3 bullet points on what this taught you about ML systems.
How to proceed: You don't have to provide all of this at once. You can prepare a document (e.g., real_portfolio_data.md) with this structure for your 3–4 best projects. Once you upload it or paste it here, I will seamlessly swap the placeholder data with your actual achievements!