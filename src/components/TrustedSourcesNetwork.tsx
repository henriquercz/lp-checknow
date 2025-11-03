/**
 * Componente TrustedSourcesNetwork - Rede de Fontes Confiáveis
 * Autor: Capitão Henrique
 * Data: Novembro 2025
 * Versão: 3.0.0 - Linhas Curvas e Animadas
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface TrustedSource {
  name: string;
  logo: string;
  angle: number;
}

const trustedSources: TrustedSource[] = [
  { name: "G1", logo: "/images/fontes/g1.png", angle: 0 },
  { name: "UOL", logo: "/images/fontes/uol.png", angle: 36 },
  { name: "Estadão", logo: "/images/fontes/estadao.png", angle: 72 },
  { name: "Veja", logo: "/images/fontes/veja.png", angle: 108 },
  { name: "Terra", logo: "/images/fontes/terra-brasil.png", angle: 144 },
  { name: "CNN", logo: "/images/fontes/cnn.png", angle: 180 },
  { name: "BBC", logo: "/images/fontes/bbc.png", angle: 216 },
  { name: "EBC", logo: "/images/fontes/ebc.png", angle: 252 },
  { name: "Carta Capital", logo: "/images/fontes/cartacapital.png", angle: 288 },
  { name: "Metrópoles", logo: "/images/fontes/portal-metropoles.png", angle: 324 },
];

const radius = 220;
const centerX = 300;
const centerY = 300;

export function TrustedSourcesNetwork() {
  return (
    <div className="relative flex flex-col items-center w-full py-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-4">
          <Sparkles className="w-4 h-4 text-primary-500" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            Fontes Verificadas
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-3">
          Conectado às Melhores Fontes
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          O CheckNow cruza informações com as fontes de notícias mais confiáveis do Brasil
        </p>
      </motion.div>

      {/* Network Container */}
      <div className="relative w-full max-w-[600px] h-[600px] flex items-center justify-center">
        {/* SVG with curved lines and animations */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600" style={{ overflow: "visible" }}>
          <defs>
            {/* Gradiente animado para as linhas */}
            <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0">
                <animate
                  attributeName="offset"
                  values="-2;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="1">
                <animate
                  attributeName="offset"
                  values="-1.5;1.5"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="0%" stopColor="#22C55E" stopOpacity="1">
                <animate
                  attributeName="offset"
                  values="-1;2"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0">
                <animate
                  attributeName="offset"
                  values="-0.5;2.5"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Filtro de blur para efeito suave */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Linhas curvas conectando fontes ao centro */}
          {trustedSources.map((source, index) => {
            const angleRad = ((source.angle - 90) * Math.PI) / 180;
            const x = centerX + radius * Math.cos(angleRad);
            const y = centerY + radius * Math.sin(angleRad);

            // Criar curva bezier suave
            const controlPointDistance = radius * 0.4;
            const controlX = centerX + controlPointDistance * Math.cos(angleRad);
            const controlY = centerY + controlPointDistance * Math.sin(angleRad);

            const pathData = `M ${centerX} ${centerY} Q ${controlX} ${controlY} ${x} ${y}`;

            return (
              <g key={source.name}>
                {/* Linha base */}
                <motion.path
                  d={pathData}
                  stroke="#E5E5E5"
                  strokeWidth="2"
                  fill="none"
                  className="dark:stroke-neutral-700"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                />
                
                {/* Linha animada com gradiente */}
                <motion.path
                  d={pathData}
                  stroke="url(#animatedGradient)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                />
              </g>
            );
          })}
        </svg>

        {/* Source Badges em círculo */}
        {trustedSources.map((source, index) => {
          const angleRad = ((source.angle - 90) * Math.PI) / 180;
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          return (
            <motion.div
              key={source.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.3,
                type: "spring",
                stiffness: 200,
              }}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
                
                {/* Badge */}
                <div className="relative w-24 h-24 rounded-full bg-white dark:bg-neutral-800 border-4 border-primary-500 shadow-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={source.logo}
                    alt={source.name}
                    width={80}
                    height={80}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 px-4 py-2 rounded-lg shadow-xl border-2 border-primary-500">
                    {source.name}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Central CheckNow Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 200,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          {/* Bolas azuis pulsantes (destaque) */}
          <motion.div
            className="absolute inset-0 -m-20 rounded-full bg-primary-500/20"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 -m-16 rounded-full bg-primary-500/30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.15, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute inset-0 -m-12 rounded-full bg-success-500/20"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.35, 0.1, 0.35],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Anéis pulsantes */}
          <motion.div
            className="absolute inset-0 -m-10 rounded-full border-3 border-primary-500/50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 -m-8 rounded-full border-3 border-success-500/50"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
          />

          {/* Logo Circle */}
          <motion.div
            className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-success-500 shadow-2xl flex items-center justify-center border-4 border-white dark:border-neutral-900"
            animate={{
              boxShadow: [
                "0 20px 60px rgba(59, 130, 246, 0.4)",
                "0 20px 80px rgba(34, 197, 94, 0.5)",
                "0 20px 60px rgba(59, 130, 246, 0.4)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/logo-sem-fundo.png"
              alt="CheckNow"
              width={100}
              height={100}
              className="w-24 h-24 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Bottom badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 border-3 border-primary-500 rounded-full px-5 py-2 shadow-xl">
            <span className="text-base font-bold bg-gradient-to-r from-primary-500 to-success-500 bg-clip-text text-transparent">
              CheckNow
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-center mt-8"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-50 to-success-50 dark:from-primary-900/20 dark:to-success-900/20 border-2 border-primary-300 dark:border-primary-700">
          <Sparkles className="w-5 h-5 text-primary-500" />
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
            Rede de Verificação Inteligente com 10 Fontes
          </span>
        </div>
      </motion.div>
    </div>
  );
}
