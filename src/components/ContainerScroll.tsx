/**
 * Componente ContainerScroll - Scroll Animation com telas de dispositivo
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children?: React.ReactNode;
}

export function ContainerScroll({ titleComponent, children }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <div
      ref={containerRef}
      className="relative py-4 overflow-hidden"
    >
      <div className="relative z-20 mb-6">
        {titleComponent}
      </div>

      <motion.div
        style={{
          scale,
          rotateX: rotate,
          translateY,
          opacity,
        }}
        className="relative mx-auto max-w-xs perspective-1000"
      >
        <div className="relative">
          {/* Moldura do Celular - Proporção 9:16 */}
          <div className="relative bg-neutral-900 rounded-[2.5rem] p-3 shadow-2xl mx-auto" style={{ width: "325px" }}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-900 rounded-b-2xl z-20" />
            
            {/* Tela do Dispositivo - Proporção 9:16 */}
            <div className="relative bg-white dark:bg-neutral-800 rounded-[2rem] overflow-hidden shadow-inner aspect-[9/19.5]">
              {/* Barra de Status */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/5 to-transparent z-10 flex items-center justify-between px-4 pt-2">
                <span className="text-[10px] font-semibold text-neutral-900 dark:text-white">9:41</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                  </svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                  </svg>
                </div>
              </div>

              {/* Conteúdo Scrollável */}
              <div className="relative pt-8" style={{ height: "100%" }}>
                {children}
              </div>
            </div>

            {/* Botão Home */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-neutral-700 rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
