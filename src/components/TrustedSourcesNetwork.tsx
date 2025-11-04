/**
 * Componente TrustedSourcesNetwork - Rede de Fontes Confiáveis
 * Autor: Capitão Henrique
 * Data: Novembro 2025
 * Versão: 4.0.0 - Alinhamento Perfeito
 */

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

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

export function TrustedSourcesNetwork() {
  const [hoveredSource, setHoveredSource] = useState<string | null>(null);
  
  const radius = 220;
  const centerSize = 160;
  const sourceSize = 100;

  return (
    <div className="relative flex flex-col items-center w-full py-16">
      {/* Title */}
      <div className="mb-12 text-center z-10">
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
      </div>

      {/* Network Container */}
      <div className="relative w-full max-w-[700px] h-[700px] flex items-center justify-center">
        
        {/* SVG Layer for Lines */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 700 700"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Gradiente animado */}
            <linearGradient id="animatedLineGradient">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2">
                <animate
                  attributeName="offset"
                  values="-2;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.8">
                <animate
                  attributeName="offset"
                  values="-1.5;1.5"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#22C55E" stopOpacity="1">
                <animate
                  attributeName="offset"
                  values="-1;2"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="#22C55E" stopOpacity="0.8">
                <animate
                  attributeName="offset"
                  values="-0.5;2.5"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2">
                <animate
                  attributeName="offset"
                  values="0;3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {trustedSources.map((source) => {
            const angleRad = ((source.angle - 90) * Math.PI) / 180;
            const x = 350 + radius * Math.cos(angleRad);
            const y = 350 + radius * Math.sin(angleRad);
            
            const controlPointDistance = radius * 0.5;
            const controlX = 350 + controlPointDistance * Math.cos(angleRad);
            const controlY = 350 + controlPointDistance * Math.sin(angleRad);
            
            const pathData = `M 350 350 Q ${controlX} ${controlY} ${x} ${y}`;

            return (
              <g key={source.name}>
                {/* Linha base */}
                <path
                  d={pathData}
                  stroke="#E5E5E5"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                  className="dark:stroke-neutral-700"
                />
                {/* Linha animada com gradiente */}
                <path
                  d={pathData}
                  stroke="url(#animatedLineGradient)"
                  strokeWidth={hoveredSource === source.name ? "4" : "3"}
                  fill="none"
                  filter={hoveredSource === source.name ? "url(#glow)" : "none"}
                  style={{
                    transition: 'all 0.3s ease',
                    opacity: hoveredSource === source.name ? 1 : 0.7
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Source Badges */}
        {trustedSources.map((source) => {
          const angleRad = ((source.angle - 90) * Math.PI) / 180;
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          return (
            <div
              key={source.name}
              className="absolute transition-all duration-300 ease-out"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%) scale(${hoveredSource === source.name ? 1.15 : 1})`,
                zIndex: hoveredSource === source.name ? 30 : 10,
              }}
              onMouseEnter={() => setHoveredSource(source.name)}
              onMouseLeave={() => setHoveredSource(null)}
            >
              <div className="relative group cursor-pointer">
                {/* Glow Effect */}
                {hoveredSource === source.name && (
                  <div className="absolute inset-0 rounded-full bg-primary-500/40 blur-2xl scale-150 animate-pulse" />
                )}
                
                {/* Badge Container */}
                <div 
                  className="relative rounded-full bg-white dark:bg-neutral-800 border-4 shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-300"
                  style={{
                    width: `${sourceSize}px`,
                    height: `${sourceSize}px`,
                    borderColor: hoveredSource === source.name ? '#3B82F6' : '#93C5FD',
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center p-3">
                    <Image
                      src={source.logo}
                      alt={source.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredSource === source.name && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none z-50 animate-fadeIn"
                    style={{
                      top: y > 0 ? '-60px' : 'calc(100% + 12px)'
                    }}
                  >
                    <span className="text-sm font-semibold text-white dark:text-neutral-900 bg-primary-600 dark:bg-primary-400 px-4 py-2 rounded-lg shadow-xl border-2 border-primary-400 dark:border-primary-600">
                      {source.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Central CheckNow Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          
          {/* Pulsating Rings (Bolas Azuis) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="absolute rounded-full bg-primary-500/20 animate-ping-slow"
              style={{ width: `${centerSize + 100}px`, height: `${centerSize + 100}px` }}
            />
            <div 
              className="absolute rounded-full bg-primary-500/30 animate-ping-slower"
              style={{ width: `${centerSize + 70}px`, height: `${centerSize + 70}px` }}
            />
            <div 
              className="absolute rounded-full bg-success-500/20 animate-ping-slowest"
              style={{ width: `${centerSize + 40}px`, height: `${centerSize + 40}px` }}
            />
          </div>

          {/* Rotating Border */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="absolute rounded-full border-4 border-primary-500/30 animate-spin-slow"
              style={{ width: `${centerSize + 50}px`, height: `${centerSize + 50}px` }}
            />
          </div>

          {/* Main Circle */}
          <div
            className="relative rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-success-500 shadow-2xl flex items-center justify-center border-4 border-white dark:border-neutral-900 animate-pulse-glow"
            style={{
              width: `${centerSize}px`,
              height: `${centerSize}px`,
            }}
          >
            <Image
              src="/images/logo-sem-fundo.png"
              alt="CheckNow"
              width={120}
              height={120}
              className="w-28 h-28 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Bottom Badge */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 border-3 border-primary-500 rounded-full px-6 py-2 shadow-xl">
            <span className="text-base font-bold bg-gradient-to-r from-primary-500 to-success-500 bg-clip-text text-transparent">
              CheckNow
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="text-center mt-12 z-10">
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary-50 to-success-50 dark:from-primary-900/20 dark:to-success-900/20 border-2 border-primary-300 dark:border-primary-700">
          <Sparkles className="w-5 h-5 text-primary-500" />
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
            Rede de Verificação Inteligente com 10 Fontes
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.05;
          }
        }
        
        @keyframes ping-slower {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
        }
        
        @keyframes ping-slowest {
          0%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.15;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 60px rgba(59, 130, 246, 0.6), 0 0 100px rgba(34, 197, 94, 0.5);
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 3s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.5s;
        }
        
        .animate-ping-slowest {
          animation: ping-slowest 3s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
