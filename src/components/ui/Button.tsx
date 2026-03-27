import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-[var(--red)] hover:bg-[var(--red-dark)] text-white border-transparent",
  outline:
    "bg-transparent hover:border-[var(--gold)] hover:text-[var(--gold)] text-[var(--text-muted)] border-[var(--gold-light)]",
  ghost:
    "bg-transparent hover:bg-[var(--cream)] text-[var(--text)] border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        border tracking-widest uppercase font-sans
        transition-all duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
