/**
 * Componente SplineRobot - Checkito Animado com Logo CheckNow
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SplineRobotProps {
  className?: string;
}

export function SplineRobot({ className = "" }: SplineRobotProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const checkitoImages = [
    "/images/checkito/checkito_tela1.png",
    "/images/checkito/checkito_tela2.png",
    "/images/checkito/checkito_tela3.png",
    "/images/checkito/checkito_tela4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % checkitoImages.length);
    }, 3500); // Troca a cada 3.5 segundos (mais lento)
    return () => clearInterval(interval);
  }, [checkitoImages.length]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* Background Glow Animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-success-500/10 to-primary-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Container Central */}
      <div className="relative z-10 flex flex-col items-center pt-20">
        {/* Logo CheckNow no topo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <Image
            src="/images/logo-com-nome-e-sem-fundo.png"
            alt="CheckNow"
            width={180}
            height={50}
            className="drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Checkito Animado com Fade */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-[400px] h-[400px]"
        >
          {checkitoImages.map((image, idx) => (
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentImage === idx ? 1 : 0,
                scale: currentImage === idx ? 1 : 0.95,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image
                src={image}
                alt="Checkito - Mascote do CheckNow"
                width={400}
                height={400}
                className="drop-shadow-2xl"
                priority={idx === 0}
                fetchPriority={idx === 0 ? "high" : "low"}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Partículas Flutuantes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-success-500 rounded-full"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
