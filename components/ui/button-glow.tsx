"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonGlowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
  className?: string;
}

const ButtonGlow = React.forwardRef<HTMLButtonElement, ButtonGlowProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    const variantClasses = {
      primary: "bg-primary text-primary-foreground hover:brightness-110",
      secondary: "bg-secondary text-secondary-foreground hover:brightness-110",
      accent: "bg-accent text-accent-foreground hover:brightness-110",
    };

    const sizeClasses = {
      sm: "h-9 px-3 text-sm",
      default: "h-11 px-6",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className={cn(
          "absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          variant === "primary" ? "glow-box" : ""
        )} />
      </motion.button>
    );
  }
);

ButtonGlow.displayName = "ButtonGlow";

export { ButtonGlow };