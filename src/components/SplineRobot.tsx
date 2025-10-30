/**
 * Componente SplineRobot - Robô 3D Interativo Checkito
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 * 
 * INSTRUÇÕES PARA CUSTOMIZAR NO SPLINE:
 * 1. Acesse: https://spline.design/
 * 2. Crie um novo projeto
 * 3. Adicione um robô 3D (library > characters > robot)
 * 4. Customize:
 *    - Corpo: mais gordo e baixinho (scale Y: 0.7, scale X/Z: 1.3)
 *    - Cor primária: #2563EB (azul CheckNow)
 *    - Cor secundária: #22C55E (verde CheckNow)
 *    - Adicione animação: "Look at cursor" no script
 * 5. Export > Get embed code
 * 6. Copie a URL do scene.splinecode
 * 7. Cole na variável CHECKITO_SCENE_URL abaixo
 */

"use client";

import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

interface SplineRobotProps {
  className?: string;
}

// URL da cena 3D do robô do exemplo do 21st.dev
// Este robô é interativo e segue o mouse
const CHECKITO_SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function SplineRobot({ className = "" }: SplineRobotProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-success-500/10 to-primary-500/20 rounded-full blur-3xl -z-10"
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

      {/* Robô 3D Spline */}
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        }
      >
        <Spline
          scene={CHECKITO_SCENE_URL}
          style={{ width: "100%", height: "100%" }}
        />
      </Suspense>
    </div>
  );
}
