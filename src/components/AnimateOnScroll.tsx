"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number; // stagger delay in ms
  once?: boolean; // only animate once
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = "",
  delay = 0,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.classList.add("anim-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("anim-visible");
          }, delay);

          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          el.classList.remove("anim-visible");
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once]);

  return (
    <div ref={ref} className={`anim-initial ${className}`}>
      {children}
    </div>
  );
};

// Stagger wrapper for grids of items
interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
  once?: boolean;
}

export const StaggerChildren: React.FC<StaggerChildrenProps> = ({
  children,
  className = "",
  staggerMs = 80,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      container.querySelectorAll(".stagger-item").forEach((el) => {
        (el as HTMLElement).classList.add("anim-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = container.querySelectorAll(".stagger-item");
          items.forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).classList.add("anim-visible");
            }, i * staggerMs);
          });
          if (once) observer.unobserve(container);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerMs, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
