"use client";

import React, { useEffect, useRef } from "react";
import { X, Printer, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Escape key & body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum Vitae"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
    >
      <div className="print-resume-body relative w-full max-w-4xl bg-[var(--surface-page)] border border-[var(--border)] rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[var(--surface-elevated)] border-b border-[var(--border)] font-code text-xs">
          <div className="flex items-center space-x-2 text-[var(--accent)] font-bold">
            <span>CURRICULUM VITAE // KRISHNA KUMAR MANDAL</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[var(--surface-subtle)] hover:bg-[var(--surface-inset)] border border-[var(--border)] text-[var(--text-primary)] text-xs transition-colors font-medium"
            >
              <Printer className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[var(--surface-subtle)] hover:bg-[var(--surface-inset)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto font-sans text-[var(--text-muted)] space-y-6">
          {/* Header */}
          <div className="border-b border-[var(--border)] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight">
                Krishna Kumar Mandal
              </h1>
              <span className="text-xs font-code text-[var(--accent)] font-bold">
                AI / ML Engineer • Research Trajectory
              </span>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-code text-[var(--text-muted)] mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
                Mumbai, India
              </span>
              <a href="https://github.com/Krishna-Mandal" target="_blank" rel="noopener noreferrer me" className="flex items-center gap-1 hover:text-[var(--accent)]">
                <GithubIcon className="w-3.5 h-3.5 text-[var(--text-subtle)]" />
                github.com/Krishna-Mandal
              </a>
              <a href="https://linkedin.com/in/krishnakumarmandal" target="_blank" rel="noopener noreferrer me" className="flex items-center gap-1 hover:text-[var(--accent)]">
                <LinkedinIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                linkedin.com/in/krishnakumarmandal
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2 font-code">
            <h2 className="text-xs uppercase tracking-wider text-[var(--accent)] font-bold">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <div className="text-sm font-bold text-[var(--text-primary)] font-sans">
                  St. Francis Institute of Technology (SFIT)
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  Bachelor of Engineering in Artificial Intelligence & Machine Learning
                </div>
              </div>
              <div className="text-xs text-[var(--text-subtle)]">
                2024 – 2028 (Expected)
              </div>
            </div>
          </div>

          {/* Primary Research & Engineering Projects */}
          <div className="space-y-5">
            <h2 className="text-xs font-code uppercase tracking-wider text-[var(--accent)] font-bold">
              Core Technical Projects
            </h2>

            {/* Mini-R1 */}
            <div className="space-y-1.5 text-xs font-code">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-[var(--text-primary)] font-sans">Mini-R1 / Small Language Model</span>
                <span className="text-[var(--text-subtle)]">PyTorch • CUDA • SentencePiece</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[var(--text-muted)] leading-relaxed">
                <li>Implemented a 42.1M-parameter 12-layer decoder-only Transformer from scratch in pure PyTorch (custom attention, pre-LayerNorm, weight-tied embeddings).</li>
                <li>Pretrained on 500M tokens on a single 6 GB RTX 4050 laptop GPU in ~8 hours with sustained 17,316 tok/s throughput; reached 17.68 validation perplexity.</li>
                <li>Engineered contiguous EOS sequence packing, boosting GPU token density from 41.6% to 100% and cutting wall-clock training by 58%.</li>
                <li>Conducted 24-task experiment on arithmetic-to-reasoning transfer (null transfer Δ = -0.30% on GSM8K) and catastrophic forgetting replay alignment (25% on-dist: 94.8% vs 50% off-dist: 3.8%).</li>
                <li><strong>Self-Audit:</strong> Audited favorable 24.28% arithmetic retention, isolated 35.5% train/eval overlap, revised accuracy to 2.48%, and retracted earlier conclusion after proving parameter freezing was root cause.</li>
              </ul>
            </div>

            {/* Nullius */}
            <div className="space-y-1.5 text-xs font-code">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-[var(--text-primary)] font-sans">Nullius: Claim-Level Verification Harness</span>
                <span className="text-[var(--text-subtle)]">Python • BM25 • Dense Vectors • CLI</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[var(--text-muted)] leading-relaxed">
                <li>Engineered a modular 6-stage claim inspection harness decoupling atomic claim verifiers from multi-claim document aggregators.</li>
                <li>Demonstrated that aggregator heuristics independently degrade document F1 from 0.81 to 0.44 on identical frozen pair scores.</li>
                <li>Built contract tests, network-isolated runners, and explicit null baselines (random, majority, constant) to prevent false signal.</li>
              </ul>
            </div>

            {/* PrivateTune */}
            <div className="space-y-1.5 text-xs font-code">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-[var(--text-primary)] font-sans">PrivateTune: Multi-Tenant LoRA Platform (Under Dev)</span>
                <span className="text-[var(--text-subtle)]">vLLM • LoRA/QLoRA • MLflow • Docker</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[var(--text-muted)] leading-relaxed">
                <li>Designed architecture to serve independent client LoRA adapters over one shared open base model in VRAM, guaranteeing 100% on-host data privacy.</li>
                <li>Integrated SHA256 dataset/adapter hashing, automated regression gates, and sub-10ms dynamic vLLM adapter hot-swapping.</li>
              </ul>
            </div>

            {/* merchant-ring */}
            <div className="space-y-1.5 text-xs font-code">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-[var(--text-primary)] font-sans">merchant-ring: Graph Fraud Detection Prototype</span>
                <span className="text-[var(--text-subtle)]">LightGBM • NetworkX • PR-AUC</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[var(--text-muted)] leading-relaxed">
                <li>Demonstrated graph topological features boost ring recall from 2.1% to 39.6% at 10% review capacity over isolated tabular scoring.</li>
                <li>Enforced strict temporal out-of-time splits and label latency modeling; acknowledged synthetic and guilt-by-association caveats.</li>
              </ul>
            </div>

            {/* Wecode */}
            <div className="space-y-1.5 text-xs font-code">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-[var(--text-primary)] font-sans">Wecode: AI Technical Practice Platform</span>
                <span className="text-[var(--text-subtle)]">Next.js • TypeScript • PostgreSQL • Prisma</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[var(--text-muted)] leading-relaxed">
                <li>Built full-stack LeetCode-style practice platform for ML, DL, and NLP problem sets with 850ms execution sandbox feedback.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2 text-xs font-code">
            <h2 className="uppercase tracking-wider text-[var(--accent)] font-bold">
              Technical Capabilities
            </h2>
            <div className="space-y-1 text-[var(--text-muted)]">
              <div><strong className="text-[var(--text-primary)]">Model Training:</strong> PyTorch (Pure Tensor Ops), Custom Transformers, SentencePiece BPE, LoRA/QLoRA, CUDA Mixed Precision.</div>
              <div><strong className="text-[var(--text-primary)]">Evaluation Rigor:</strong> Leakage Auditing, Decoupled Verification, Null Baselines, Out-of-Time Splits, Regression Gates.</div>
              <div><strong className="text-[var(--text-primary)]">ML Systems & Deployment:</strong> vLLM, MLflow, Docker Compose, Linux/WSL2, FastAPI, SHA256 Manifest Tracking.</div>
              <div><strong className="text-[var(--text-primary)]">Engineering:</strong> Python, TypeScript, Next.js, PostgreSQL, Prisma, Git, pytest.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
