"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ExternalLink, ShieldCheck, AlertCircle } from "lucide-react";
import { GithubIcon } from "./Icons";

export const MLSystemsSection: React.FC = () => {
  const privateTune = PROJECTS.find((p) => p.id === "privatetune")!;
  const wecode = PROJECTS.find((p) => p.id === "wecode")!;
  const time2eat = PROJECTS.find((p) => p.id === "time2eat")!;

  const [activeTenant, setActiveTenant] = useState<"tenantA" | "tenantB" | "tenantC">("tenantA");

  const tenants = {
    tenantA: {
      name: "Tenant Alpha (Finance Domain)",
      adapterRank: "r = 16, α = 32",
      datasetHash: "sha256:7f4a21...d98b",
      latency: "7.8 ms hot swap",
      status: "Verified On-Host"
    },
    tenantB: {
      name: "Tenant Beta (Legal Analysis)",
      adapterRank: "r = 8, α = 16",
      datasetHash: "sha256:91c0e3...511a",
      latency: "8.2 ms hot swap",
      status: "Verified On-Host"
    },
    tenantC: {
      name: "Tenant Gamma (Medical Notes)",
      adapterRank: "r = 32, α = 64",
      datasetHash: "sha256:e4d10f...289c",
      latency: "9.1 ms hot swap",
      status: "Verified On-Host"
    }
  };

  return (
    <section id="systems" className="py-24 border-b border-[var(--border)] bg-[var(--surface-page)] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="eyebrow-cmd">
            05 // ML SYSTEMS & PRODUCTION INFRASTRUCTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
            Serving, Isolation, & Software Engineering
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-code">
            Building reliable serving infrastructure, multi-tenant isolation, and complete full-stack web platforms.
          </p>
        </div>

        {/* PRIVATETUNE: FLAGSHIP SYSTEMS ARCHITECTURE */}
        <div className="vilen-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] mb-16 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-code px-3 py-1 rounded-full bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] border border-[var(--accent-amber)]/30 mb-2 font-bold">
                <span>PROJECT 03 // ML SYSTEMS PLATFORM</span>
                <span className="text-[var(--text-subtle)]">•</span>
                <span className="text-[var(--accent-crimson)] font-bold">STATUS: UNDER DEVELOPMENT</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-[var(--text-primary)]">
                PrivateTune: Multi-Tenant LoRA Platform
              </h3>
              <p className="text-xs sm:text-sm font-code text-[var(--text-muted)] mt-1">
                One open-weight base model in VRAM. Independent LoRA adapters per tenant. 100% on-host data privacy.
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <a
                href={privateTune.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[var(--surface-elevated)] hover:bg-[var(--accent-wash)] border border-[var(--border)] text-xs font-code text-[var(--text-primary)] transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>INSPECT REPO</span>
              </a>
              <span className="text-[11px] font-code px-3 py-1.5 rounded-full bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/30 text-[var(--accent-amber)] font-bold">
                vLLM + MLflow + Docker
              </span>
            </div>
          </div>

          {/* Architecture Concept Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-4">
            <div className="lg:col-span-7 space-y-4 font-code">
              <div className="text-xs text-[var(--accent)] font-bold uppercase tracking-wider">
                CORE ARCHITECTURAL GUARANTEE:
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                Rather than spinning up separate 7B+ base model weights per customer (cost-prohibitive) or transmitting confidential client training data to third-party closed APIs (unacceptable for privacy), PrivateTune maintains <strong>one frozen open-weight base model</strong> in GPU VRAM and dynamically routes requests through customer-specific LoRA adapters with SHA256 integrity verification.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-subtle)] font-bold">INFERENCE ENGINE</div>
                  <div className="text-sm font-bold text-[var(--text-primary)] mt-0.5">vLLM Multi-LoRA</div>
                  <div className="text-[10px] text-[var(--accent)]">Sub-10ms dynamic swap</div>
                </div>
                <div className="p-4 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-subtle)] font-bold">ARTIFACT INTEGRITY</div>
                  <div className="text-sm font-bold text-[var(--text-primary)] mt-0.5">SHA256 Manifests</div>
                  <div className="text-[10px] text-[var(--accent-emerald)] font-bold">Regression gate locked</div>
                </div>
              </div>
            </div>

            {/* Interactive Tenant Adapter Router Simulator */}
            <div className="lg:col-span-5 font-code">
              <div className="p-5 rounded-2xl bg-[var(--surface-inset)] border border-[var(--border)] space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[var(--border)]">
                  <span className="text-[var(--accent)] font-bold">VRAM ADAPTER ROUTER</span>
                  <span className="text-[var(--accent-emerald)] font-bold">BASE: FROZEN 7B</span>
                </div>

                <div className="text-[11px] text-[var(--text-muted)]">
                  Select active client tenant:
                </div>

                <div className="flex gap-1.5">
                  {(["tenantA", "tenantB", "tenantC"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveTenant(t)}
                      className={`flex-1 py-1.5 rounded-xl text-[11px] font-bold border transition-all ${
                        activeTenant === t
                          ? "bg-[var(--accent-wash)] text-[var(--accent)] border-[var(--accent)] shadow-sm"
                          : "bg-[var(--surface-elevated)] text-[var(--text-subtle)] border-[var(--border)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {t.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Tenant State Card */}
                <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-subtle)]">Domain:</span>
                    <span className="text-[var(--text-primary)] font-bold">{tenants[activeTenant].name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-subtle)]">LoRA Rank:</span>
                    <span className="text-[var(--text-primary)]">{tenants[activeTenant].adapterRank}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-subtle)]">Dataset Hash:</span>
                    <span className="text-[var(--accent)] font-mono text-[10px]">{tenants[activeTenant].datasetHash}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-subtle)]">Latency Profile:</span>
                    <span className="text-[var(--accent-emerald)] font-bold">{tenants[activeTenant].latency}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-[var(--border)]/70">
                    <span className="text-[var(--text-subtle)]">Data Privacy:</span>
                    <span className="text-[var(--accent-emerald)] font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
                      {tenants[activeTenant].status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Under Development Status Guardrail */}
          <div className="p-4 rounded-xl bg-[var(--accent-amber)]/5 border border-[var(--accent-amber)]/30 text-xs font-code flex items-start space-x-3">
            <AlertCircle className="w-4 h-4 text-[var(--accent-amber)] shrink-0 mt-0.5" />
            <p className="text-[var(--text-muted)] leading-relaxed">
              <strong className="text-[var(--accent-amber)]">Honest Engineering Disclosure:</strong> PrivateTune is actively under development. Core ingestion, dataset formatting, QLoRA fine-tuning, and baseline vLLM serving are functional. Dynamic multi-node scaling and automated load shedding are actively being hardened. We do NOT claim enterprise production-readiness.
            </p>
          </div>
        </div>

        {/* SUPPORTING FULL-STACK PROJECTS: WECODE & TIME2EAT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* WECODE */}
          <div className="vilen-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] space-y-5">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-code px-3 py-1 rounded-full bg-[var(--accent-wash)] text-[var(--accent)] border border-[var(--accent)]/30 mb-2 font-bold">
                <span>PROJECT 06 // PRODUCT ENGINEERING</span>
                <span className="text-[var(--text-subtle)]">•</span>
                <span className="text-[var(--accent-emerald)]">DEPLOYED PLATFORM</span>
              </div>
              <h3 className="text-2xl font-black text-[var(--text-primary)]">
                Wecode: AI Technical Practice Platform
              </h3>
              <p className="text-xs font-code text-[var(--text-muted)] mt-1">
                LeetCode-style technical practice platform for Machine Learning, Deep Learning, and NLP.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
              Built to provide hands-on tensor manipulation, backpropagation math, attention masking, and custom layer challenges with automated in-browser code execution and contextual AI hints via Gemini API.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-code">
              <div className="p-3 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)]">
                <div className="text-[10px] text-[var(--text-subtle)] font-bold">STACK</div>
                <div className="text-[var(--text-primary)] font-bold mt-0.5">Next.js + Prisma</div>
                <div className="text-[10px] text-[var(--text-muted)]">PostgreSQL Database</div>
              </div>
              <div className="p-3 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)]">
                <div className="text-[10px] text-[var(--text-subtle)] font-bold">EXECUTION SANDBOX</div>
                <div className="text-[var(--accent-emerald)] font-bold mt-0.5">850ms Turnaround</div>
                <div className="text-[10px] text-[var(--text-muted)]">Numerical test suites</div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-code pt-2 border-t border-[var(--border)]">
              <span className="text-[var(--text-subtle)]">Product Engineering Proof Point</span>
              <div className="flex space-x-3">
                <a
                  href={wecode.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1 font-semibold"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
                {wecode.demoUrl && (
                  <a
                    href={wecode.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* TIME2EAT */}
          <div className="vilen-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] space-y-5">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-code px-3 py-1 rounded-full bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] border border-[var(--accent-emerald)]/30 mb-2 font-bold">
                <span>PROJECT 07 // UTILITY FRONTEND</span>
                <span className="text-[var(--text-subtle)]">•</span>
                <span className="text-[var(--accent-emerald)]">DEPLOYED TOOL</span>
              </div>
              <h3 className="text-2xl font-black text-[var(--text-primary)]">
                Time2Eat: Real-Time Meal Planner
              </h3>
              <p className="text-xs font-code text-[var(--text-muted)] mt-1">
                Deployed real-time metabolic interval management tool with adaptive countdown timers.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
              Engineered with responsive React, customizable nutrition intervals, local persistence with schema migrations, dark/light modes, and Web Worker timestamp reconciliation to eliminate background tab timer throttling.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-code">
              <div className="p-3 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)]">
                <div className="text-[10px] text-[var(--text-subtle)] font-bold">DEPLOYMENT</div>
                <div className="text-[var(--accent-emerald)] font-bold mt-0.5">Live on Vercel</div>
                <div className="text-[10px] text-[var(--text-muted)]">Offline-first state</div>
              </div>
              <div className="p-3 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)]">
                <div className="text-[10px] text-[var(--text-subtle)] font-bold">TIMER ENGINE</div>
                <div className="text-[var(--text-primary)] font-bold mt-0.5">Web Worker Synced</div>
                <div className="text-[10px] text-[var(--text-muted)]">Zero background drift</div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-code pt-2 border-t border-[var(--border)]">
              <span className="text-[var(--text-subtle)]">Frontend Engineering Utility</span>
              <div className="flex space-x-3">
                <a
                  href={time2eat.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1 font-semibold"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
                {time2eat.demoUrl && (
                  <a
                    href={time2eat.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
