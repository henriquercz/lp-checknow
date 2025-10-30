/**
 * Componente Container
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "lg", className, ...props }, ref) => {
    const sizes = {
      sm: "max-w-2xl",
      md: "max-w-4xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "w-full",
    };

    return (
      <div
        ref={ref}
        className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
