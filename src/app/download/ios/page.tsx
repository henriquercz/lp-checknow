/**
 * Página de Download iOS - Guia de Instalação via Expo Go
 * Data: Novembro 2025
 * Versão: 1.0.0
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, ExternalLink, ArrowLeft, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Imagens do guia de instalação iOS (proporção 1:1)
const tutorialSteps = [
  {
    id: 1,
    image: "/images/guide-to-install/passo00.jpg",
    alt: "Passo 0 - Preparação",
  },
  {
    id: 2,
    image: "/images/guide-to-install/passo01.jpg",
    alt: "Passo 1 - Baixe o Expo Go",
  },
  {
    id: 3,
    image: "/images/guide-to-install/passo02.jpg",
    alt: "Passo 2 - Instale o Expo Go",
  },
  {
    id: 4,
    image: "/images/guide-to-install/passo03.jpg",
    alt: "Passo 3 - Abra o Instagram",
  },
  {
    id: 5,
    image: "/images/guide-to-install/passo04.jpg",
    alt: "Passo 4 - Acesse a bio",
  },
  {
    id: 6,
    image: "/images/guide-to-install/passo05.jpg",
    alt: "Passo 5 - Copie o link",
  },
  {
    id: 7,
    image: "/images/guide-to-install/passo06.jpg",
    alt: "Passo 6 - Abra o Expo Go",
  },
  {
    id: 8,
    image: "/images/guide-to-install/passo07.jpg",
    alt: "Passo 7 - Cole o link",
  },
  {
    id: 9,
    image: "/images/guide-to-install/passo08.jpg",
    alt: "Passo 8 - Pronto!",
  },
];

export default function IOSDownloadPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tutorialSteps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tutorialSteps.length) % tutorialSteps.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.push("/")}
          className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para o início
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-3xl bg-gradient-to-br from-neutral-800 to-black shadow-xl">
            {/* Apple Logo SVG */}
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Instalação iOS
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-4">
            Siga o passo a passo visual para instalar o CheckNow no seu iPhone
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Disponível via Expo Go
            </span>
          </div>
        </motion.div>

        {/* Carrossel de Imagens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {/* Carrossel Container */}
          <div className="relative bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl p-8 overflow-hidden">
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-success-500/5 pointer-events-none" />

            {/* Image Container - Proporção 1:1 (Quadrado) */}
            <div className="relative mx-auto" style={{ maxWidth: "500px" }}>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-700 shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    {/* Imagem real do guia de instalação */}
                    <Image
                      src={tutorialSteps[currentSlide].image}
                      alt={tutorialSteps[currentSlide].alt}
                      fill
                      className="object-cover"
                      priority={currentSlide === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {tutorialSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-primary-500"
                        : "w-2 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
                    }`}
                  />
                ))}
              </div>

              {/* Step Counter */}
              <div className="text-center mt-4">
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Passo {currentSlide + 1} de {tutorialSteps.length}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white text-center mb-8">
            Como usar o CheckNow no iOS
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Step 1: Expo Go */}
            <div className="relative group">
              <div className="h-full p-6 rounded-2xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all shadow-lg hover:shadow-xl">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-700 flex items-center justify-center flex-shrink-0 overflow-hidden border border-neutral-200 dark:border-neutral-600">
                    {/* Adicione a imagem do Expo Go aqui: /images/expo-go-logo.png */}
                    <Image
                      src="/images/expo-go-logo.png"
                      alt="Expo Go"
                      width={48}
                      height={48}
                      className="object-contain"
                      onError={(e) => {
                        // Fallback para ícone SVG se imagem não existir
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback SVG (App Store icon) */}
                    <svg className="w-8 h-8 text-primary-500 hidden" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                      Baixe o Expo Go
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      Primeiro, instale o aplicativo Expo Go gratuitamente na App Store
                    </p>
                  </div>
                </div>

                <a
                  href="https://apps.apple.com/app/expo-go/id982107779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl w-full justify-center"
                >
                  {/* App Store Logo SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Baixar na App Store
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Step 2: Instagram Bio */}
            <div className="relative group">
              <div className="h-full p-6 rounded-2xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 hover:border-success-500 dark:hover:border-success-500 transition-all shadow-lg hover:shadow-xl">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-success-500 to-success-600 shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                      Acesse nossa bio no Instagram
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      Pegue o link do CheckNow na bio do nosso perfil oficial
                    </p>
                  </div>
                </div>

                <a
                  href="https://instagram.com/checknow.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl w-full justify-center"
                >
                  <Instagram className="w-5 h-5" />
                  Ir para o Instagram
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800"
        >
          <div className="flex gap-4">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-neutral-900 dark:text-white mb-2">
                Por que usar o Expo Go?
              </h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Estamos trabalhando na versão nativa do CheckNow para iOS. Enquanto isso, você 
                pode usar o aplicativo completo através do Expo Go, uma plataforma confiável 
                usada por milhões de desenvolvedores e usuários.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
