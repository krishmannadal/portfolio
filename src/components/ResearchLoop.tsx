"use client";

import React, { useState } from "react";
import { RESEARCH_LOOP_STEPS } from "@/data/research";
import { Search, FlaskConical, Code2, Sliders, CheckCircle, ShieldAlert, FileText } from "lucide-react";

export const ResearchLoop: React.FC = () => {
  const [activeStep, setActiveStep] = useState(5); // Default to "Leakage Audit"

  const stepIcons = [
    Search,
    FlaskConical,
    Code2,
    Sliders,
    CheckCircle,
    ShieldAlert,
    FileText,
  ];

  return (
    <section id="philosophy" className="py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="eyebrow-cmd">
            03 // EXPERIMENTAL METHODOLOGY & RIGOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
            “I don’t trust a metric just because it went up.”
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            In modern machine learning, a rising validation curve is often an artifact of subtle data contamination, target leakage, or flawed aggregation rules rather than genuine generalization. My workflow is organized around a falsifiable 7-stage research loop.
          </p>
        </div>

        {/* 7-Step Pipeline Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
          {RESEARCH_LOOP_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isSelected = activeStep === idx;
            const isAudit = idx === 5;
            const isCorrection = idx === 6;

            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-3.5 rounded-2xl border transition-all relative ${
                  isSelected
                    ? isAudit
                      ? "bg-[var(--accent-crimson)]/10 border-[var(--accent-crimson)] shadow-lg shadow-[var(--accent-crimson)]/10"
                      : isCorrection
                      ? "bg-[var(--accent-emerald)]/10 border-[var(--accent-emerald)] shadow-lg shadow-[var(--accent-emerald)]/10"
                      : "bg-[var(--surface-elevated)] border-[var(--accent)] shadow-lg shadow-[var(--accent)]/10"
                    : "bg-[var(--surface-elevated)] border-[var(--border)] hover:border-[var(--border-strong)]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-code font-bold ${
                    isSelected ? (isAudit ? "text-[var(--accent-crimson)]" : "text-[var(--accent)]") : "text-[var(--text-subtle)]"
                  }`}>
                    STAGE {step.step}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${
                    isSelected
                      ? isAudit ? "text-[var(--accent-crimson)]" : isCorrection ? "text-[var(--accent-emerald)]" : "text-[var(--accent)]"
                      : "text-[var(--text-subtle)]"
                  }`} />
                </div>
                <div className={`text-xs font-bold font-code tracking-tight ${
                  isSelected ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"
                }`}>
                  {step.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Expanded Inspector Card */}
        <div className="vilen-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-xs font-code font-bold text-[var(--accent)]">
                STAGE {RESEARCH_LOOP_STEPS[activeStep].step}
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                {RESEARCH_LOOP_STEPS[activeStep].name}: Scientific Protocol
              </h3>
            </div>
            <div className="text-xs font-code">
              {activeStep === 5 ? (
                <span className="text-[var(--accent-crimson)] font-bold flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  MANDATORY ADVERSARIAL AUDIT GATE
                </span>
              ) : activeStep === 6 ? (
                <span className="text-[var(--accent-emerald)] font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  SCIENTIFIC INTEGRITY GATE
                </span>
              ) : (
                <span className="text-[var(--text-muted)]">STANDARD REPRODUCIBILITY PROTOCOL</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                {RESEARCH_LOOP_STEPS[activeStep].desc}
              </p>
              <div className="text-xs font-code pt-1">
                {activeStep === 5 ? (
                  <p className="text-[var(--accent-crimson)] bg-[var(--accent-crimson)]/10 p-4 rounded-xl border border-[var(--accent-crimson)]/30">
                    <strong>Real Example in Mini-R1:</strong> We subjected our synthetic arithmetic fine-tuning dataset to automated n-gram overlap checks and caught a 35.5% token overlap with the evaluation benchmark. Rather than concealing the flaw, we revised the reported accuracy from 24.28% down to 2.48% and retracted the earlier conclusion.
                  </p>
                ) : activeStep === 4 ? (
                  <p className="text-[var(--accent)] bg-[var(--accent-wash)] p-4 rounded-xl border border-[var(--accent)]/30">
                    <strong>Real Example in Nullius:</strong> We include explicit null baselines (random assignment, constant majority, heuristic string match) in the inspection harness to guarantee that reported claim verification scores represent true semantic signal rather than statistical artifacts.
                  </p>
                ) : (
                  <p className="text-[var(--text-muted)] bg-[var(--surface-elevated)] p-4 rounded-xl border border-[var(--border)]">
                    Every variable is tracked with SHA256 manifests, fixed seeds, and explicit regression tests committed directly to Git before running on GPU hardware.
                  </p>
                )}
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center space-y-2 text-xs font-code p-4 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)]">
              <div className="text-[10px] text-[var(--text-subtle)] uppercase tracking-wider font-bold">
                VERIFICATION CHECKLIST
              </div>
              <div className="flex items-center space-x-2 text-[var(--text-primary)]">
                <span className="text-[var(--accent-emerald)] font-bold">✓</span>
                <span>Deterministic Seed Locking</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--text-primary)]">
                <span className="text-[var(--accent-emerald)] font-bold">✓</span>
                <span>Complete RNG-State Serialization</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--text-primary)]">
                <span className="text-[var(--accent-emerald)] font-bold">✓</span>
                <span>Automated N-Gram Overlap Check</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--text-primary)]">
                <span className="text-[var(--accent-emerald)] font-bold">✓</span>
                <span>Network-Isolated Test Runner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
