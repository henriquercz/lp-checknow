/**
 * Componente Card Reutilizável
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: "default" | "outline" | "glass";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700",
      outline: "bg-transparent border-2 border-neutral-200 dark:border-neutral-700",
      glass: "bg-white/30 dark:bg-neutral-900/30 backdrop-blur-md border border-white/20 dark:border-neutral-700/20",
    };

    const hoverStyles = hover
      ? "hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-6 shadow-sm",
          variants[variant],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
