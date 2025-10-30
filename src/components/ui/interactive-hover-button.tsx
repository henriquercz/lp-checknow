/**
 * Componente InteractiveHoverButton - Botão com efeitos hover interativos
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function InteractiveHoverButton({
  text = "Button",
  children,
  className,
  onClick,
}: InteractiveHoverButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-semibold text-white transition-all duration-300",
        "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700",
        "shadow-lg hover:shadow-2xl hover:shadow-primary-500/50",
        "transform hover:scale-105 active:scale-95",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Efeito de brilho animado */}
      <motion.span
        className="absolute inset-0 flex h-full w-full"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <span className="relative h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.span>

      {/* Partículas de fundo */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        {[
          { top: "20%", left: "30%" },
          { top: "60%", left: "70%" },
          { top: "40%", left: "50%" },
        ].map((position, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/40"
            style={{
              top: position.top,
              left: position.left,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </span>

      {/* Conteúdo do botão */}
      <span className="relative z-10 flex items-center gap-2">
        {children || text}
      </span>

      {/* Borda animada */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-white/20"
        whileHover={{ scale: 1.1, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
