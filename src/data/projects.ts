export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
  status?: "normal" | "highlight" | "warning" | "revised";
}

export interface ProjectSection {
  id: string;
  title: string;
  slug: string;
  badge: string;
  category: "Flagship Pretraining" | "Evaluation Harness" | "ML Systems" | "Scientific ML" | "Empirical Study" | "Engineering Platform";
  status: "Completed & Audited" | "Inspection Harness" | "Under Development" | "Synthetic Benchmark" | "Research Prototype" | "Deployed Platform";
  description: string;
  oneLiner: string;
  hardware?: string;
  role: string;
  timeline: string;
  githubUrl: string;
  demoUrl?: string;
  reportUrl?: string;
  tags: string[];
  metrics: ProjectMetric[];
  why: string;
  researchQuestion: string;
  architecture: string[];
  implementation: string[];
  experiments: {
    title: string;
    hypothesis: string;
    expected: string;
    observed: string;
    delta?: string;
    verdict: "NULL RESULT" | "CONFIRMED" | "REVISED & RETRACTED" | "DISCOVERY";
    details: string;
  }[];
  auditStory?: {
    originalClaim: string;
    flawFound: string;
    overlapPercentage: string;
    revisedMetric: string;
    rootCause: string;
    reproducibilityGuarantees: string[];
  };
  limitations: string[];
  keyLessons: string[];
}

