"use client";

import React from "react";
import { GraduationCap, MapPin, Target } from "lucide-react";

export const AboutTrajectory: React.FC = () => {
  const progressionSteps = [
    {
      phase: "01",
      title: "Full-Stack Software Engineering",
      desc: "Started by building end-to-end applications (Wecode, Time2Eat). Mastered client-server architectures, database indexing, typed contracts, and edge deployment.",
      tag: "SYSTEMS GROUNDING"
    },
    {
      phase: "02",
      title: "Model-Centric Curiosity",
      desc: "Realized third-party API calls abstract away the true mechanics of learning. Moved inward to study attention weights, gradient dynamics, and loss manifolds.",
      tag: "FIRST PRINCIPLES"
    },
    {
      phase: "03",
      title: "Language Models From Scratch",
      desc: "Implemented pure PyTorch Transformers, weight-tied embeddings, and SentencePiece tokenizers. Pretrained 42.1M-parameter models on single consumer GPUs (Mini-R1).",
      tag: "COMPUTE REALISM"
    },
    {
      phase: "04",
      title: "Evaluation Rigor & Research",
      desc: "Discovered that building a model is only half the work — the critical skill is knowing when an evaluation result is deceptive. Auditing, negative results, and failure modes.",
      tag: "SCIENTIFIC SKEPTICISM"
    }
  ];

  return (
    <section id="about" className="py-24 border-b border-[var(--border)] bg-[var(--surface-page)] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="eyebrow-cmd">
            09 // TRAJECTORY & DIRECTION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
            A Deliberate Progression
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-code">
            How full-stack software development evolved into language-model pretraining and empirical evaluation methodology.
          </p>
        </div>

        {/* Narrative & Profile Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            <p className="border-l-4 border-[var(--accent)] pl-5 py-1 text-lg sm:text-xl text-[var(--text-primary)] font-semibold leading-relaxed">
              “I started by building software across different layers. Over time, the questions that held my attention became increasingly model-centric: not just how to call an inference endpoint, but what is happening inside the attention matrix, why fine-tuned representations collapse, and how easily benchmark numbers can mislead you.”
            </p>
            <p className="text-xs sm:text-sm font-code leading-relaxed">
              As an undergraduate at St. Francis Institute of Technology (SFIT, Mumbai, 2024–2028), I treat resource constraints as a scientific forcing function rather than an excuse. Training on a single 6 GB laptop GPU forced me to implement contiguous token packing, weight-tying, and mixed precision that cluster engineers take for granted.
            </p>
            <p className="text-xs sm:text-sm font-code leading-relaxed">
              My goal is to contribute to research-oriented AI teams working on language model pretraining dynamics, continual learning under replay limits, and claim-level evaluation integrity.
            </p>
          </div>

          <div className="lg:col-span-5 font-code">
            <div className="vilen-card rounded-2xl p-6 border border-[var(--border)] space-y-4 text-xs">
              <div className="text-[10px] text-[var(--text-subtle)] uppercase tracking-wider font-bold pb-2 border-b border-[var(--border)]">
                ACADEMIC & GEOGRAPHIC DOSSIER
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-[var(--text-primary)] font-bold">B.E. AI & Machine Learning</div>
                  <div className="text-[var(--text-muted)]">SFIT Mumbai • 2024–2028</div>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[var(--accent-emerald)]" />
                </div>
                <div>
                  <div className="text-[var(--text-primary)] font-bold">Mumbai, India</div>
                  <div className="text-[var(--text-muted)]">Open to Global Remote & In-Person Research Roles</div>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 text-[var(--accent-amber)]" />
                </div>
                <div>
                  <div className="text-[var(--text-primary)] font-bold">Target Research Domains</div>
                  <div className="text-[var(--text-muted)]">Language Models, Evaluation Rigor, ML Systems</div>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--border)] text-[11px] text-[var(--text-muted)]">
                <strong>Positioning Principle:</strong> I do not claim to be an established scientist or ML expert. I am an engineer in training demonstrating disciplined empirical rigor.
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stage Deliberate Progression Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-code">
          {progressionSteps.map((step) => (
            <div
              key={step.phase}
              className="p-6 rounded-2xl bg-[var(--surface-subtle)] border border-[var(--border)] space-y-3 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[var(--accent)]">
                  {step.phase}
                </span>
                <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-subtle)] font-bold">
                  {step.tag}
                </span>
              </div>
              <h3 className="text-xs font-bold text-[var(--text-primary)]">
                {step.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
