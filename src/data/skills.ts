export interface CapabilityGroup {
  id: string;
  category: string;
  tagline: string;
  items: {
    name: string;
    description: string;
    demonstratedIn: string;
    proficiency: "Production / Research Grade" | "Advanced Implementation" | "Core Competency";
  }[];
}

export const CAPABILITY_MATRIX: CapabilityGroup[] = [
  {
    id: "model-training",
    category: "Model Training & Architecture",
    tagline: "Building neural architectures, tokenizers, and custom training loops from mathematical foundations in pure PyTorch.",
    items: [
      {
        name: "Custom Transformers (Pure PyTorch)",
        description: "Implemented decoder-only architecture from scratch with pre-LayerNorm, multi-head causal attention, and weight-tied embeddings.",
        demonstratedIn: "Mini-R1 (42.1M params)",
        proficiency: "Production / Research Grade"
      },
      {
        name: "Tokenizer Engineering (SentencePiece)",
        description: "Trained custom 8k BPE tokenizers with isolated single-digit tokens to prevent arithmetic tokenization collapse.",
        demonstratedIn: "Mini-R1 Tokenizer",
        proficiency: "Production / Research Grade"
      },
      {
        name: "Parameter-Efficient Fine-Tuning (LoRA / QLoRA)",
        description: "4-bit quantization, rank decomposition adapters, low-rank updates without base weight alteration.",
        demonstratedIn: "PrivateTune",
        proficiency: "Advanced Implementation"
      },
      {
        name: "Compute-Constrained Training & Mixed Precision",
        description: "torch.cuda.amp.autocast, gradient accumulation, contiguous EOS token packing for 100% density on 6 GB consumer GPUs.",
        demonstratedIn: "Mini-R1 Pretraining",
        proficiency: "Production / Research Grade"
      },
      {
        name: "Unsupervised Representation Learning",
        description: "Convolutional autoencoders with MS-SSIM loss, rotational invariance, and UMAP / HDBSCAN manifold clustering.",
        demonstratedIn: "ML4Sci / GSoC EXXA2",
        proficiency: "Advanced Implementation"
      }
    ]
  },
  {
    id: "evaluation-rigor",
    category: "Evaluation Methodology & Rigor",
    tagline: "Designing experiments where failure modes are visible, hypotheses are falsifiable, and null results are treated as primary science.",
    items: [
      {
        name: "Leakage Auditing & Contamination Detection",
        description: "Token-level and n-gram overlap auditors that detect train/eval contamination in synthetic reasoning benchmarks.",
        demonstratedIn: "Mini-R1 (Discovered 35.5% overlap)",
        proficiency: "Production / Research Grade"
      },
      {
        name: "Decoupled Verification Pipelines",
        description: "Separating atomic claim verification from multi-claim document aggregation to isolate pipeline failure variables.",
        demonstratedIn: "Nullius Inspection Harness",
        proficiency: "Production / Research Grade"
      },
      {
        name: "Controlled Ablations & Null Baselines",
        description: "Including constant-prediction and random baselines to establish statistically meaningful empirical bounds.",
        demonstratedIn: "Nullius & merchant-ring",
        proficiency: "Production / Research Grade"
      },
      {
        name: "Temporal Validation & Label Lag Modeling",
        description: "Out-of-time splits in graph learning to prevent future topological leakage into past decisions.",
        demonstratedIn: "merchant-ring",
        proficiency: "Advanced Implementation"
      },
      {
        name: "Cost-Sensitive Threshold Optimization",
        description: "Evaluating models at fixed review budgets (top 10% capacity) and precision-recall trade-offs over vanity ROC-AUC.",
        demonstratedIn: "merchant-ring",
        proficiency: "Advanced Implementation"
      }
    ]
  },
  {
    id: "ml-systems",
    category: "ML Systems & Infrastructure",
    tagline: "Building reproducible, isolated platforms to serve, track, and package machine learning workloads reliably.",
    items: [
      {
        name: "High-Throughput Serving (vLLM)",
        description: "Dynamic multi-LoRA adapter hot-swapping and low-overhead inference routing.",
        demonstratedIn: "PrivateTune",
        proficiency: "Advanced Implementation"
      },
      {
        name: "Experiment Tracking (MLflow)",
        description: "Centralized logging of loss curves, gradient norms, parameter configurations, and model registry artifacts.",
        demonstratedIn: "PrivateTune & Mini-R1",
        proficiency: "Advanced Implementation"
      },
      {
        name: "Reproducibility Infrastructure",
        description: "Deterministic CUDA seed locks, full RNG state serialization, and SHA256 artifact manifest generation.",
        demonstratedIn: "Mini-R1 (26 tests, 56 reports)",
        proficiency: "Production / Research Grade"
      },
      {
        name: "Containerized Workloads (Docker & Linux)",
        description: "Docker Compose environments with resource constraints, health checks, and isolated service networking on Linux/WSL2.",
        demonstratedIn: "PrivateTune Testbed",
        proficiency: "Advanced Implementation"
      },
      {
        name: "FastAPI & Microservice Architectures",
        description: "Asynchronous REST endpoints, typed Pydantic contracts, and streaming responses for model orchestration.",
        demonstratedIn: "PrivateTune & Nullius CLI",
        proficiency: "Production / Research Grade"
      }
    ]
  },
  {
    id: "software-engineering",
    category: "Software Engineering & Full-Stack",
    tagline: "Writing robust, tested, and typed code across the entire product surface.",
    items: [
      {
        name: "TypeScript & Next.js",
        description: "App Router, server-side rendering, strict typing, and high-performance interactive interfaces.",
        demonstratedIn: "Wecode & Portfolio",
        proficiency: "Production / Research Grade"
      },
      {
        name: "Relational Databases & ORMs",
        description: "PostgreSQL schema design, indexing, migrations, and transactional workflows via Prisma.",
        demonstratedIn: "Wecode Platform",
        proficiency: "Production / Research Grade"
      },
      {
        name: "Automated Testing & Contracts",
        description: "pytest test suites, component contract testing, regression gates, and continuous integration workflows.",
        demonstratedIn: "Mini-R1 & Nullius",
        proficiency: "Production / Research Grade"
      },
      {
        name: "Modern Frontend UI/UX",
        description: "Tailwind CSS, CSS Grid/Flexbox, SVG data visualizations, responsive design, and accessibility standards.",
        demonstratedIn: "Wecode & Time2Eat",
        proficiency: "Production / Research Grade"
      }
    ]
  }
];
