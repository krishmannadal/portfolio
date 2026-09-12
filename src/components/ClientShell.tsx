"use client";

import React, { createContext, useContext, useState } from "react";
import { TelemetryNav } from "@/components/TelemetryNav";
import { ResumeModal } from "@/components/ResumeModal";
import { LabDock } from "@/components/LabDock";

const ResumeContext = createContext<{ openResume: () => void }>({
  openResume: () => {},
});

export const useResume = () => useContext(ResumeContext);

/**
 * Client-only shell that manages the resume modal state via context.
 * Keeps section components eligible for server rendering while giving
 * any nested client component access to `openResume()`.
 */
export const ClientShell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const openResume = () => setIsResumeOpen(true);

  return (
    <ResumeContext.Provider value={{ openResume }}>
      {/* Floating Pill Navigation */}
      <TelemetryNav onOpenResume={openResume} />

      {children}

      {/* Floating Action Tool Dock */}
      <LabDock onOpenResume={openResume} />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </ResumeContext.Provider>
  );
};
