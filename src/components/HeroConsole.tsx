"use client";

import React, { useState, useRef, useCallback } from "react";
import { Cpu, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

/** 3D mouse-tracking parallax coin – replaces the static :hover-only version */
const CoinWithParallax: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current || !coinRef.current) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = stageRef.current!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = x * 20; // max ±10 degrees
      const rotX = -y * 20;
      coinRef.current!.style.transform = `translateY(-4px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    if (coinRef.current) {
      coinRef.current.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    }
  }, []);

  return (
    <div
      ref={stageRef}
      className="research-coin-stage"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={coinRef} className="research-coin" style={{ transition: "transform 0.15s ease-out" }}>
        {/* 3D Depth Echoes */}
        <div className="coin-echo coin-echo-1" />
        <div className="coin-echo coin-echo-2" />
        <div className="coin-echo coin-echo-3" />

        {/* Main Lens Face */}
        <div className="coin-face p-6 text-center">
          <div className="coin-sheen" />

          <div className="w-10 h-10 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center mb-2 shadow-inner">
            <Cpu className="w-5 h-5 text-[var(--accent)]" />
          </div>

          <span className="text-[11px] font-[family-name:var(--font-code)] tracking-widest text-[var(--text-subtle)] uppercase">
            FLAGSHIP INSTRUMENT
          </span>
          <div className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight mt-0.5">
            MINI-R1
          </div>
          <div className="text-xs font-[family-name:var(--font-code)] text-[var(--accent)] font-bold">
            42.1M PARAMETERS
          </div>

          <div className="mt-3 pt-3 border-t border-[var(--border)] w-full grid grid-cols-2 gap-2 text-[10px] font-[family-name:var(--font-code)]">
            <div className="bg-[var(--surface-subtle)]/70 p-1.5 rounded-lg border border-[var(--border)]">
              <div className="text-[var(--text-subtle)]">HARDWARE</div>
              <div className="text-[var(--text-primary)] font-bold">RTX 4050 6GB</div>
            </div>
            <div className="bg-[var(--surface-subtle)]/70 p-1.5 rounded-lg border border-[var(--border)]">
              <div className="text-[var(--text-subtle)]">THROUGHPUT</div>
              <div className="text-[var(--accent-emerald)] font-bold">17.3k tok/s</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroConsole: React.FC = () => {
  const [packingMode, setPackingMode] = useState<"naive" | "contiguous">("contiguous");
  const [activeEngine, setActiveEngine] = useState<"packing" | "tokenizer">("packing");
  const [sampleNumber, setSampleNumber] = useState("42109");

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-subtle-grid border-b border-[var(--border)] scroll-mt-24">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow */}
        <div className="text-center mb-6">
          <span className="eyebrow-cmd px-3.5 py-1.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] shadow-sm">
            research-oriented ai/ml engineer • sfit mumbai (2024–2028)
          </span>
        </div>

        {/* Giant Editorial Headline */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.06]">
            Engineering AI systems with a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[#60a5fa] to-[#93c5fd]">
              researcher’s skepticism
            </span>
            .
          </h1>
          <p className="text-base sm:text-xl text-[var(--text-muted)] font-normal max-w-2xl mx-auto leading-relaxed">
            I train models from scratch under tight compute constraints, design controlled experiments, and audit my own results.
          </p>

          {/* Core Philosophy Loop */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 py-1.5 px-4 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-xs font-code text-[var(--text-primary)] shadow-sm">
            <span className="text-[var(--accent)] font-bold">BUILD</span>
            <span className="text-[var(--text-subtle)]">→</span>
            <span className="text-[var(--accent-amber)] font-bold">MEASURE</span>
            <span className="text-[var(--text-subtle)]">→</span>
            <span className="text-[var(--accent-crimson)] font-bold">BREAK</span>
            <span className="text-[var(--text-subtle)]">→</span>
            <span className="text-[var(--accent-emerald)] font-bold">UNDERSTAND</span>
          </div>
        </div>

        {/* Centerpiece: The Vilendesign 3D Research Lens & Live Instrument */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: 3D Holographic Research Lens / Coin */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <CoinWithParallax />
          </div>

          {/* Right Column: Live Interactive Inspection Engine */}
          <div className="lg:col-span-7">
            <div className="vilen-card rounded-2xl p-6 sm:p-7 border border-[var(--border)] space-y-5">
              {/* Engine Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[var(--border)]">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
                  <span className="text-xs font-code font-bold text-[var(--text-primary)]">
                    RESEARCH ENGINE // LOCAL COMPUTE OPTIMIZER
                  </span>
                </div>
                <span className="text-[10px] font-code px-2 py-0.5 rounded-full bg-[var(--accent-wash)] text-[var(--accent)] border border-[var(--accent)]/20">
                  REAL RTX 4050 METRICS
                </span>
              </div>

              {/* Engine Tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveEngine("packing")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-code font-semibold transition-all border ${
                    activeEngine === "packing"
                      ? "bg-[var(--surface-elevated)] border-[var(--accent)] text-[var(--accent)] shadow-sm"
                      : "bg-[var(--surface-subtle)] border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  TOKEN PACKING DENSITY
                </button>
                <button
                  onClick={() => setActiveEngine("tokenizer")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-code font-semibold transition-all border ${
                    activeEngine === "tokenizer"
                      ? "bg-[var(--surface-elevated)] border-[var(--accent)] text-[var(--accent)] shadow-sm"
                      : "bg-[var(--surface-subtle)] border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  PER-DIGIT TOKENIZER
                </button>
              </div>

              {/* Dynamic Engine Body */}
              {activeEngine === "packing" ? (
                <div className="space-y-4 font-code">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)]">Batching Architecture:</span>
                    <div className="inline-flex rounded-full p-1 bg-[var(--surface-subtle)] border border-[var(--border)]">
                      <button
                        onClick={() => setPackingMode("naive")}
                        className={`px-3 py-1 rounded-full text-[11px] transition-colors ${
                          packingMode === "naive"
                            ? "bg-[var(--accent-crimson)]/20 text-[var(--accent-crimson)] font-bold"
                            : "text-[var(--text-subtle)]"
                        }`}
                      >
                        Padded Batching
                      </button>
                      <button
                        onClick={() => setPackingMode("contiguous")}
                        className={`px-3 py-1 rounded-full text-[11px] transition-colors ${
                          packingMode === "contiguous"
                            ? "bg-[var(--accent-emerald)]/20 text-[var(--accent-emerald)] font-bold"
                            : "text-[var(--text-subtle)]"
                        }`}
                      >
                        Contiguous EOS Packing
                      </button>
                    </div>
                  </div>

                  {/* Visual Bar Comparison */}
                  <div className="p-4 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)] space-y-2.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--text-muted)]">GPU VRAM Utilization:</span>
                      <span className={packingMode === "contiguous" ? "text-[var(--accent-emerald)] font-bold" : "text-[var(--accent-crimson)] font-bold"}>
                        {packingMode === "contiguous" ? "Active Tokens: 100.0%" : "Active Tokens: 41.6% (58.4% wasted)"}
                      </span>
                    </div>

                    {packingMode === "naive" ? (
                      <div className="space-y-1.5 text-[10px]">
                        <div className="flex gap-1">
                          <div className="h-5 bg-[var(--accent)] w-[40%] rounded flex items-center justify-center text-[var(--accent-contrast)] font-bold">doc_1</div>
                          <div className="h-5 bg-[var(--accent-crimson)]/20 border border-dashed border-[var(--accent-crimson)]/40 w-[60%] rounded flex items-center justify-center text-[var(--accent-crimson)]">PAD (60% waste)</div>
                        </div>
                        <div className="flex gap-1">
                          <div className="h-5 bg-[var(--accent)] w-[25%] rounded flex items-center justify-center text-[var(--accent-contrast)] font-bold">doc_2</div>
                          <div className="h-5 bg-[var(--accent-crimson)]/20 border border-dashed border-[var(--accent-crimson)]/40 w-[75%] rounded flex items-center justify-center text-[var(--accent-crimson)]">PAD (75% waste)</div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1.5 text-[10px]">
                        <div className="flex gap-1">
                          <div className="h-5 bg-[var(--accent)] w-[42%] rounded flex items-center justify-center text-[var(--accent-contrast)] font-bold">doc_1</div>
                          <div className="h-5 bg-[var(--accent-amber)] w-[6%] rounded flex items-center justify-center text-[var(--accent-contrast)] font-bold">EOS</div>
                          <div className="h-5 bg-[var(--accent-emerald)] w-[26%] rounded flex items-center justify-center text-[var(--accent-contrast)] font-bold">doc_2</div>
                          <div className="h-5 bg-[var(--accent-amber)] w-[6%] rounded flex items-center justify-center text-[var(--accent-contrast)] font-bold">EOS</div>
                          <div className="h-5 bg-[var(--accent-violet)] w-[20%] rounded flex items-center justify-center text-[var(--accent-contrast)] font-bold">doc_3</div>
                        </div>
                        <div className="text-[11px] text-[var(--accent-emerald)] flex items-center space-x-1.5 pt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-emerald)] shrink-0" />
                          <span>Zero wasted attention compute. 58% wall-clock reduction on single laptop GPU.</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4 font-code">
                  <div className="text-xs text-[var(--text-muted)]">
                    Single-Digit Token Isolation (Custom SentencePiece 8k BPE):
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={sampleNumber}
                      onChange={(e) => setSampleNumber(e.target.value.replace(/\D/g, ""))}
                      maxLength={8}
                      className="bg-[var(--surface-inset)] border border-[var(--border)] rounded-lg px-3 py-1.5 text-xs text-[var(--accent)] focus:border-[var(--accent)] outline-none font-code w-32"
                      placeholder="e.g. 42109"
                    />
                    <span className="text-[11px] text-[var(--text-subtle)]">Type any multi-digit number</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)] space-y-2">
                    <div className="text-[10px] text-[var(--text-subtle)]">TOKEN BOUNDARIES:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {sampleNumber.split("").map((digit, idx) => (
                        <div
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold"
                        >
                          token_{digit}
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[var(--accent-emerald)] pt-1">
                      ✓ Guarantees positional arithmetic logic without greedy multi-digit BPE merging.
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#flagship"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-contrast)] font-bold text-xs font-code transition-all shadow-md"
                >
                  <span>EXPLORE MINI-R1 DOSSIER</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#audit-section"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[var(--surface-elevated)] hover:bg-[var(--accent-wash)] border border-[var(--accent-crimson)]/40 hover:border-[var(--accent-crimson)] text-[var(--accent-crimson)] text-xs font-code transition-all"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>INSPECT 35.5% AUDIT DIFF</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Signal Pills Row */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-center gap-2 text-xs font-code">
          <span className="text-[var(--text-subtle)] mr-2">Core Verified Stack:</span>
          {[
            "Pure PyTorch (No HF Classes)",
            "12-Layer Decoder Transformer",
            "Weight-Tied Embeddings",
            "SentencePiece Per-Digit BPE",
            "Single RTX 4050 (6 GB)",
            "35.5% Leakage Overlap Audit",
            "Seed-Fixed Determinism",
            "vLLM Multi-LoRA",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-muted)] text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
