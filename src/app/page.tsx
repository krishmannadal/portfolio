import React from "react";
import { ClientShell } from "@/components/ClientShell";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { HeroConsole } from "@/components/HeroConsole";
import { MiniR1Dossier } from "@/components/MiniR1Dossier";
import { ResearchLoop } from "@/components/ResearchLoop";
import { ResearchInstruments } from "@/components/ResearchInstruments";
import { MLSystemsSection } from "@/components/MLSystemsSection";
import { CapabilityMatrix } from "@/components/CapabilityMatrix";
import { ResearchNotebook } from "@/components/ResearchNotebook";
import { AskTheLab } from "@/components/AskTheLab";
import { AboutTrajectory } from "@/components/AboutTrajectory";
import { FooterContact } from "@/components/FooterContact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)] font-[family-name:var(--font-display)] transition-colors duration-300">
      <ClientShell>
        <main id="main-content">
          {/* 01 // Research Console Hero with 3D Lens / Medallion */}
          <HeroConsole />

          {/* 02 // Flagship Experimental Dossier: Mini-R1 */}
          <AnimateOnScroll>
            <MiniR1Dossier />
          </AnimateOnScroll>

          {/* 03 // Experimental Philosophy & 7-Step Scientific Loop */}
          <AnimateOnScroll>
            <ResearchLoop />
          </AnimateOnScroll>

          {/* 04 // Research Instruments: Nullius DAG, merchant-ring, GSoC EXXA2 */}
          <AnimateOnScroll>
            <ResearchInstruments />
          </AnimateOnScroll>

          {/* 05 // ML Systems & Platforms: PrivateTune, Wecode, Time2Eat */}
          <AnimateOnScroll>
            <MLSystemsSection />
          </AnimateOnScroll>

          {/* 06 // "What I Actually Build" (Capability Matrix) */}
          <AnimateOnScroll>
            <CapabilityMatrix />
          </AnimateOnScroll>

          {/* 07 // Open Research Notebook */}
          <AnimateOnScroll>
            <ResearchNotebook />
          </AnimateOnScroll>

          {/* 08 // Grounded "Ask the Lab" Explorer */}
          <AnimateOnScroll>
            <AskTheLab />
          </AnimateOnScroll>

          {/* 09 // Deliberate Progression & Trajectory */}
          <AnimateOnScroll>
            <AboutTrajectory />
          </AnimateOnScroll>
        </main>

        {/* Communications, Local Reproduction Terminal & Footer */}
        <AnimateOnScroll>
          <FooterContact />
        </AnimateOnScroll>
      </ClientShell>
    </div>
  );
}
