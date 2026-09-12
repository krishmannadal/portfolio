export interface LabQAItem {
  id: string;
  query: string;
  category: "Flagship" | "Evaluation" | "Systems" | "Research & Ethics" | "Background";
  answer: string;
  keyPoints: string[];
  referencedProject?: string;
}

export const LAB_KNOWLEDGE_BASE: LabQAItem[] = [
  {
    id: "mini-r1-audit",
    query: "What was the Mini-R1 self-audit discovery?",
    category: "Flagship",
    answer: "During evaluation of Mini-R1's arithmetic continual learning, an initial 24.28% accuracy was reported and initially attributed to replay data preservation. Krishna conducted an adversarial leakage audit on the evaluation pipeline, discovering a 35.5% token overlap between the training buffer and test sets. When evaluated on clean held-out splits, the true accuracy was 2.48%. Furthermore, Krishna isolated parameter freezing rather than replay collapse as the true mechanism behind generation failure, retracted the initial conclusion, and documented the self-correction in research reports.",
    keyPoints: [
      "Audited own project and caught 35.5% train/eval overlap.",
      "Revised reported accuracy from 24.28% down to 2.48%.",
      "Retracted earlier conclusion and published correction.",
      "Replaced heuristic trust with automated n-gram leakage audits."
    ],
    referencedProject: "mini-r1"
  },
  {
    id: "mini-r1-hardware",
    query: "What hardware was Mini-R1 trained on and what were the training metrics?",
    category: "Flagship",
    answer: "Mini-R1 (42.1M parameters, 12-layer decoder-only Transformer) was pretrained entirely from scratch on a single consumer laptop GPU: an NVIDIA GeForce RTX 4050 Laptop GPU with 6 GB VRAM. Training completed in approximately 8 hours on 500M tokens, achieving a throughput of 17,316 tokens/second and peak VRAM of 3.4 GB (well under the 6 GB hardware ceiling), reaching a validation perplexity of 17.68.",
    keyPoints: [
      "Hardware: 1x NVIDIA RTX 4050 Laptop GPU (6 GB VRAM).",
      "Model Size: 42.1M parameters (12 layers, 384 hidden dim, 6 heads).",
      "Throughput: 17,316 tokens/sec.",
      "Token packing increased useful token density from 41.6% to 100%."
    ],
    referencedProject: "mini-r1"
  },
  {
    id: "arithmetic-transfer",
    query: "Did arithmetic supervision transfer to GSM8K natural language reasoning?",
    category: "Flagship",
    answer: "No. In Experiment #07 of the Mini-R1 series, Krishna tested whether fine-tuning on deterministically verified arithmetic steps transferred to natural-language mathematical reasoning on GSM8K. The empirical transfer was null: Δ = -0.30% (within stochastic variance). The model learned syntactic formula execution but failed to internalize the semantic decomposition required to extract equations from natural language word problems.",
    keyPoints: [
      "Empirical result: Null transfer (Δ = -0.30% on GSM8K).",
      "Formula manipulation did not translate into natural language reasoning.",
      "Reported honestly as an informative negative result."
    ],
    referencedProject: "mini-r1"
  },
  {
    id: "catastrophic-forgetting",
    query: "What did the catastrophic forgetting experiments reveal about replay data?",
    category: "Flagship",
    answer: "Experiment #14 investigated replay composition versus replay volume during continual fine-tuning. The findings demonstrated that replay alignment matters far more than replay dose: 25% on-distribution replay retained 94.8% of learned 2-digit arithmetic, whereas 50% off-distribution replay retained only 3.8%. Raw volume without manifold alignment fails to protect fragile algorithmic representations from collapse.",
    keyPoints: [
      "Replay composition matters far more than replay dose.",
      "25% on-distribution replay: 94.8% retention.",
      "50% off-distribution replay: 3.8% retention."
    ],
    referencedProject: "mini-r1"
  },
  {
    id: "nullius-design",
    query: "Why is Nullius described as an inspection harness rather than a hallucination eliminator?",
    category: "Evaluation",
    answer: "Krishna explicitly avoids marketing hype: Nullius does not claim to 'eliminate hallucinations'. Instead, it is a scientific inspection harness that separates the hallucination pipeline into 6 discrete stages (ClaimExtractor → Retriever → Reranker → Verifier → Aggregator → Trace). Crucially, the atomic verifier operates on a single claim/evidence pair, while the multi-claim aggregator is kept separate. This allows researchers to study aggregator heuristics as an independent variable and includes explicit null baselines.",
    keyPoints: [
      "Scientific research harness, NOT a commercial marketing claim.",
      "Decoupled verifier and aggregator to isolate confounding factors.",
      "Includes null baselines (random, constant, majority) to verify signal.",
      "Operates under network-isolated local evaluation."
    ],
    referencedProject: "nullius"
  },
  {
    id: "privatetune-status",
    query: "What is PrivateTune and what is its current status?",
    category: "Systems",
    answer: "PrivateTune is a private multi-tenant fine-tuning platform engineered so client data never leaves local host infrastructure. It serves dedicated per-tenant LoRA adapters over a single shared open-weight base model using vLLM, with SHA256 artifact hashing and automated regression gates. It is explicitly labeled as 'Under Development' because core pipeline components are functional, while serving resilience and multi-node scaling are actively being hardened.",
    keyPoints: [
      "Single base model in memory + per-tenant LoRA adapters.",
      "100% on-host data privacy guarantee (zero external API calls).",
      "Status: Honestly labeled as 'Under Development'.",
      "Built with vLLM, MLflow, Docker Compose, and FastAPI."
    ],
    referencedProject: "privatetune"
  },
  {
    id: "gsoc-astronomy",
    query: "Is the GSoC / ML4Sci EXXA2 result on real astronomical data?",
    category: "Research & Ethics",
    answer: "No. The 0.92 silhouette score, 0.49 MS-SSIM, and 4 morphological clusters were achieved on a controlled synthetic benchmark of protoplanetary disk imagery. Krishna explicitly notes that synthetic benchmarks do not establish scientific validity on real astronomical observational data (e.g. ALMA/JWST), which contain non-Gaussian beam convolution and phase noise not modeled in synthetic generation.",
    keyPoints: [
      "Conducted on synthetic protoplanetary disk benchmarks.",
      "Explicitly stated that synthetic success ≠ observational validity.",
      "Uses Convolutional Autoencoder + UMAP + HDBSCAN."
    ],
    referencedProject: "gsoc-ml4sci"
  },
  {
    id: "research-interests",
    query: "What are Krishna's primary research interests?",
    category: "Background",
    answer: "Krishna's research direction focuses on: (1) Language model training and evaluation under tight compute budgets; (2) Catastrophic forgetting and continual learning; (3) Transfer of narrow algorithmic skills to general reasoning; (4) Memorization vs generalization measurement; (5) Evaluation methodology and leakage auditing; and (6) Reproducible ML systems engineering.",
    keyPoints: [
      "Language model pretraining under compute constraints.",
      "Continual learning & catastrophic forgetting dynamics.",
      "Evaluation methodology, leakage auditing, and falsifiability.",
      "Reproducible ML systems with seed-fixed determinism."
    ]
  }
];
