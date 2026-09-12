"use client";

import React, { useState } from "react";
import { RESEARCH_QUESTIONS } from "@/data/research";
import { ArrowUpRight } from "lucide-react";

export const ResearchNotebook: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredQuestions = filter === "all"
    ? RESEARCH_QUESTIONS
    : RESEARCH_QUESTIONS.filter((q) => q.status === filter);

  return (
    <section id="notebook" className="py-24 border-b border-[var(--border)] bg-[var(--surface-page)] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="eyebrow-cmd">
            07 // OPEN RESEARCH NOTEBOOK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
            Questions I’m Chasing
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-code">
            A transparent record of active investigations, completed empirical runs, and open hypotheses. I do not claim these as published academic papers; they are structured technical inquiries guiding my experiments.
          </p>
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap gap-2 mb-8 font-code text-xs">
          {[
            { label: "All Questions", value: "all" },
            { label: "Completed Experiments", value: "Completed Experiment" },
            { label: "Active Investigations", value: "Active Investigation" },
            { label: "Open Hypotheses", value: "Open Hypothesis" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                filter === item.value
                  ? "bg-[var(--accent-wash)] border-[var(--accent)] text-[var(--accent)] font-bold shadow-sm"
                  : "bg-[var(--surface-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Notebook Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredQuestions.map((q) => {
            const isCompleted = q.status === "Completed Experiment";
            const isActive = q.status === "Active Investigation";

            return (
              <div
                key={q.id}
                className="vilen-card rounded-2xl p-6 sm:p-7 border border-[var(--border)] space-y-4 font-code flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] text-[var(--accent)] font-bold uppercase">
                      {q.category}
                    </span>
                    <span
                      className={`text-[10px] px-2.5 py-0.5 rounded-full border font-bold ${
                        isCompleted
                          ? "bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] border-[var(--accent-emerald)]/30"
                          : isActive
                          ? "bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/30"
                          : "bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] border-[var(--accent-amber)]/30"
                      }`}
                    >
                      {q.status}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                    {q.title}
                  </h3>

                  <div className="space-y-2 text-xs">
                    <div className="p-3.5 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)] space-y-1">
                      <span className="text-[10px] text-[var(--text-subtle)] uppercase font-bold">PREMISE:</span>
                      <p className="text-[var(--text-muted)] leading-relaxed">{q.premise}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-1">
                      <span className="text-[10px] text-[var(--accent)] uppercase font-bold">
                        {isCompleted ? "FINDING / CONCLUSION:" : "CURRENT PROTOCOL / HYPOTHESIS:"}
                      </span>
                      <p className="text-[var(--text-primary)] leading-relaxed">
                        {q.currentFindingOrExpectation}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2 text-[10px] text-[var(--text-subtle)]">
                  <div className="flex flex-wrap gap-1.5">
                    {q.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-[var(--surface-inset)] border border-[var(--border)]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {q.linkedProjectId && (
                    <a
                      href={`#${q.linkedProjectId}`}
                      className="text-[var(--accent)] hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>Linked Dossier</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
