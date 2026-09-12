"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import {
  Cpu,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  GitBranch
} from "lucide-react";
import { GithubIcon } from "./Icons";

export const MiniR1Dossier: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === "mini-r1")!;
  const [selectedExperiment, setSelectedExperiment] = useState(2); // Default to Audit & Retraction (#21)
  const [activeTab, setActiveTab] = useState<"audit" | "architecture" | "telemetry">("audit");

  return (
    <section id="flagship" className="py-24 border-b border-[var(--border)] bg-[var(--surface-page)] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[var(--border)]">
          <div className="space-y-2">
            <div className="eyebrow-cmd">
              02 // FLAGSHIP EXPERIMENTAL DOSSIER
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.06]">
              MINI-R1 / SMALL LANGUAGE MODEL
            </h2>
            <p className="text-sm sm:text-base font-code text-[var(--text-muted)] max-w-3xl leading-relaxed">
              42.1M-parameter decoder-only Transformer built and pretrained from scratch in pure PyTorch on a single 6 GB GPU, followed by an audited 24-task study of transfer and catastrophic forgetting.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="https://github.com/Krishna-Mandal/mini-r1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[var(--surface-elevated)] hover:bg-[var(--accent-wash)] border border-[var(--border)] hover:border-[var(--accent)] text-xs font-code text-[var(--text-primary)] transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>READ THE CODE</span>
            </a>
            <span className="text-[11px] font-code px-3 py-1.5 rounded-full bg-[var(--accent-emerald)]/10 border border-[var(--accent-emerald)]/30 text-[var(--accent-emerald)] font-bold">
              AUDITED & VERIFIED
            </span>
          </div>
        </div>

        {/* 6 Large Telemetry Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {project.metrics.map((m, idx) => {
            const isRevised = m.status === "revised";
            const isWarning = m.status === "warning";
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl vilen-card border ${
                  isRevised
                    ? "border-[var(--accent-crimson)]/50 bg-[var(--accent-crimson)]/5"
                    : isWarning
                    ? "border-[var(--accent-amber)]/50 bg-[var(--accent-amber)]/5"
                    : "border-[var(--border)]"
                }`}
              >
                <div className="text-[10px] font-code uppercase tracking-wider text-[var(--text-subtle)]">
                  {m.label}
                </div>
                <div
                  className={`text-xl sm:text-2xl font-black tracking-tight font-code mt-1 ${
                    isRevised ? "text-[var(--accent-crimson)]" : isWarning ? "text-[var(--accent-amber)]" : "text-[var(--text-primary)]"
                  }`}
                >
                  {m.value}
                </div>
                {m.subtext && (
                  <div className="text-[10px] text-[var(--text-muted)] font-code mt-1 leading-tight">
                    {m.subtext}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Tabs for Dossier Subsections */}
        <div className="flex border-b border-[var(--border)] mb-8 bg-[var(--surface-subtle)] rounded-t-2xl overflow-x-auto p-1.5 gap-1.5">
          <button
            onClick={() => setActiveTab("audit")}
            className={`px-5 py-2.5 rounded-xl text-xs font-code font-bold tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "audit"
                ? "text-[var(--accent-crimson)] bg-[var(--surface-elevated)] border border-[var(--accent-crimson)]/30 shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[var(--accent-crimson)]" />
            <span>01. THE AUDIT & RETRACTION STORY (CORE LESSON)</span>
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-5 py-2.5 rounded-xl text-xs font-code font-bold tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "architecture"
                ? "text-[var(--accent)] bg-[var(--surface-elevated)] border border-[var(--accent)]/30 shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Cpu className="w-4 h-4 text-[var(--accent)]" />
            <span>02. ARCHITECTURE & COMPUTE OPTIMIZATION</span>
          </button>
          <button
            onClick={() => setActiveTab("telemetry")}
            className={`px-5 py-2.5 rounded-xl text-xs font-code font-bold tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "telemetry"
                ? "text-[var(--accent-emerald)] bg-[var(--surface-elevated)] border border-[var(--accent-emerald)]/30 shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <GitBranch className="w-4 h-4 text-[var(--accent-emerald)]" />
            <span>03. CONTROLLED EXPERIMENT SERIES (24 TASKS)</span>
          </button>
        </div>

        {/* TAB 1: THE AUDIT & RETRACTION STORY */}
        {activeTab === "audit" && (
          <div id="audit-section" className="space-y-8 scroll-mt-28">
            <div className="vilen-card rounded-2xl p-6 sm:p-8 border border-[var(--accent-crimson)]/40 bg-gradient-to-b from-[var(--accent-crimson)]/5 via-[var(--surface-elevated)] to-[var(--surface-page)]">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[var(--border)]">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 text-xs font-code px-3 py-1 rounded-full bg-[var(--accent-crimson)]/15 text-[var(--accent-crimson)] border border-[var(--accent-crimson)]/30">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>SCIENTIFIC INTEGRITY CASE STUDY</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                    Auditing My Own Favorable Result: 24.28% → 2.48%
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] font-code max-w-3xl leading-relaxed">
                    The strongest test of an engineer is not whether they can produce a high metric, but whether they have the integrity to audit and invalidate it when the methodology is flawed.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--surface-inset)] border border-[var(--accent-crimson)]/30 text-center font-code shrink-0">
                  <div className="text-[10px] text-[var(--text-subtle)] uppercase">DATASET CONTAMINATION AUDIT</div>
                  <div className="text-3xl font-black text-[var(--accent-crimson)] mt-1">35.5%</div>
                  <div className="text-[10px] text-[var(--accent-crimson)]">Train / Evaluation Overlap Discovered</div>
                </div>
              </div>

              {/* Side-by-Side Audit Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="p-5 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-2 font-code">
                  <div className="text-xs text-[var(--accent)] font-bold">STAGE A: INITIAL OBSERVATION</div>
                  <div className="text-2xl font-black text-[var(--text-primary)]">24.28% Acc</div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Initial fine-tuning runs with experience replay appeared to retain ~24% 2-digit arithmetic generalization. The initial hypothesis credited the replay buffer for retaining the skill manifold.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[var(--accent-crimson)]/10 border border-[var(--accent-crimson)]/40 space-y-2 font-code">
                  <div className="text-xs text-[var(--accent-crimson)] font-bold">STAGE B: ADVERSARIAL AUDIT</div>
                  <div className="text-2xl font-black text-[var(--accent-crimson)]">35.5% Overlap</div>
                  <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                    Rather than publishing the favorable result, I wrote an automated n-gram contamination scanner. It discovered that 35.5% of test items had identical or near-identical counterparts in the training buffer.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[var(--accent-emerald)]/10 border border-[var(--accent-emerald)]/30 space-y-2 font-code">
                  <div className="text-xs text-[var(--accent-emerald)] font-bold">STAGE C: REVISED REALITY</div>
                  <div className="text-2xl font-black text-[var(--accent-emerald)]">2.48% True Acc</div>
                  <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                    Re-evaluating on strictly verified held-out splits dropped the true generalization accuracy to 2.48%. Crucially, I isolated that generation collapse was caused by parameter freezing dynamics rather than replay data loss.
                  </p>
                </div>
              </div>

              {/* Reproducibility Manifest Box */}
              <div className="mt-6 pt-6 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-code text-[var(--text-muted)]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)]" />
                  <span>Seed-Fixed Deterministic Locks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)]" />
                  <span>RNG-State Checkpointing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)]" />
                  <span>SHA256 Manifest Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)]" />
                  <span>26 Test Modules & 56 Reports</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ARCHITECTURE & COMPUTE OPTIMIZATION */}
        {activeTab === "architecture" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-extrabold text-[var(--text-primary)]">
                Pure PyTorch 12-Layer Decoder Architecture
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-code">
                Built from fundamental mathematical tensor operations without using <code className="text-[var(--accent)] font-code text-xs">transformers.AutoModelForCausalLM</code> or pre-built attention blocks.
              </p>

              <div className="space-y-3 pt-2">
                {project.architecture.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)]">
                    <span className="w-6 h-6 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] flex items-center justify-center text-[11px] font-code text-[var(--accent)] shrink-0 font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-xs text-[var(--text-primary)] font-code leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="vilen-card rounded-2xl p-6 border border-[var(--border)] space-y-4 font-code">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-[var(--border)]">
                  <span className="text-[var(--accent)] font-bold">SYSTEM TENSOR PROFILE</span>
                  <span className="text-[var(--text-subtle)]">RTX 4050 6GB LOCAL</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-[var(--border)]/50">
                    <span className="text-[var(--text-muted)]">Layers (Decoder Blocks)</span>
                    <span className="text-[var(--text-primary)] font-bold">12</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[var(--border)]/50">
                    <span className="text-[var(--text-muted)]">Hidden Dimension (d_model)</span>
                    <span className="text-[var(--text-primary)] font-bold">384</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[var(--border)]/50">
                    <span className="text-[var(--text-muted)]">Attention Heads</span>
                    <span className="text-[var(--text-primary)] font-bold">6 (64 dim / head)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[var(--border)]/50">
                    <span className="text-[var(--text-muted)]">Vocabulary Size</span>
                    <span className="text-[var(--text-primary)] font-bold">8,192 (BPE + Per-Digit)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[var(--border)]/50">
                    <span className="text-[var(--text-muted)]">Context Length</span>
                    <span className="text-[var(--text-primary)] font-bold">512 tokens</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[var(--border)]/50">
                    <span className="text-[var(--text-muted)]">Total Parameters</span>
                    <span className="text-[var(--accent)] font-bold">42,143,616</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[var(--text-muted)]">Token Density Gain</span>
                    <span className="text-[var(--accent-emerald)] font-bold">41.6% → 100.0%</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)] text-[11px] text-[var(--text-muted)]">
                  <strong>Weight-Tying Benefit:</strong> Reusing the input embedding matrix for output linear projection saved ~3.15M parameters (~7.5% of total budget), directly reducing VRAM pressure during backpropagation.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONTROLLED EXPERIMENT SERIES */}
        {activeTab === "telemetry" && (
          <div className="space-y-6">
            <div className="text-sm text-[var(--text-muted)] font-code">
              Select an experiment from the 24-task controlled experiment matrix to inspect hypotheses, expectations, and measured outcomes:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {project.experiments.map((exp, idx) => {
                const isSelected = selectedExperiment === idx;
                const isNull = exp.verdict === "NULL RESULT";
                const isRetracted = exp.verdict === "REVISED & RETRACTED";

                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedExperiment(idx)}
                    className={`text-left p-4 rounded-2xl border font-code transition-all ${
                      isSelected
                        ? isRetracted
                          ? "bg-[var(--accent-crimson)]/10 border-[var(--accent-crimson)]"
                          : isNull
                          ? "bg-[var(--accent-amber)]/10 border-[var(--accent-amber)]"
                          : "bg-[var(--accent)]/10 border-[var(--accent)]"
                        : "bg-[var(--surface-elevated)] border-[var(--border)] hover:border-[var(--border-strong)]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-[var(--text-subtle)]">EXP 0{idx + 1}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isRetracted
                          ? "bg-[var(--accent-crimson)]/20 text-[var(--accent-crimson)]"
                          : isNull
                          ? "bg-[var(--accent-amber)]/20 text-[var(--accent-amber)]"
                          : "bg-[var(--accent-emerald)]/20 text-[var(--accent-emerald)]"
                      }`}>
                        {exp.verdict}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)] line-clamp-2">
                      {exp.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Experiment Detail Dossier */}
            <div className="vilen-card rounded-2xl p-6 border border-[var(--border)] space-y-4 font-code">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[var(--border)]">
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  {project.experiments[selectedExperiment].title}
                </h4>
                <div className="text-xs text-[var(--accent)] font-bold">
                  VERDICT: {project.experiments[selectedExperiment].verdict}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)] space-y-1">
                  <span className="text-[10px] text-[var(--text-subtle)] font-bold">HYPOTHESIS</span>
                  <p className="text-[var(--text-primary)]">{project.experiments[selectedExperiment].hypothesis}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)] space-y-1">
                  <span className="text-[10px] text-[var(--text-subtle)] font-bold">EXPECTED RESULT</span>
                  <p className="text-[var(--text-primary)]">{project.experiments[selectedExperiment].expected}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--accent-amber)] font-bold">EMPIRICAL OBSERVATION</span>
                  {project.experiments[selectedExperiment].delta && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--surface-inset)] text-[var(--text-primary)] font-bold">
                      DELTA: {project.experiments[selectedExperiment].delta}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                  {project.experiments[selectedExperiment].observed}
                </p>
                <p className="text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border)]/70">
                  {project.experiments[selectedExperiment].details}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
