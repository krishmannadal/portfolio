"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import {
  ExternalLink,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { GithubIcon } from "./Icons";

export const ResearchInstruments: React.FC = () => {
  const nullius = PROJECTS.find((p) => p.id === "nullius")!;
  const merchantRing = PROJECTS.find((p) => p.id === "merchant-ring")!;
  const gsoc = PROJECTS.find((p) => p.id === "gsoc-ml4sci")!;

  const [activePipelineStage, setActivePipelineStage] = useState(4); // Default to Aggregator stage
  const [merchantGraphActive, setMerchantGraphActive] = useState(true);

  const nulliusStages = [
    {
      num: "01",
      name: "Response Text",
      input: "Raw LLM Output",
      output: "Unstructured string",
      role: "Input text under claim inspection."
    },
    {
      num: "02",
      name: "ClaimExtractor",
      input: "Unstructured string",
      output: "List[AtomicClaim]",
      role: "Deconstructs compound sentences into atomic, independently verifiable propositions."
    },
    {
      num: "03",
      name: "Hybrid Retriever",
      input: "AtomicClaim + Corpus",
      output: "Top-K Evidence Passages",
      role: "Performs BM25 lexical search + dense vector cosine retrieval with reciprocal rank fusion."
    },
    {
      num: "04",
      name: "Pair Verifier",
      input: "(Claim, Evidence) Pair",
      output: "PairScore ∈ [0, 1]",
      role: "CRITICAL: Evaluates strictly ONE claim/evidence pair at a time in isolation."
    },
    {
      num: "05",
      name: "Aggregator",
      input: "List[PairScore]",
      output: "DocumentFactualScore",
      role: "INDEPENDENT VARIABLE: Compares pessimistic, majority, and probabilistic aggregation rules on identical frozen scores."
    },
    {
      num: "06",
      name: "Trace Writer",
      input: "All intermediate tensors",
      output: "Structured JSONL Trace",
      role: "Emits inspectable execution graphs with per-stage timing and decision explanations."
    }
  ];

  return (
    <section id="instruments" className="py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="eyebrow-cmd">
            04 // RESEARCH INSTRUMENTS & EMPIRICAL BENCHMARKS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
            Inspection Harnesses & Controlled Studies
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-code">
            Building specialized experimental testbeds to dissect pipeline failure modes, compare hypothesis variables, and isolate signal from noise.
          </p>
        </div>

        {/* PROJECT 02: NULLIUS */}
        <div className="vilen-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] mb-16 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-code px-3 py-1 rounded-full bg-[var(--accent-wash)] text-[var(--accent)] border border-[var(--accent)]/30 mb-2 font-bold">
                <span>PROJECT 02 // RESEARCH INSTRUMENT</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-[var(--text-primary)]">
                NULLIUS: Claim-Level Hallucination Inspection Harness
              </h3>
              <p className="text-xs sm:text-sm font-code text-[var(--text-muted)] mt-1">
                A modular research instrument for inspecting where claim verification pipelines fail.
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <a
                href={nullius.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[var(--surface-elevated)] hover:bg-[var(--accent-wash)] border border-[var(--border)] text-xs font-code text-[var(--text-primary)] transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>INSPECT REPO</span>
              </a>
              <span className="text-[11px] font-code px-3 py-1.5 rounded-full bg-[var(--accent-wash)] border border-[var(--accent)]/30 text-[var(--accent)] font-bold">
                NETWORK-ISOLATED
              </span>
            </div>
          </div>

          {/* Core Methodological Differentiator Notice */}
          <div className="p-4 rounded-2xl bg-[var(--surface-elevated)] border-l-4 border-[var(--accent)] text-xs font-code space-y-1.5">
            <div className="text-[var(--accent)] font-bold">KEY METHODOLOGICAL DESIGN:</div>
            <p className="text-[var(--text-primary)] leading-relaxed">
              Most hallucination detectors combine atomic verification and document aggregation into a monolithic score. Nullius intentionally decouples the pair-level verifier from the multi-pair aggregator, turning the aggregation heuristic into an independently inspectable research variable.
            </p>
          </div>

          {/* Interactive Pipeline Stages */}
          <div className="space-y-4">
            <div className="text-xs font-code text-[var(--text-muted)]">
              INTERACTIVE PIPELINE: Click any discrete stage to inspect contracts and role:
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 font-code">
              {nulliusStages.map((stage, idx) => {
                const isSelected = activePipelineStage === idx;
                const isAggregator = idx === 4;
                const isVerifier = idx === 3;

                return (
                  <button
                    key={stage.num}
                    onClick={() => setActivePipelineStage(idx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "bg-[var(--accent-wash)] border-[var(--accent)] shadow-sm"
                        : "bg-[var(--surface-elevated)] border-[var(--border)] hover:border-[var(--border-strong)]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-[var(--text-subtle)] font-bold">{stage.num}</span>
                      {isAggregator && (
                        <span className="text-[9px] bg-[var(--accent-amber)]/20 text-[var(--accent-amber)] px-1.5 py-0.5 rounded-full font-bold">
                          VARIABLE
                        </span>
                      )}
                      {isVerifier && (
                        <span className="text-[9px] bg-[var(--accent)]/20 text-[var(--accent)] px-1.5 py-0.5 rounded-full font-bold">
                          ATOMIC
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)] truncate">
                      {stage.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stage Deep Dive Details */}
            <div className="p-5 rounded-2xl bg-[var(--surface-inset)] border border-[var(--border)] font-code space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs pb-2 border-b border-[var(--border)]">
                <span className="text-[var(--accent)] font-bold">
                  STAGE {nulliusStages[activePipelineStage].num}: {nulliusStages[activePipelineStage].name}
                </span>
                <span className="text-[var(--text-subtle)]">Contract Typed Interface</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-[var(--surface-elevated)] p-3 rounded-xl border border-[var(--border)]">
                  <span className="text-[10px] text-[var(--text-subtle)] font-bold">INPUT SIGNATURE:</span>
                  <div className="text-[var(--text-primary)] font-code mt-0.5">{nulliusStages[activePipelineStage].input}</div>
                </div>
                <div className="bg-[var(--surface-elevated)] p-3 rounded-xl border border-[var(--border)]">
                  <span className="text-[10px] text-[var(--text-subtle)] font-bold">OUTPUT SIGNATURE:</span>
                  <div className="text-[var(--accent)] font-code mt-0.5 font-bold">{nulliusStages[activePipelineStage].output}</div>
                </div>
              </div>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed pt-1">
                {nulliusStages[activePipelineStage].role}
              </p>
            </div>

            {/* Null Baselines & Scientific Guardrail Notice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-code pt-2">
              <div className="p-4 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-1">
                <span className="text-[var(--accent-emerald)] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Null Baseline Integration
                </span>
                <p className="text-[var(--text-muted)]">
                  Explicitly incorporates random, majority, and heuristic string baselines to ensure claims of detection superiority exceed trivial lower bounds.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-1">
                <span className="text-[var(--accent-amber)] font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Explicit Non-Claim
                </span>
                <p className="text-[var(--text-muted)]">
                  Nullius is strictly an evaluation harness for research visibility into pipeline stages, NOT a commercial claim of eliminating hallucinations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GRID OF 2 RESEARCH STUDIES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* MERCHANT RING */}
          <div className="vilen-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] space-y-5">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-code px-3 py-1 rounded-full bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] border border-[var(--accent-amber)]/30 mb-2 font-bold">
                <span>PROJECT 05 // EMPIRICAL STUDY</span>
              </div>
              <h3 className="text-2xl font-black text-[var(--text-primary)]">
                merchant-ring: Graph Fraud Detection
              </h3>
              <p className="text-xs font-code text-[var(--text-muted)] mt-1">
                Hypothesis: Cross-application graph features detect coordinated rings missed by isolated scoring.
              </p>
            </div>

            {/* Interactive Feature Toggle */}
            <div className="p-4 rounded-2xl bg-[var(--surface-inset)] border border-[var(--border)] space-y-3 font-code">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--text-muted)]">Feature Set Under Test:</span>
                <div className="inline-flex rounded-full p-1 bg-[var(--surface-elevated)] border border-[var(--border)]">
                  <button
                    onClick={() => setMerchantGraphActive(false)}
                    className={`px-3 py-1 rounded-full text-[11px] ${
                      !merchantGraphActive
                        ? "bg-[var(--surface-inset)] text-[var(--text-primary)] font-bold shadow-sm"
                        : "text-[var(--text-subtle)]"
                    }`}
                  >
                    Isolated Tabular
                  </button>
                  <button
                    onClick={() => setMerchantGraphActive(true)}
                    className={`px-3 py-1 rounded-full text-[11px] ${
                      merchantGraphActive
                        ? "bg-[var(--accent-wash)] text-[var(--accent)] font-bold shadow-sm"
                        : "text-[var(--text-subtle)]"
                    }`}
                  >
                    Tabular + Graph
                  </button>
                </div>
              </div>

              {/* Dynamic Metric Display */}
              <div className="grid grid-cols-2 gap-2 text-center pt-1">
                <div className="bg-[var(--surface-elevated)] p-3 rounded-xl border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-subtle)]">PR-AUC</div>
                  <div className={`text-2xl font-black ${merchantGraphActive ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`}>
                    {merchantGraphActive ? "0.7944" : "0.6228"}
                  </div>
                  <div className="text-[9px] text-[var(--text-subtle)]">
                    {merchantGraphActive ? "+0.1716 metric lift" : "baseline threshold"}
                  </div>
                </div>
                <div className="bg-[var(--surface-elevated)] p-3 rounded-xl border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-subtle)]">RING RECALL @ 10%</div>
                  <div className={`text-2xl font-black ${merchantGraphActive ? "text-[var(--accent-emerald)]" : "text-[var(--accent-crimson)]"}`}>
                    {merchantGraphActive ? "39.6%" : "2.1%"}
                  </div>
                  <div className="text-[9px] text-[var(--text-subtle)]">
                    {merchantGraphActive ? "18.8x detection gain" : "scattered across scores"}
                  </div>
                </div>
              </div>
            </div>

            {/* Scientific Caveats */}
            <div className="p-4 rounded-xl bg-[var(--accent-crimson)]/5 border border-[var(--accent-crimson)]/30 text-xs font-code space-y-1.5 text-[var(--text-primary)]">
              <div className="text-[var(--accent-crimson)] font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                EXPLICIT LIMITATIONS & CAVEATS:
              </div>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-[var(--text-muted)]">
                <li>All experiments conducted on synthetic benchmark distributions.</li>
                <li>Graph features can induce guilt by association for legitimate merchants.</li>
                <li>Entity resolution simplified to exact matches; real bank data requires fuzzy phonetics.</li>
              </ul>
            </div>

            <div className="flex justify-between items-center text-xs font-code pt-1">
              <span className="text-[var(--text-subtle)]">LightGBM • Temporal Split • Label Lag</span>
              <a
                href={merchantRing.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Read Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* ML4SCI / GSOC EXXA2 */}
          <div className="vilen-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] space-y-5">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-code px-3 py-1 rounded-full bg-[var(--accent-violet)]/10 text-[var(--accent-violet)] border border-[var(--accent-violet)]/30 mb-2 font-bold">
                <span>PROJECT 04 // SCIENTIFIC MACHINE LEARNING</span>
              </div>
              <h3 className="text-2xl font-black text-[var(--text-primary)]">
                ML4Sci / GSoC 2026: EXXA2 Morphology
              </h3>
              <p className="text-xs font-code text-[var(--text-muted)] mt-1">
                Convolutional Autoencoder → UMAP → HDBSCAN for protoplanetary disk structure.
              </p>
            </div>

            {/* Pipeline Flow Visual */}
            <div className="p-4 rounded-2xl bg-[var(--surface-inset)] border border-[var(--border)] space-y-3 font-code">
              <div className="text-[10px] text-[var(--text-subtle)] font-bold">UNSUPERVISED CLUSTERING PIPELINE:</div>
              <div className="flex items-center justify-between text-xs text-center">
                <div className="bg-[var(--surface-elevated)] px-2.5 py-1.5 rounded-lg border border-[var(--border)] text-[var(--text-primary)]">
                  FITS Data
                </div>
                <span className="text-[var(--text-subtle)]">→</span>
                <div className="bg-[var(--surface-elevated)] px-2.5 py-1.5 rounded-lg border border-[var(--border)] text-[var(--accent)] font-bold">
                  Autoencoder
                </div>
                <span className="text-[var(--text-subtle)]">→</span>
                <div className="bg-[var(--surface-elevated)] px-2.5 py-1.5 rounded-lg border border-[var(--border)] text-[var(--accent-violet)] font-bold">
                  UMAP Latent
                </div>
                <span className="text-[var(--text-subtle)]">→</span>
                <div className="bg-[var(--surface-elevated)] px-2.5 py-1.5 rounded-lg border border-[var(--border)] text-[var(--accent-emerald)] font-bold">
                  HDBSCAN
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 text-center pt-2">
                <div className="bg-[var(--surface-elevated)] p-3 rounded-xl border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-subtle)]">SILHOUETTE SCORE</div>
                  <div className="text-2xl font-black text-[var(--accent-emerald)]">0.92</div>
                  <div className="text-[9px] text-[var(--text-subtle)]">4 Morphological Clusters</div>
                </div>
                <div className="bg-[var(--surface-elevated)] p-3 rounded-xl border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-subtle)]">MEAN MS-SSIM / MSE</div>
                  <div className="text-2xl font-black text-[var(--accent-violet)]">0.49 / 0.012</div>
                  <div className="text-[9px] text-[var(--text-subtle)]">Structural Reconstruction</div>
                </div>
              </div>
            </div>

            {/* Scientific Caveat */}
            <div className="p-4 rounded-xl bg-[var(--accent-amber)]/5 border border-[var(--accent-amber)]/30 text-xs font-code space-y-1.5 text-[var(--text-primary)]">
              <div className="text-[var(--accent-amber)] font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                ASTRONOMICAL BENCHMARK SCOPE:
              </div>
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                Synthetic benchmark results do NOT imply scientific validity on real telescope observations (e.g. ALMA/JWST), which feature non-Gaussian beam convolutions and instrumental phase noise not modeled in synthetic generation.
              </p>
            </div>

            <div className="flex justify-between items-center text-xs font-code pt-1">
              <span className="text-[var(--text-subtle)]">FITS Processing • Radial Profiles</span>
              <a
                href={gsoc.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Read Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
