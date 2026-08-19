import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  to?: string;
  external?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-navy-900 focus-visible:ring-accent",
  secondary:
    "bg-white text-navy-900 border border-navy-900/15 hover:border-accent hover:text-accent focus-visible:ring-accent",
  ghost:
    "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10 focus-visible:ring-white",
};

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", withArrow = false, className = "", to, external, onClick } = props;
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight size={16} strokeWidth={2.25} />}
    </>
  );

  if (to) {
    if (external) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
