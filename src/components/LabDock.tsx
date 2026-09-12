"use client";

import React, { useState } from "react";
import { SlidersHorizontal, X, ShieldAlert, Cpu, Network, Server, HelpCircle, FileText, Copy, Check } from "lucide-react";

interface LabDockProps {
  onOpenResume: () => void;
}

export const LabDock: React.FC<LabDockProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const cloneCommand = "git clone https://github.com/Krishna-Mandal/mini-r1.git";

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Quick Tool Panel */}
      {isOpen && (
        <div className="mb-3 p-4 rounded-2xl vilen-card w-72 sm:w-80 space-y-3 font-code text-xs shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
            <span className="text-[var(--accent)] font-bold">LAB TOOLS // QUICK ACCESS</span>
          </div>

          <div className="space-y-1.5">
            <a
              href="#audit-section"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-[var(--surface-elevated)] transition-colors text-[var(--accent-crimson)] font-semibold"
            >
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Inspect 35.5% Audit Diff</span>
            </a>

            <a
              href="#flagship"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-[var(--surface-elevated)] transition-colors text-[var(--text-primary)]"
            >
              <Cpu className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>Mini-R1 Pretraining Dossier</span>
            </a>

            <a
              href="#instruments"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-[var(--surface-elevated)] transition-colors text-[var(--text-primary)]"
            >
              <Network className="w-4 h-4 text-[var(--accent-amber)] shrink-0" />
              <span>Nullius Claim Pipeline DAG</span>
            </a>

            <a
              href="#systems"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-[var(--surface-elevated)] transition-colors text-[var(--text-primary)]"
            >
              <Server className="w-4 h-4 text-[var(--accent-emerald)] shrink-0" />
              <span>PrivateTune Multi-Tenant LoRA</span>
            </a>

            <a
              href="#ask-lab"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-[var(--surface-elevated)] transition-colors text-[var(--text-primary)]"
            >
              <HelpCircle className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>Ask the Lab Query Explorer</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="w-full text-left flex items-center space-x-2.5 p-2 rounded-xl hover:bg-[var(--surface-elevated)] transition-colors text-[var(--text-primary)]"
            >
              <FileText className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>View Curriculum Vitae</span>
            </button>
          </div>

          <div className="pt-2 border-t border-[var(--border)]">
            <button
              onClick={handleCopy}
              className="w-full py-1.5 px-2.5 rounded-lg bg-[var(--surface-inset)] border border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <span className="truncate">git clone mini-r1...</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Floating Circular Disc (FAB) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full vilen-pill flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] transition-transform hover:scale-105 shadow-xl"
        title="Quick lab tools & navigation"
        aria-label="Toggle lab dock"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[var(--text-primary)]" />
        ) : (
          <SlidersHorizontal className="w-5 h-5 text-[var(--accent)]" />
        )}
      </button>
    </div>
  );
};
