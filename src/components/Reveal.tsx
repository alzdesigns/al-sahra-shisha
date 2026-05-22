"use client";

import { useRef, type ReactNode, type ElementType } from "react";
import { useReveal } from "@/hooks/use-reveal";

type Variant = "up" | "left" | "scale";

export function Reveal({
  children, variant = "up", delay = 0, className = "", as: Tag = "div",
}: {
  children: ReactNode; variant?: Variant; delay?: number; className?: string;
  as?: ElementType;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Component = Tag as any;
  return (
    <Component
      ref={ref as any}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </Component>
  );
}

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} className={`transition-transform duration-300 ease-out ${className}`}>
      {children}
    </div>
  );
}
