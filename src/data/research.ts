export interface ResearchQuestion {
  id: string;
  category: "Language Models" | "Continual Learning" | "Evaluation Rigor" | "ML Systems";
  status: "Completed Experiment" | "Active Investigation" | "Open Hypothesis";
  title: string;
  premise: string;
  methodology: string;
  currentFindingOrExpectation: string;
  linkedProjectId?: string;
  tags: string[];
}

export const RESEARCH_QUESTIONS: ResearchQuestion[] = [
  {
    id: "narrow-skill-transfer",
    category: "Language Models",
    status: "Completed Experiment",
    title: "Does narrow arithmetic supervision induce general mathematical reasoning in small transformers?",
    premise: "Common intuition suggests that teaching a model step-by-step arithmetic formulas creates latent reasoning primitives that transfer to word problems (e.g. GSM8K).",
    methodology: "Pretrained a 42.1M decoder-only Transformer on 500M tokens, then fine-tuned on deterministically verified multi-digit arithmetic and evaluated across GSM8K and SVAMP test splits.",
    currentFindingOrExpectation: "Transfer was null (Δ = -0.30% on GSM8K). Small transformers memorize syntactic formula execution without internalizing the semantic decomposition needed for natural-language problem solving.",
    linkedProjectId: "mini-r1",
    tags: ["Transfer Learning", "GSM8K", "Small Language Models", "Ablation"]
  },
  {
    id: "replay-composition-vs-dose",
    category: "Continual Learning",
    status: "Completed Experiment",
    title: "How does replay distribution composition compare to raw replay volume in catastrophic forgetting?",
    premise: "Standard replay heuristics focus on the percentage of previous data retained (e.g., 20% vs 50% replay buffer).",
    methodology: "Trained sequentially on arithmetic followed by natural text, comparing 25% on-distribution replay against 50% off-distribution replay.",
    currentFindingOrExpectation: "Replay alignment dominates dose: 25% on-distribution retained 94.8% accuracy, while 50% off-distribution retained only 3.8%. Representation manifolds require exact topological support to avoid collapse.",
    linkedProjectId: "mini-r1",
    tags: ["Catastrophic Forgetting", "Continual Learning", "Experience Replay"]
  },
  {
    id: "eval-leakage-auditing",
    category: "Evaluation Rigor",
    status: "Completed Experiment",
    title: "How pervasive is hidden n-gram overlap in synthetic math and reasoning benchmarks?",
    premise: "High accuracy figures on synthetic reasoning tasks frequently reflect benchmark memorization rather than algorithmic understanding.",
    methodology: "Developed an automated token-level overlap auditor that computes exact n-gram and normalized formula overlaps between training buffers and evaluation splits.",
    currentFindingOrExpectation: "Caught a 35.5% overlap in our own earlier benchmark suite that had inflated reported accuracy from 2.48% to 24.28%. Led to complete retraction and revision of earlier conclusions.",
    linkedProjectId: "mini-r1",
    tags: ["Data Contamination", "Leakage Audit", "Scientific Honesty"]
  },
  {
    id: "aggregator-verifier-decoupling",
    category: "Evaluation Rigor",
    status: "Active Investigation",
    title: "Can isolating claim-level verification from document-level aggregation reveal why hallucination benchmarks disagree?",
    premise: "Existing hallucination benchmarks bundle verifier accuracy with aggregation heuristics, masking where failures occur.",
    methodology: "Constructed the Nullius testbed to evaluate pessimistic, majority, and probabilistic aggregators across identical frozen claim/evidence pair scores.",
    currentFindingOrExpectation: "Pessimistic aggregation causes severe score degradation as claim count increases (F1 drops 0.81 → 0.44), proving aggregator choice is an independent confounder that invalidates cross-paper comparisons.",
    linkedProjectId: "nullius",
    tags: ["Hallucination Detection", "Aggregation Rules", "Evaluation Benchmarking"]
  },
  {
    id: "multi-tenant-lora-serving",
    category: "ML Systems",
    status: "Active Investigation",
    title: "What are the latency and memory bounds of dynamic LoRA hot-swapping under concurrent tenant loads?",
    premise: "Serving private per-tenant adapters over a shared base model is computationally optimal, but GPU cache eviction can trigger latency spikes.",
    methodology: "Benchmarking vLLM multi-LoRA routing with varying LRU cache sizes and adapter parameter ranks on consumer and workstation GPUs.",
    currentFindingOrExpectation: "Pre-loaded adapters incur <8ms overhead; un-cached swaps incur >200ms latency. LRU cache management and speculative adapter loading are essential for stable p99 latencies.",
    linkedProjectId: "privatetune",
    tags: ["vLLM", "LoRA Serving", "Multi-Tenancy", "Systems"]
  },
  {
    id: "compute-constrained-pretraining",
    category: "Language Models",
    status: "Open Hypothesis",
    title: "Can contiguous EOS token packing and weight-tying enable sub-100M parameter models to achieve competitive perplexity under 10 GB VRAM budgets?",
    premise: "Small research labs and student engineers often consider pretraining inaccessible due to compute costs.",
    methodology: "Implementing custom sequence concatenation with causal triangular attention masks and studying parameter scaling curves on single consumer GPUs.",
    currentFindingOrExpectation: "Token packing increased useful token density from 41.6% to 100%, cutting training wall-clock time by ~58% on consumer GPUs. Proves serious pretraining research is feasible under consumer constraints.",
    linkedProjectId: "mini-r1",
    tags: ["Compute Constraints", "Pretraining", "CUDA Efficiency"]
  }
];

export const RESEARCH_LOOP_STEPS = [
  {
    step: "01",
    name: "Question",
    desc: "Isolate a crisp, falsifiable hypothesis at the boundary of model capability or evaluation reliability."
  },
  {
    step: "02",
    name: "Hypothesis",
    desc: "Define unambiguous success criteria and lower-bound baseline metrics before running any GPU jobs."
  },
  {
    step: "03",
    name: "Implementation",
    desc: "Build architectures, tokenizers, and datasets from first principles in pure PyTorch — no black-box abstractions."
  },
  {
    step: "04",
    name: "Controlled Run",
    desc: "Lock seeds, serialize complete RNG states, and run seed-fixed experiments with single-variable ablations."
  },
  {
    step: "05",
    name: "Evaluation",
    desc: "Benchmark against explicit null baselines, out-of-distribution splits, and network-isolated harnesses."
  },
  {
    step: "06",
    name: "Leakage Audit",
    desc: "Ruthlessly search for synthetic data contamination, train/eval overlap, and hidden confounding variables."
  },
  {
    step: "07",
    name: "Correction",
    desc: "Publish honest findings: celebrate confirmed discoveries, report null results, and retract contaminated claims."
  }
];
