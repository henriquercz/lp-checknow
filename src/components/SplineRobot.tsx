/**
 * Componente SplineRobot - Robô 3D animado para Hero Section
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle } from "lucide-react";

interface SplineRobotProps {
  className?: string;
}

export function SplineRobot({ className = "" }: SplineRobotProps) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* Animated Robot Placeholder com CheckNow Logo */}
      <div className="relative w-full max-w-lg aspect-square">
        {/* Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-success-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Central Logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="relative">
            <img
              src="/images/logo-sem-fundo.png"
              alt="CheckNow Robot"
              className="w-64 h-64 object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Orbiting Icons */}
        {[
          { icon: Shield, angle: 0, color: "text-primary-500" },
          { icon: Zap, angle: 120, color: "text-success-500" },
          { icon: CheckCircle, angle: 240, color: "text-primary-600" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2"
            animate={{
              rotate: [item.angle, item.angle + 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className={`w-16 h-16 rounded-full bg-white dark:bg-neutral-900 shadow-xl flex items-center justify-center ${item.color}`}
              style={{
                transform: "translate(-50%, -50%) translateY(-150px)",
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <item.icon size={32} />
            </motion.div>
          </motion.div>
        ))}

        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/50 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
}
