/**
 * Componente GlassCard - Card com efeito glassmorphism
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: "sm" | "md" | "lg" | "xl";
  border?: boolean;
  gradient?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, blur = "md", border = true, gradient = false, children, ...props }, ref) => {
    const blurStyles = {
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
      xl: "backdrop-blur-xl",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl p-6",
          "bg-white/10 dark:bg-neutral-900/10",
          blurStyles[blur],
          border && "border border-white/20 dark:border-neutral-700/20",
          gradient && "bg-gradient-to-br from-white/20 to-white/5 dark:from-neutral-900/20 dark:to-neutral-900/5",
          "shadow-xl",
          "transition-all duration-300 hover:scale-105",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";
