/**
 * Componente HoverCard3D - Card com efeito 3D ao hover
 * Inspirado em Aceternity UI e 21st.dev
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverCard3DProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const HoverCard3D: React.FC<HoverCard3DProps> = ({
  children,
  className,
  containerClassName,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateXValue = (mouseY / (rect.height / 2)) * -10;
    const rotateYValue = (mouseX / (rect.width / 2)) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className={cn("perspective-1000", containerClassName)}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative rounded-2xl p-8",
          "bg-white dark:bg-neutral-800",
          "border border-neutral-200 dark:border-neutral-700",
          "shadow-xl hover:shadow-2xl",
          "transition-shadow duration-300",
          className
        )}
      >
        <div style={{ transform: "translateZ(50px)" }}>{children}</div>
      </motion.div>
    </div>
  );
};
