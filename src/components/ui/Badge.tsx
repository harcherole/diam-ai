import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "navy" | "accent" | "cyan" | "light";
}

const toneStyles: Record<NonNullable<BadgeProps["tone"]>, string> = {
  navy: "bg-navy-900 text-white",
  accent: "bg-accent/10 text-accent",
  cyan: "bg-cyan/10 text-cyan",
  light: "bg-surface-100 text-navy-700",
};

export default function Badge({ children, tone = "accent" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}
