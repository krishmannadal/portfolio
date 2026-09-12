"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, FileText, ArrowUpRight, Menu, X, Cpu } from "lucide-react";
import { GithubIcon } from "./Icons";

interface TelemetryNavProps {
  onOpenResume: () => void;
}

export const TelemetryNav: React.FC<TelemetryNavProps> = ({ onOpenResume }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Restore theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
      requestAnimationFrame(() => {
        setTheme(saved);
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  };

  const navLinks = [
    { label: "Flagship", href: "#flagship" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Instruments", href: "#instruments" },
    { label: "Systems", href: "#systems" },
    { label: "Rigor", href: "#capabilities" },
    { label: "Notebook", href: "#notebook" },
    { label: "Ask Lab", href: "#ask-lab" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Main Floating Nav Pill */}
        <nav
          aria-label="Primary navigation"
          className={`pointer-events-auto flex-1 h-14 sm:h-16 px-4 sm:px-6 rounded-full vilen-pill flex items-center justify-between transition-all duration-300 ${
            scrolled ? "shadow-2xl shadow-black/30" : ""
          }`}
        >
          {/* Brand & Subtitle */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors shadow-sm">
              <Cpu className="w-4 h-4 text-[var(--accent)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                Krishna Kumar Mandal
              </span>
              <span className="eyebrow-cmd text-[10px] hidden sm:inline-flex">
                ai/ml engineer • sfit 2024–2028
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <div className="hidden xl:flex items-center space-x-6 text-xs font-semibold text-[var(--text-muted)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[var(--text-primary)] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2.5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 sm:py-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--accent)] text-xs font-semibold text-[var(--text-primary)] transition-all hover:bg-[var(--accent-wash)]"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Resume</span>
            </button>

            <a
              href="https://github.com/krishmannadal"
              target="_blank"
              rel="noopener noreferrer me"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 sm:py-2 rounded-full bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-[var(--accent)] text-xs font-semibold text-[var(--text-primary)] transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-subtle)]" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* The Vilendesign Satellite Companion Disc */}
        <div className="pointer-events-auto shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full vilen-pill flex items-center justify-center transition-transform hover:scale-105">
          <button
            onClick={toggleTheme}
            className="w-full h-full rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors relative"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-amber)] transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent)] transition-transform hover:-rotate-12" />
            )}
            <span className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto xl:hidden max-w-7xl mx-auto mt-2 p-4 rounded-2xl vilen-card space-y-2 animate-in slide-in-from-bottom-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-medium text-[var(--text-muted)] hover:text-[var(--accent)] py-2 border-b border-[var(--border)]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex justify-between items-center text-xs font-[family-name:var(--font-code)] text-[var(--text-subtle)]">
            <span>SFIT MUMBAI • 2024–2028</span>
            <span className="text-[var(--accent)]">ONLINE</span>
          </div>
        </div>
      )}
    </header>
  );
};
