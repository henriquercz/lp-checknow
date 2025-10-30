/**
 * Componente SplineRobot - Checkito Interativo Animado
 * Autor: Capitão Henrique
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/checkito/checkito_tela1.png",
    "/images/checkito/checkito_tela2.png",
    "/images/checkito/checkito_tela3.png",
    "/images/checkito/checkito_tela4.png",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("checkito-container")?.getBoundingClientRect();
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="checkito-container" className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* Background Glow */}
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

      {/* Checkito Animado */}
      <motion.div
        className="relative z-10"
        animate={{
          rotateY: mousePosition.x,
          rotateX: -mousePosition.y,
          scale: [1, 1.05, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={images[currentImage]}
            alt="Checkito - Mascote do CheckNow"
            width={500}
            height={500}
            className="drop-shadow-2xl"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-primary-500 rounded-full"
          style={{
            top: `${20 + i * 10}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
