/**
 * Componente VisionMissionValues - Seção de Visão, Missão e Valores
 * Design moderno com animações profissionais
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Sparkles, Lightbulb, Users, Shield } from "lucide-react";
import { HoverCard3D } from "./ui/hover-card-3d";
import { cn } from "@/lib/utils";

interface VMVItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  particles: number[];
}

const vmvData: VMVItem[] = [
  {
    id: "vision",
    title: "Visão",
    description: "Ser a plataforma mais confiável e inovadora no combate à desinformação no Brasil e na América Latina, capacitando milhões de pessoas a distinguir fatos de ficção em segundos.",
    icon: <Eye className="w-8 h-8" />,
    gradient: "from-primary-500 to-primary-600",
    particles: [0, 1, 2, 3, 4],
  },
  {
    id: "mission",
    title: "Missão",
    description: "Democratizar o acesso à verificação de notícias através de tecnologia de ponta, inteligência artificial e uma comunidade engajada, promovendo transparência e educação digital para todos.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-success-500 to-success-600",
    particles: [0, 1, 2, 3, 4],
  },
];

const valuesData = [
  {
    id: "innovation",
    title: "Inovação",
    description: "Buscamos constantemente novas tecnologias e metodologias",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "text-primary-500",
  },
  {
    id: "transparency",
    title: "Transparência",
    description: "Operamos com total clareza em nossos processos e resultados",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-success-500",
  },
  {
    id: "community",
    title: "Comunidade",
    description: "Acreditamos no poder coletivo para combater a desinformação",
    icon: <Users className="w-6 h-6" />,
    color: "text-primary-600",
  },
  {
    id: "trust",
    title: "Confiança",
    description: "Construímos relações baseadas em credibilidade e ética",
    icon: <Shield className="w-6 h-6" />,
    color: "text-success-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const VisionMissionValues: React.FC = () => {
  return (
    <div className="relative">
      {/* Gradiente de fundo animado */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-success-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Título Principal */}
      <motion.div
        className="text-center mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-success-500/10 border border-primary-500/20 text-sm font-semibold text-primary-600 dark:text-primary-400">
            Nossos Princípios
          </span>
        </motion.div>
        
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Construindo o{" "}
          <span className="bg-gradient-to-r from-primary-500 to-success-500 bg-clip-text text-transparent">
            Futuro da Informação
          </span>
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"
        >
          Nossa missão, visão e valores guiam cada decisão que tomamos
        </motion.p>
      </motion.div>

      {/* Visão e Missão - Cards 3D Grandes */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {vmvData.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <HoverCard3D
              className="relative overflow-visible group"
              containerClassName="h-full"
            >
              {/* Película de gradiente por cima */}
              <div className="absolute -inset-4 overflow-visible pointer-events-none z-10">
                <div className={cn(
                  "absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br",
                  item.gradient
                )} />
                <div className={cn(
                  "absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-tl",
                  item.gradient
                )} />
              </div>

              {/* Partículas flutuantes por cima */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {item.particles.map((_, i) => (
                  <motion.div
                    key={i}
                    className={cn(
                      "absolute w-2 h-2 rounded-full bg-gradient-to-br",
                      item.gradient,
                      "opacity-20"
                    )}
                    style={{
                      top: `${15 + (i * 18)}%`,
                      right: `${5 + (i * 15)}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 15, 0],
                      opacity: [0.1, 0.4, 0.1],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.8,
                    }}
                  />
                ))}
              </div>

              {/* Conteúdo do card */}
              <div className="relative z-30">
                {/* Ícone animado */}
                <motion.div
                  className={cn(
                    "inline-flex p-5 rounded-3xl bg-gradient-to-br mb-8",
                    item.gradient,
                    "text-white shadow-2xl ring-4 ring-white/20 dark:ring-neutral-900/20"
                  )}
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {item.icon}
                </motion.div>

                {/* Título com gradiente */}
                <h3 className={cn(
                  "text-4xl font-bold mb-6 bg-gradient-to-br bg-clip-text text-transparent",
                  item.gradient
                )}>
                  {item.title}
                </h3>

                {/* Descrição */}
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </HoverCard3D>
          </motion.div>
        ))}
      </motion.div>

      {/* Valores - Grid de Cards Menores */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12"
        >
          Nossos{" "}
          <span className="bg-gradient-to-r from-primary-500 to-success-500 bg-clip-text text-transparent">
            Valores
          </span>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((value) => (
            <motion.div
              key={value.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative group h-full">
                {/* Card com borda animada */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/20 to-success-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full p-6 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Ícone com animação de flutuação */}
                  <motion.div
                    className={cn(
                      "inline-flex p-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 mb-4",
                      value.color
                    )}
                    animate={floatingAnimation}
                  >
                    {value.icon}
                  </motion.div>

                  {/* Título */}
                  <h4 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                    {value.title}
                  </h4>

                  {/* Descrição */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {value.description}
                  </p>

                  {/* Brilho decorativo */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-br from-primary-400 to-success-400 animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
