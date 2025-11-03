/**
 * Componente AppFeaturesShowcase - Carrossel de Funcionalidades do App
 * Autor: Capitão Henrique
 * Data: Novembro 2025
 * Versão: 1.0.0
 */

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  History, 
  Newspaper, 
  GraduationCap, 
  Trophy,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";

interface FeatureShowcaseItem {
  icon: React.ElementType;
  title: string;
  description: string;
  tagline: string;
}

const features: FeatureShowcaseItem[] = [
  {
    icon: Shield,
    title: "Verificação Inteligente com IA",
    description: "Analise qualquer notícia em segundos com nossa inteligência artificial avançada. Receba um veredito confiável sobre a veracidade do conteúdo.",
    tagline: "A revolução da verificação chegou"
  },
  {
    icon: History,
    title: "Histórico Completo de Verificações",
    description: "Acesse todas as suas verificações anteriores a qualquer momento. Mantenha um registro organizado de tudo que você já checou.",
    tagline: "Nunca perca o controle da informação"
  },
  {
    icon: Newspaper,
    title: "Feed de Notícias Verificadas",
    description: "Fique por dentro das notícias mais relevantes e verificadas do momento. Informação confiável sempre ao seu alcance.",
    tagline: "Informação que você pode confiar"
  },
  {
    icon: GraduationCap,
    title: "Conteúdo Educativo Exclusivo",
    description: "Aprenda a identificar fake news com nosso material educativo completo. Torne-se um expert em detectar desinformação.",
    tagline: "Conhecimento é poder contra fake news"
  },
  {
    icon: Trophy,
    title: "Quiz Interativo e Gamificado",
    description: "Teste seus conhecimentos com quizzes divertidos e educativos. Aprenda enquanto se diverte e acompanhe sua evolução.",
    tagline: "Aprenda brincando, proteja-se sempre"
  }
];

const impactPhrases = [
  "Algo Nunca Visto Antes",
  "O Futuro da Verificação",
  "Tecnologia que Protege",
  "Inovação Contra Fake News"
];

const subPhrases = [
  "A forma de verificar informação mudou completamente",
  "Inteligência artificial a serviço da verdade",
  "Combata a desinformação com tecnologia de ponta",
  "Sua defesa definitiva contra notícias falsas"
];

export function AppFeaturesShowcase() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Rotação de frases a cada 4 segundos
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % impactPhrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Header com Frases de Efeito Rotativas */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <TextEffect 
            key={`main-${currentPhraseIndex}`}
            per="word" 
            preset="blur"
            className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-4"
          >
            {impactPhrases[currentPhraseIndex]}
          </TextEffect>
          
          <TextEffect 
            key={`sub-${currentPhraseIndex}`}
            per="word" 
            preset="slide"
            delay={0.3}
            className="text-2xl md:text-3xl text-primary-500 font-semibold"
          >
            {subPhrases[currentPhraseIndex]}
          </TextEffect>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"
        >
          Descubra as funcionalidades revolucionárias que tornam o CheckNow único no combate à desinformação
        </motion.p>
      </div>

      {/* Carrossel Infinito */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradientes nas laterais */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 py-8">
          {/* Duplicar features para efeito infinito */}
          {[...features, ...features, ...features].map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={`feature-${index}`}
                animate={{
                  x: isPaused ? 0 : [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
                className="flex-shrink-0 w-[500px]"
              >
                <div className="group relative h-full bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-500">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-success-500 rounded-full blur-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Tagline */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                        {feature.tagline}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Arrow Icon */}
                    <div className="flex items-center gap-2 text-primary-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">Disponível no app</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Sparkle Effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">
          💡 Passe o mouse sobre os cards para pausar
        </p>
        <div className="flex items-center justify-center gap-2 text-primary-500 font-semibold text-lg">
          <Sparkles className="w-5 h-5" />
          <span>E muito mais funcionalidades sendo desenvolvidas</span>
          <Sparkles className="w-5 h-5" />
        </div>
      </motion.div>
    </div>
  );
}
