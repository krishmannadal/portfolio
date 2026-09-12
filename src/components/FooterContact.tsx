"use client";

import React, { useState } from "react";
import { Mail, FileText, Copy, Check, Terminal, ExternalLink, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useResume } from "./ClientShell";

export const FooterContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { openResume } = useResume();

  const cloneCommand = "git clone https://github.com/Krishna-Mandal/mini-r1.git";

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="py-24 bg-[var(--surface-subtle)] border-t border-[var(--border)] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[var(--border)]">
          {/* Left Column: Call to Action & Research Stance */}
          <div className="lg:col-span-7 space-y-4">
            <div className="eyebrow-cmd">
              COMMUNICATIONS & RESEARCH OPPORTUNITIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.08]">
              Interested in building, evaluating, or breaking AI systems?
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-[family-name:var(--font-code)] leading-relaxed max-w-xl">
              I am actively seeking research-oriented AI internships and opportunities to contribute to language model pretraining, continual learning studies, and evaluation integrity.
            </p>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-[family-name:var(--font-code)] text-xs">
              <a
                href="mailto:krishnakumar.mandal@sfit.ac.in"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[var(--surface-elevated)] hover:bg-[var(--accent-wash)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-primary)] transition-all font-semibold"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>EMAIL DIRECTLY</span>
              </a>

              <a
                href="https://github.com/Krishna-Mandal"
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[var(--surface-elevated)] hover:bg-[var(--accent-wash)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-primary)] transition-all font-semibold"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB</span>
                <ExternalLink className="w-3 h-3 text-[var(--text-subtle)]" />
              </a>

              <a
                href="https://linkedin.com/in/krishnakumarmandal"
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[var(--surface-elevated)] hover:bg-[var(--accent-wash)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-primary)] transition-all font-semibold"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>LINKEDIN</span>
                <ExternalLink className="w-3 h-3 text-[var(--text-subtle)]" />
              </a>

              <button
                onClick={openResume}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-contrast)] font-bold transition-all shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>VIEW RESUME</span>
              </button>
            </div>
          </div>

          {/* Right Column: Terminal Command Verification */}
          <div className="lg:col-span-5 font-[family-name:var(--font-code)]">
            <div className="vilen-card rounded-2xl p-6 border border-[var(--border)] space-y-3.5 bg-[var(--surface-elevated)]">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-[var(--border)]">
                <div className="flex items-center space-x-2 text-[var(--text-primary)] font-bold">
                  <Terminal className="w-4 h-4 text-[var(--accent)]" />
                  <span>EXPERIMENT REPRODUCTION</span>
                </div>
                <span className="text-[10px] text-[var(--accent-emerald)] font-bold">SEED-LOCKED</span>
              </div>

              <div className="text-[11px] text-[var(--text-muted)]">
                Clone the flagship repository to verify the 24-task experiment suite and reproduction tests:
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--surface-inset)] border border-[var(--border)] flex items-center justify-between gap-2">
                <span className="text-xs text-[var(--accent)] font-mono truncate">
                  {cloneCommand}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--surface-subtle)] border border-[var(--border)] text-[var(--text-primary)] transition-all shrink-0"
                  aria-label="Copy clone command"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[var(--text-subtle)]" />
                  )}
                </button>
              </div>

              <div className="text-[10px] text-[var(--text-subtle)] flex items-center space-x-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
                <span>Includes 26 pytest modules, 56 experiment run manifests, and the audit diff.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Principles */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-[family-name:var(--font-code)] text-xs text-[var(--text-subtle)]">
          <div>
            © {new Date().getFullYear()} Krishna Kumar Mandal • SFIT Mumbai (2024–2028)
          </div>
          <div className="flex items-center space-x-3 text-[11px]">
            <span>PURE PYTORCH</span>
            <span>•</span>
            <span>NO MARKETING HYPE</span>
            <span>•</span>
            <span className="text-[var(--accent)] font-bold">FALSIFIABLE RESEARCH</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
