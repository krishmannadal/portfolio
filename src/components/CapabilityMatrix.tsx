"use client";

import React, { useState } from "react";
import { CAPABILITY_MATRIX } from "@/data/skills";
import { Cpu, ShieldCheck, Server, Code2 } from "lucide-react";

export const CapabilityMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("model-training");

  const icons: Record<string, React.ElementType> = {
    "model-training": Cpu,
    "evaluation-rigor": ShieldCheck,
    "ml-systems": Server,
    "software-engineering": Code2,
  };

  const activeGroup = CAPABILITY_MATRIX.find((g) => g.id === selectedCategory) || CAPABILITY_MATRIX[0];

  return (
    <section id="capabilities" className="py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="eyebrow-cmd">
            06 // &quot;WHAT I ACTUALLY BUILD&quot; (CAPABILITY MATRIX)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
            Functional Engineering & Research Artifacts
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-code">
            Organized strictly around concrete artifacts, mathematical mechanics, and verified implementations — no arbitrary proficiency percentages.
          </p>
        </div>

        {/* Category Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {CAPABILITY_MATRIX.map((group) => {
            const Icon = icons[group.id] || Cpu;
            const isSelected = selectedCategory === group.id;

            return (
              <button
                key={group.id}
                onClick={() => setSelectedCategory(group.id)}
                className={`p-4 rounded-2xl border text-left font-code transition-all ${
                  isSelected
                    ? "bg-[var(--surface-elevated)] border-[var(--accent)] shadow-sm"
                    : "bg-[var(--surface-elevated)] border-[var(--border)] hover:border-[var(--border-strong)]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[var(--accent)]" : "text-[var(--text-subtle)]"}`} />
                  <span className="text-[10px] text-[var(--text-subtle)]">{group.items.length} Artifacts</span>
                </div>
                <div className={`text-xs font-bold ${isSelected ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}`}>
                  {group.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Group Details */}
        <div className="vilen-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] space-y-6">
          <div className="pb-4 border-b border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                {activeGroup.category}
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-code mt-1">
                {activeGroup.tagline}
              </p>
            </div>
            <span className="text-xs font-code text-[var(--accent)] bg-[var(--accent-wash)] px-3 py-1 rounded-full border border-[var(--accent)]/30 self-start sm:self-auto font-bold">
              VERIFIED IN REPOSITORY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-code">
            {activeGroup.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    {item.name}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--accent)] shrink-0 font-semibold">
                    {item.proficiency}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {item.description}
                </p>
                <div className="text-[10px] text-[var(--text-subtle)] pt-1 flex items-center gap-1.5 border-t border-[var(--border)]/60">
                  <span className="text-[var(--accent)] font-semibold">Demonstrated in:</span>
                  <span className="text-[var(--text-primary)]">{item.demonstratedIn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