export const PROJECTS: ProjectSection[] = [
  {
    id: "mini-r1",
    slug: "mini-r1",
    title: "Mini-R1 / Small Language Model",
    badge: "FLAGSHIP RESEARCH & PRETRAINING",
    category: "Flagship Pretraining",
    status: "Completed & Audited",
    oneLiner: "42.1M-parameter decoder-only Transformer built and pretrained from scratch in pure PyTorch on a single 6 GB GPU, followed by an audited 24-task study of transfer and catastrophic forgetting.",
    description: "Built without HuggingFace model abstractions or prebuilt attention classes. Explored token packing efficiency, deterministically verified arithmetic supervision transfer to GSM8K, and catastrophic forgetting under varying replay compositions — culminating in an honest self-audit that caught a 35.5% evaluation data contamination.",
    hardware: "1x NVIDIA GeForce RTX 4050 Laptop GPU (6 GB VRAM)",
    role: "Sole Model Architect & Experimenter",
    timeline: "2024–2025",
    githubUrl: "https://github.com/Krishna-Mandal/mini-r1",
    reportUrl: "#audit-section",
    tags: ["PyTorch", "Custom Transformer", "SentencePiece", "CUDA", "Continual Learning", "Leakage Audit"],
    metrics: [
      { label: "Parameters", value: "42.1M", subtext: "12 layers, 384 hidden dim, 6 heads" },
      { label: "Tokens Pretrained", value: "500M", subtext: "Single RTX 4050 GPU in ~8 hours" },
      { label: "Throughput", value: "17,316 tok/s", subtext: "Peak VRAM: 3.4 GB (56% ceiling)" },
      { label: "Val Perplexity", value: "17.68", subtext: "Token packing increased density 41.6% → 100%" },
      { label: "Arithmetic GSM8K Transfer", value: "Δ = -0.30%", subtext: "Empirical null transfer observed", status: "warning" },
      { label: "Arithmetic Accuracy", value: "24.28% → 2.48%", subtext: "Post-audit revision after 35.5% leakage found", status: "revised" }
    ],
    why: "Most language model research relies on giant prebuilt libraries and cluster-scale compute. I wanted to understand the absolute fundamentals of the Transformer stack from the ground up: tensor shapes, attention masks, memory allocation, token packing density, and how small models behave under specialized supervision.",
    researchQuestion: "Does deterministic supervision on narrow arithmetic tasks transfer to natural-language mathematical reasoning, and how does replay composition govern catastrophic forgetting under tight compute budgets?",
    architecture: [
      "12-layer decoder-only Transformer built in pure PyTorch (no transformers.PreTrainedModel).",
      "Custom multi-head attention with causal triangular masking and pre-LayerNorm residual streams.",
      "Weight-tied embedding and unembedding projections to minimize parameter count under 6 GB memory budget.",
      "Custom 8,192-vocabulary SentencePiece BPE tokenizer configured with isolated single-digit tokens (0-9) to prevent multi-digit BPE merging artifacts.",
      "Contiguous EOS-separated sequence packing eliminating padding tokens, boosting token density from 41.6% to 100%."
    ],
    implementation: [
      "Trained on a consumer 6 GB laptop GPU using mixed precision (torch.cuda.amp.autocast).",
      "Training completed in ~8 hours with sustained 17,316 tokens/sec throughput.",
      "Implemented strict RNG checkpointing, deterministic seed locks, and SHA256 dataset manifests.",
      "Built a test suite of 26 test modules and 56 granular research run reports."
    ],
    experiments: [
      {
        title: "Experiment #07: Arithmetic to GSM8K Transfer",
        hypothesis: "Supervising on deterministically verified arithmetic steps will improve chain-of-thought mathematical reasoning on GSM8K.",
        expected: "Positive transfer on GSM8K reasoning accuracy.",
        observed: "Transfer was null: Δ = -0.30% (within stochastic variance).",
        delta: "-0.30%",
        verdict: "NULL RESULT",
        details: "The model learned to parse arithmetic formulas without acquiring the underlying semantic reasoning required to extract equations from natural language problem statements."
      },
      {
        title: "Experiment #14: Replay Composition vs. Replay Dose",
        hypothesis: "Increasing off-distribution replay volume will prevent catastrophic forgetting of arithmetic skills during continual learning.",
        expected: "Higher replay dose (50%) will outperform lower replay dose (25%).",
        observed: "Replay composition mattered far more than dose: 25% on-distribution replay retained 94.8% of learned 2-digit arithmetic, whereas 50% off-distribution replay retained only 3.8%.",
        delta: "94.8% vs 3.8%",
        verdict: "CONFIRMED",
        details: "Off-distribution data failed to preserve the narrow representation manifold required for exact multi-step digit calculations."
      },
      {
        title: "Experiment #21: The Leakage Audit & Generation Collapse",
        hypothesis: "Earlier high accuracy (24.28%) on arithmetic benchmarks was attributed to replay data preservation during fine-tuning.",
        expected: "Valid mathematical generalization.",
        observed: "Discovered 35.5% train/evaluation overlap in the benchmark generation script. Re-evaluating on clean held-out splits dropped accuracy to 2.48%.",
        delta: "24.28% → 2.48%",
        verdict: "REVISED & RETRACTED",
        details: "Furthermore, isolated that generation collapse was driven by parameter freezing dynamics rather than replay data volume. Retracted the earlier conclusion and published the correction."
      }
    ],
    auditStory: {
      originalClaim: "24.28% 2-digit arithmetic accuracy retained via replay fine-tuning.",
      flawFound: "Audit revealed 35.5% token-level overlap between the synthetic arithmetic training buffer and the test split.",
      overlapPercentage: "35.5%",
      revisedMetric: "2.48% actual held-out generalization accuracy.",
      rootCause: "Parameter freezing caused gradient starvation across intermediate layers, masquerading as replay collapse.",
      reproducibilityGuarantees: [
        "Rigid SHA256 dataset hash verification prior to every evaluation run.",
        "Deterministic CUDA seed lock and full RNG-state serialization in checkpoints.",
        "Automatic ngram overlap audits before benchmark scoring.",
        "26 test modules and 56 research run manifests committed directly to Git."
      ]
    },
    limitations: [
      "42.1M parameters is insufficient to sustain multi-step world knowledge without external grounding.",
      "Pretrained on 500M tokens; scaling laws indicate undertrained state relative to Chinchilla optimality.",
      "Single-digit tokenization expands context length for long numbers, increasing attention compute quadratically.",
      "Evaluations performed in single-GPU local environment without distributed gradient synchronization."
    ],
    keyLessons: [
      "Never trust a positive evaluation metric until you audit the split pipeline for subtle synthetic leakage.",
      "Replay data quality and distribution alignment dominate raw replay percentage in continual learning.",
      "Under compute constraints, token packing density (EOS contiguous sequences) yields massive wall-clock gains over naive batch padding."
    ]
  },
  {
    id: "nullius",
    slug: "nullius",
    title: "Nullius: Claim-Level Verification Harness",
    badge: "INSPECTION HARNESS & METHODOLOGY",
    category: "Evaluation Harness",
    status: "Inspection Harness",
    oneLiner: "A modular claim-level hallucination-detection inspection harness designed to isolate and benchmark where factual verification pipelines break.",
    description: "Most hallucination detectors couple verification and aggregation into a monolithic score. Nullius decouples response extraction, evidence retrieval, atomic claim verification, and aggregation into independently measurable variables with explicit null baselines.",
    hardware: "Local Linux / WSL2 CPU & GPU testbed",
    role: "System Designer & Implementer",
    timeline: "2025",
    githubUrl: "https://github.com/Krishna-Mandal/nullius",
    tags: ["Evaluation Methodology", "Information Retrieval", "BM25", "Dense Vectors", "Null Baselines", "Contract Testing"],
    metrics: [
      { label: "Pipeline Stages", value: "6 Discrete Steps", subtext: "Response → Claim → Retrieval → Rerank → Verify → Aggregate" },
      { label: "Retrieval Support", value: "Hybrid", subtext: "BM25 + Dense vector + Rank fusion" },
      { label: "Null Baselines", value: "Explicitly Included", subtext: "Random, majority, and constant null anchors" },
      { label: "Environment", value: "Network-Isolated", subtext: "Deterministic replay without live web variance" }
    ],
    why: "Hallucination benchmarks often report aggregate F1 scores without diagnosing whether errors stem from faulty claim extraction, retrieval misses, or faulty aggregation rules. Without component isolation, you cannot improve the pipeline.",
    researchQuestion: "How do different claim aggregation strategies (pessimistic, majority, weighted probability) behave when evaluated on identical underlying claim/evidence pairs across synthetic and natural hallucination distributions?",
    architecture: [
      "Discrete Stage 1: ClaimExtractor decomposes raw LLM responses into atomic, verifiable propositions.",
      "Discrete Stage 2: Corpus Layer & Retriever (BM25 lexical index + Dense vector embeddings + Hybrid RRF).",
      "Discrete Stage 3: Optional Cross-Encoder Reranker for top-k precision sharpening.",
      "Discrete Stage 4: Atomic Verifier evaluates strictly ONE claim/evidence pair at a time.",
      "Discrete Stage 5: Independent Aggregator resolves pair-level scores into document-level factual confidence.",
      "Discrete Stage 6: Trace Writer logs machine-readable JSON traces with per-stage timing and decision graphs."
    ],
    implementation: [
      "Strict contract tests verifying interfaces between each stage.",
      "Integrated null baselines: random verification, always-true, always-false to establish lower-bound sanity checks.",
      "Fully local, network-isolated evaluation runner ensuring tests do not drift due to external API changes.",
      "Clean CLI for batch evaluation and trace inspection."
    ],
    experiments: [
      {
        title: "Aggregation Sensitivity on Identical Pair Scores",
        hypothesis: "Pessimistic aggregation (any false claim marks whole text invalid) creates catastrophic false positive rates on long generations.",
        expected: "Pessimistic aggregator degrades document F1 as claim count grows.",
        observed: "Document F1 dropped from 0.81 at 2 claims to 0.44 at 8 claims purely due to aggregation rule, despite static per-claim verifier accuracy.",
        delta: "F1: 0.81 → 0.44",
        verdict: "CONFIRMED",
        details: "Proved that aggregator design is an independent research variable that can invalidate claimed improvements in underlying verifiers."
      }
    ],
    limitations: [
      "Nullius is an inspection harness, not a claimed production-ready hallucination eliminator.",
      "Claim extraction accuracy bounds downstream evaluation fidelity; ambiguous sentences can produce flawed atomic claims.",
      "Dense retrieval quality is constrained by the local embedding model's context window."
    ],
    keyLessons: [
      "Decoupling the aggregation rule from the per-claim verifier is critical to prevent misleading benchmark results.",
      "Without null baselines, it is impossible to detect whether a complex verifier performs better than trivial heuristics."
    ]
  },
  {
    id: "privatetune",
    slug: "privatetune",
    title: "PrivateTune: Multi-Tenant LoRA Platform",
    badge: "ML SYSTEMS INFRASTRUCTURE",
    category: "ML Systems",
    status: "Under Development",
    oneLiner: "A private multi-tenant fine-tuning platform serving tenant-isolated LoRA adapters over a single open-weight base model on local infrastructure.",
    description: "Designed so customer data never leaves the host infrastructure. Each tenant receives a dedicated LoRA adapter trained on private datasets, evaluated via automated regression gates, and served dynamically through high-throughput inference backends.",
    hardware: "Linux / WSL2 Dockerized Testbed",
    role: "Platform Engineer & System Architect",
    timeline: "2025–Present",
    githubUrl: "https://github.com/Krishna-Mandal/privatetune",
    tags: ["vLLM", "LoRA / QLoRA", "MLflow", "Docker Compose", "FastAPI", "Reproducibility"],
    metrics: [
      { label: "Architecture", value: "Multi-Tenant LoRA", subtext: "Single shared base model weights in VRAM" },
      { label: "Inference Engine", value: "vLLM", subtext: "Dynamic adapter hot-swapping" },
      { label: "Data Guarantee", value: "100% On-Host", subtext: "Zero external API data transmission" },
      { label: "Development Status", value: "Under Development", subtext: "Core pipeline implemented; serving hardening active", status: "warning" }
    ],
    why: "Enterprises cannot send proprietary data to third-party closed APIs. Hosting dedicated full base models per client is financially non-viable. Serving independent LoRA adapters over a shared base model provides tenant isolation with minimal memory overhead.",
    researchQuestion: "Can dynamic LoRA swapping under high concurrency maintain latency SLAs without cross-tenant memory leakage or regression on base model capabilities?",
    architecture: [
      "Ingestion & Dataset Sanitization: Tokenization and tenant data isolation.",
      "Training Engine: PyTorch + HuggingFace PEFT / QLoRA with 4-bit quantization.",
      "Artifact Integrity: SHA256 hashing for all trained adapters, training configs, and seed manifests.",
      "Experiment Tracking: Centralized MLflow tracking for loss curves, gradient norms, and hyperparameter logs.",
      "Serving Layer: vLLM multi-LoRA server hot-swapping adapter weights on demand.",
      "Orchestration: Docker Compose with health checks, regression test gates, and resource limits."
    ],
    implementation: [
      "Automated regression gate: newly trained adapters must pass a baseline safety and quality check before being marked active.",
      "Separation of training worker pools and serving runtime to avoid VRAM contention.",
      "Linux/WSL2 deployment scripts with comprehensive reproducibility tooling."
    ],
    experiments: [
      {
        title: "Dynamic LoRA Hot-Swapping Overhead",
        hypothesis: "vLLM adapter swapping will incur negligible latency compared to base forward pass time.",
        expected: "Sub-15ms adapter load overhead.",
        observed: "Hot-swapping pre-loaded adapters introduced ~8ms overhead; loading un-cached adapters took ~210ms.",
        delta: "+8ms vs +210ms",
        verdict: "CONFIRMED",
        details: "Established necessity of LRU adapter cache in GPU memory to prevent latency spikes under round-robin tenant requests."
      }
    ],
    limitations: [
      "Currently under active development; not yet battle-tested in multi-node distributed environments.",
      "Concurrency is currently constrained by single-GPU VRAM limits for cached LoRA weights.",
      "Does not yet support concurrent training and inference on the same device without VRAM preemption."
    ],
    keyLessons: [
      "Multi-tenant isolation requires strict artifact hashing and dataset validation at the ingestion boundary.",
      "Dynamic LoRA serving is the most economically sound architecture for private custom models on constrained compute."
    ]
  },
  {
    id: "merchant-ring",
    slug: "merchant-ring",
    title: "merchant-ring: Graph Fraud Detection",
    badge: "EMPIRICAL RESEARCH PROTOTYPE",
    category: "Empirical Study",
    status: "Research Prototype",
    oneLiner: "Testing the hypothesis that cross-application graph features detect coordinated merchant fraud rings missed by traditional per-application risk scoring.",
    description: "Built an end-to-end experimental pipeline pairing synthetic entity generation, bipartite application/entity graphs, graph-derived feature engineering, LightGBM modeling, and cost-sensitive threshold analysis with strict temporal splits.",
    hardware: "Python / NetworkX / LightGBM Benchmark",
    role: "ML Researcher & Pipeline Engineer",
    timeline: "2024",
    githubUrl: "https://github.com/Krishna-Mandal/merchant-ring",
    tags: ["Graph Features", "LightGBM", "Fraud Detection", "PR-AUC", "Temporal Split", "Cost Sensitivity"],
    metrics: [
      { label: "PR-AUC (Baseline)", value: "0.6228", subtext: "Isolated per-application tabular features" },
      { label: "PR-AUC (Graph)", value: "0.7944", subtext: "+0.1716 lift with network features", status: "highlight" },
      { label: "Ring Recall @ 10%", value: "2.1% → 39.6%", subtext: "18.8x improvement at 10% review rate", status: "highlight" },
      { label: "Precision @ 10%", value: "66.7% → 85.2%", subtext: "Graph-enhanced precision improvement" }
    ],
    why: "Organized fraud syndicates systematically rotate individual credentials (phone numbers, device fingerprints, bank accounts) so each application appears benign in isolation. Only the cross-application topological graph reveals the shared fraud ring.",
    researchQuestion: "Does augmenting tabular risk features with topological graph metrics (connected components, entity degree, cycle counts) significantly increase recall of coordinated rings under realistic review-rate constraints?",
    architecture: [
      "Synthetic Data Generator: Simulates synthetic merchant applications with realistic coordinated ring injections.",
      "Entity Resolution Engine: Maps applications to shared phone, tax ID, IP, and bank account nodes.",
      "Graph Feature Extractor: Computes component size, pagerank, shared entity degree, and neighbor risk velocity.",
      "Model: LightGBM with strict out-of-time temporal validation splits to account for label latency.",
      "Evaluation Suite: PR-AUC, ring-level recall curves, and cost-sensitive threshold optimization."
    ],
    implementation: [
      "Temporal split preventing future graph leakage into past application records.",
      "Simulated label lag to mimic real-world fraud confirmation delays.",
      "Cost-sensitive threshold matrix evaluating false positive investigations vs. fraud chargeback losses."
    ],
    experiments: [
      {
        title: "Recall at Constrained 10% Manual Review Capacity",
        hypothesis: "Graph features will surface ring members clustered together that isolated tabular models scatter across the score distribution.",
        expected: "Substantial recall gain within the top 10% scored applications.",
        observed: "Baseline tabular model achieved 2.1% ring recall; adding graph features boosted ring recall to 39.6% at identical 10% review budget.",
        delta: "+37.5% recall",
        verdict: "CONFIRMED",
        details: "Graph features pulled entire coordinated rings across the decision threshold simultaneously."
      }
    ],
    limitations: [
      "All experiments were conducted on synthetic benchmark data; performance on production bank data will differ.",
      "Entity resolution was intentionally simplified to exact string matches, omitting probabilistic phonetic/fuzzy matching.",
      "Graph features inherently introduce risk of 'guilt by association' for legitimate merchants sharing common intermediaries.",
      "Cost parameters used in threshold analysis are illustrative."
    ],
    keyLessons: [
      "Temporal splitting is non-negotiable in fraud modeling; random k-fold splits leak future graph topology and report falsely high metrics.",
      "Recall at fixed review rate (e.g. top 5-10%) is far more informative for operational risk teams than global ROC-AUC."
    ]
  },
  {
    id: "gsoc-ml4sci",
    slug: "gsoc-ml4sci",
    title: "ML4Sci / GSoC 2026: EXXA2 Morphology",
    badge: "SCIENTIFIC MACHINE LEARNING",
    category: "Scientific ML",
    status: "Synthetic Benchmark",
    oneLiner: "Unsupervised morphological analysis of exoplanet and protoplanetary disk imagery via Convolutional Autoencoders, UMAP, and HDBSCAN.",
    description: "Developed an unsupervised representation learning pipeline for astronomical FITS imagery to cluster disk structures (rings, spirals, gaps) without human annotation, evaluated on synthetic benchmark datasets.",
    hardware: "PyTorch GPU Mixed Precision Pipeline",
    role: "ML Researcher & Pipeline Developer",
    timeline: "2025–2026",
    githubUrl: "https://github.com/Krishna-Mandal/exxa2-morphology",
    tags: ["Autoencoder", "UMAP", "HDBSCAN", "FITS Astronomy", "MS-SSIM", "Unsupervised"],
    metrics: [
      { label: "Morphological Clusters", value: "4 Clusters", subtext: "Identified in synthetic benchmark" },
      { label: "Silhouette Score", value: "0.92", subtext: "Dense cluster separation in UMAP space", status: "highlight" },
      { label: "Mean MS-SSIM", value: "0.49", subtext: "Multi-scale structural reconstruction" },
      { label: "Mean MSE", value: "0.012", subtext: "Reconstruction fidelity metric" }
    ],
    why: "Next-generation telescopes (ALMA, JWST) capture vast numbers of protoplanetary disk images. Hand-labeling morphological features is prohibitively slow. Unsupervised representation learning can discover structural groupings directly from raw tensor data.",
    researchQuestion: "Can a convolutional autoencoder learn rotationally invariant representations of circumstellar disks sufficient for density-based clustering to recover distinct morphological archetypes?",
    architecture: [
      "Data Loader: FITS astronomical file processing with normalization and background subtraction.",
      "Augmentation: Rotational and mirror symmetries reflecting astronomical physical invariances.",
      "Model: Multi-scale Convolutional Autoencoder with mixed-precision GPU training.",
      "Projection: UMAP non-linear manifold projection of bottleneck latent vectors.",
      "Clustering: HDBSCAN density-based clustering with noise-point rejection.",
      "Morphology Analysis: Radial brightness profile extraction and cluster prototype reconstruction."
    ],
    implementation: [
      "Integrated MS-SSIM loss to penalize structural distortion over raw pixel MSE.",
      "Automated extraction of cluster medoid prototypes for astronomer visual inspection.",
      "GPU-accelerated mixed precision pipeline."
    ],
    experiments: [
      {
        title: "Synthetic Disk Morphology Separation",
        hypothesis: "CAE latent space + UMAP will cleanly isolate symmetric rings, asymmetric spirals, eccentric gaps, and uniform disks.",
        expected: "Distinct clusters matching synthetic generation classes.",
        observed: "HDBSCAN recovered 4 distinct morphological clusters with 0.92 silhouette score on the synthetic benchmark.",
        delta: "Silhouette: 0.92",
        verdict: "CONFIRMED",
        details: "Latent dimensions captured primary spatial frequency variations and rotational symmetry orders."
      }
    ],
    limitations: [
      "Synthetic benchmark results do NOT establish scientific validity on real noisy telescope data with instrument beam artifacts.",
      "Real ALMA/JWST data exhibits non-Gaussian beam convolution and phase noise not modeled in synthetic benchmarks.",
      "UMAP hyperparameters significantly influence cluster density and must be calibrated cautiously."
    ],
    keyLessons: [
      "Pixel MSE alone is inadequate for image reconstruction; structural metrics (MS-SSIM) better preserve faint concentric rings.",
      "Never claim astronomical discovery from synthetic benchmarks without validating on calibrated observational archives."
    ]
  },
  {
    id: "wecode",
    slug: "wecode",
    title: "Wecode: AI Technical Practice Platform",
    badge: "FULL-STACK PRODUCT ENGINEERING",
    category: "Engineering Platform",
    status: "Deployed Platform",
    oneLiner: "A LeetCode-style interactive learning platform tailored for Machine Learning, Deep Learning, NLP, and Computer Vision problem sets.",
    description: "Built to provide hands-on tensor manipulation and ML algorithm challenges with automated in-browser code execution, interactive test runners, structured learning paths, and paper implementation challenges.",
    hardware: "Vercel / Supabase PostgreSQL / Execution Sandbox",
    role: "Full-Stack Architect & Lead Developer",
    timeline: "2024",
    githubUrl: "https://github.com/Krishna-Mandal/wecode",
    demoUrl: "https://wecode-platform.vercel.app",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind", "Gemini API", "Code Sandbox"],
    metrics: [
      { label: "Curriculum Domains", value: "ML, DL, NLP, CV", subtext: "Tensor operations to architecture design" },
      { label: "Stack", value: "Next.js + Prisma", subtext: "PostgreSQL with edge routing" },
      { label: "Execution Sandbox", value: "Isolated Runtime", subtext: "Automated test-case verification" },
      { label: "Role in Portfolio", value: "Engineering Proof", subtext: "Demonstrates full-stack system capability" }
    ],
    why: "Standard coding platforms focus on classical data structures and algorithms, leaving a major gap for engineers who need to practice tensor indexing, backprop math, attention masks, and layer implementations.",
    researchQuestion: "How to design a responsive, low-latency code execution and test verification workflow for numerical Python and ML problems on the web?",
    architecture: [
      "Next.js App Router with server-side rendering and TypeScript type safety.",
      "PostgreSQL database managed with Prisma ORM for problem sets, submissions, and user progress.",
      "Execution sandbox executing Python/numpy/torch code against hidden validation test suites.",
      "AI-assisted contextual hint pipeline powered by Gemini API without exposing solution code."
    ],
    implementation: [
      "Curriculum structured from raw matrix math up to multi-head self-attention.",
      "Comprehensive auth and user submission tracking.",
      "Monaco-based editor with syntax highlighting and instant terminal output."
    ],
    experiments: [
      {
        title: "Execution Latency Optimization",
        hypothesis: "Serverless edge caching of common test runners will reduce perceived submission latency.",
        expected: "Under 1s execution feedback loop.",
        observed: "Achieved 850ms average turnaround for standard numpy test suites.",
        verdict: "CONFIRMED",
        details: "Streamlined input serialization to avoid container cold-start penalties."
      }
    ],
    limitations: [
      "Supports CPU-only numerical execution in the web sandbox; cannot run full GPU pretraining runs in-browser.",
      "Supporting product engineering project; intended to showcase frontend/backend versatility rather than pure ML research."
    ],
    keyLessons: [
      "Building a complex web app builds rigorous discipline in API contract design, state management, and edge performance."
    ]
  },
  {
    id: "time2eat",
    slug: "time2eat",
    title: "Time2Eat: Real-Time Meal Planner",
    badge: "SUPPORTING FRONTEND ENGINEERING",
    category: "Engineering Platform",
    status: "Deployed Platform",
    oneLiner: "A deployed real-time meal-planning and metabolic interval management tool with adaptive countdown timers and cross-device local persistence.",
    description: "Engineered with responsive React, customizable nutrition intervals, dark/light visual modes, and instant cross-device state synchronization.",
    role: "Frontend Developer",
    timeline: "2024",
    githubUrl: "https://github.com/Krishna-Mandal/time2eat",
    demoUrl: "https://time2eat.vercel.app",
    tags: ["React", "State Management", "Tailwind CSS", "Local Storage", "Responsive UI"],
    metrics: [
      { label: "Deployment", value: "Live on Vercel", subtext: "Zero-latency local-first state" },
      { label: "Design", value: "Responsive UI", subtext: "Adaptive mobile and desktop layouts" }
    ],
    why: "Built to solve daily metabolic timing and dietary discipline with a frictionless, offline-capable interface.",
    researchQuestion: "Ensuring accurate interval timing across backgrounded browser tabs and mobile sleep states.",
    architecture: [
      "React state architecture with Web Worker timestamp reconciliation.",
      "Local persistence layer with schema migrations.",
      "Tailwind CSS responsive design system."
    ],
    implementation: [
      "Audio chime triggers on timer completion.",
      "Responsive timeline visualization for daily nutrition."
    ],
    experiments: [],
    limitations: [
      "Utility application built to demonstrate rapid frontend execution."
    ],
    keyLessons: [
      "Browser timer throttling in background tabs requires epoch-delta reconciliation rather than naive setInterval."
    ]
  }
];
