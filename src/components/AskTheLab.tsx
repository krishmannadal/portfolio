"use client";

import React, { useState } from "react";
import { LAB_KNOWLEDGE_BASE, LabQAItem } from "@/data/lab-qa";
import { Search, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const AskTheLab: React.FC = () => {
  const [selectedQA, setSelectedQA] = useState<LabQAItem>(LAB_KNOWLEDGE_BASE[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", "Flagship", "Evaluation", "Systems", "Research & Ethics", "Background"];

  const filteredItems = LAB_KNOWLEDGE_BASE.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.query.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyPoints.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="ask-lab" className="py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="eyebrow-cmd">
            08 // INTERACTIVE RESEARCH EXPLORER
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
            Ask the Lab: Grounded Inquiry Interface
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-code">
            A deterministic, hallucination-free knowledge explorer grounded directly in the verified codebase manifests, hardware specs, and experimental audit logs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Preset Questions & Search */}
          <div className="lg:col-span-5 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search audit findings, metrics, hardware..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[var(--surface-elevated)] border border-[var(--border)] rounded-2xl pl-10 pr-4 py-2.5 text-xs font-code text-[var(--text-primary)] focus:border-[var(--accent)] outline-none transition-colors placeholder:text-[var(--text-subtle)] shadow-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-1.5 font-code text-[11px]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    activeCategory === cat
                      ? "bg-[var(--accent-wash)] border-[var(--accent)] text-[var(--accent)] font-bold"
                      : "bg-[var(--surface-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Question List */}
            <div className="space-y-2 max-h-[440px] overflow-y-auto pr-1">
              {filteredItems.length === 0 ? (
                <div className="p-4 text-xs font-code text-[var(--text-subtle)] text-center">
                  No verified items match your query. Try searching for &quot;audit&quot;, &quot;GSM8K&quot;, or &quot;RTX 4050&quot;.
                </div>
              ) : (
                filteredItems.map((item) => {
                  const isSelected = selectedQA.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedQA(item)}
                      className={`w-full text-left p-4 rounded-2xl border font-code transition-all ${
                        isSelected
                          ? "bg-[var(--surface-elevated)] border-[var(--accent)] text-[var(--text-primary)] shadow-sm"
                          : "bg-[var(--surface-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] text-[var(--text-subtle)] mb-1">
                        <span className="text-[var(--accent)] font-bold">{item.category}</span>
                        {isSelected && <span className="text-[var(--accent)] font-bold">SELECTED</span>}
                      </div>
                      <div className="text-xs font-semibold leading-snug">
                        {item.query}
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Grounded Answer Dossier */}
          <div className="lg:col-span-7">
            <div className="vilen-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] space-y-5 font-code">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                <div className="flex items-center space-x-2 text-xs text-[var(--accent)] font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>GROUNDED LAB RESPONSE</span>
                </div>
                <span className="text-[10px] text-[var(--accent-emerald)] bg-[var(--accent-emerald)]/10 px-3 py-1 rounded-full border border-[var(--accent-emerald)]/30 font-bold">
                  100% FACTUAL • ZERO HALLUCINATION
                </span>
              </div>

              {/* Question Banner */}
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-snug">
                &ldquo;{selectedQA.query}&rdquo;
              </h3>

              {/* Grounded Answer */}
              <div className="p-4 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)] space-y-2">
                <span className="text-[10px] text-[var(--text-subtle)] uppercase tracking-wider font-bold">
                  VERIFIED FACTUAL RECORD:
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                  {selectedQA.answer}
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] text-[var(--text-subtle)] uppercase tracking-wider font-bold">
                  KEY SCIENTIFIC TAKEAWAYS:
                </span>
                <div className="space-y-2">
                  {selectedQA.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-[var(--text-muted)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-emerald)] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {selectedQA.referencedProject && (
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-subtle)]">
                    Explore complete experimental telemetry:
                  </span>
                  <a
                    href={`#${selectedQA.referencedProject}`}
                    className="inline-flex items-center space-x-1.5 text-xs text-[var(--accent)] font-bold hover:underline"
                  >
                    <span>Jump to Project Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
