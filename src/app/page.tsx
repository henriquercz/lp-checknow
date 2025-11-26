/**
 * Página Inicial da Landing Page CheckNow
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.5.0
 */

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Download, Shield, Zap, Sparkles, Instagram, Brain, Lock, TrendingUp, Clock, ArrowRight, CheckCircle, AlertTriangle, Link, FileSearch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { TubelightNavbar } from "@/components/TubelightNavbar";
import { AnimatedWords } from "@/components/AnimatedWords";
import { AnimatedUnderlineText } from "@/components/ui/animated-underline-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { PricingCard } from "@/components/PricingCard";
import { FAQItem } from "@/components/FAQItem";
import { StructuredData } from "@/components/StructuredData";
import { FEATURES, STEPS, PLANS, FAQ } from "@/lib/constants";
import { DownloadModal } from "@/components/DownloadModal";
import NextImage from "next/image";

// Lazy load componentes pesados
const VisionMissionValues = dynamic(() => import("@/components/VisionMissionValues").then(mod => ({ default: mod.VisionMissionValues })), {
  loading: () => <div className="h-96 bg-neutral-50 dark:bg-neutral-800 animate-pulse rounded-2xl" />,
});

const AppFeaturesShowcase = dynamic(() => import("@/components/AppFeaturesShowcase").then(mod => ({ default: mod.AppFeaturesShowcase })), {
  loading: () => <div className="h-96 bg-neutral-50 dark:bg-neutral-800 animate-pulse rounded-2xl" />,
});

const TrustedSourcesNetwork = dynamic(() => import("@/components/TrustedSourcesNetwork"), {
  loading: () => <div className="h-96 bg-neutral-50 dark:bg-neutral-800 animate-pulse rounded-2xl" />,
});

const Footer = dynamic(() => import("@/components/Footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-64 bg-neutral-900 animate-pulse" />,
});

// Nova seção com Scroll Pinning
const AppPreviewSection = dynamic(() => import("@/components/AppPreviewSection").then(mod => ({ default: mod.AppPreviewSection })), {
  loading: () => <div className="h-screen bg-neutral-50 dark:bg-neutral-900 animate-pulse" />,
});

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloadModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-900 overflow-x-hidden">
      {/* Structured Data for SEO */}
      <StructuredData />

      {/* Navbar */}
      <TubelightNavbar onDownloadClick={handleDownloadClick} />

      {/* Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] flex items-center pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden"
        aria-label="Seção principal"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Dot Pattern (Top Left) */}
          <div className="absolute top-0 left-0 w-[800px] h-[1000px] opacity-70 dark:opacity-40">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dot-pattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" className="text-primary-200 dark:text-primary-800 fill-current" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
          </div>

          {/* Glow (Top Right) */}
          <div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-success-500/20 rounded-full blur-[120px]" />

          {/* Secondary Glow (Bottom Left) */}
          <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-[100px]" />
        </div>

        <Container size="lg" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="mb-4 flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    Verificação Inteligente com IA
                  </span>
                </div>
              </div>

              {/* Título Principal */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-[1.1] tracking-tight text-neutral-900 dark:text-white">
                Combata a desinformação com{" "}
                <span className="text-gradient block pb-2">
                  <AnimatedWords
                    words={["Inteligência", "Precisão", "Segurança", "Confiança", "Tecnologia"]}
                  />
                </span>
              </h1>

              {/* Subtítulo */}
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Verifique notícias em segundos com inteligência artificial avançada. <AnimatedUnderlineText text="CheckNow" /> é sua defesa definitiva contra fake news.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <InteractiveHoverButton onClick={handleDownloadClick} className="w-full sm:w-auto justify-center">
                  <Download size={20} />
                  <span>Baixar Agora</span>
                </InteractiveHoverButton>
                <a
                  href="https://instagram.com/checknow.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto"
                >
                  <InteractiveHoverButton className="w-full sm:w-auto justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 hover:shadow-pink-500/50">
                    <Instagram size={20} />
                    <span>Siga no Instagram</span>
                  </InteractiveHoverButton>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 border-t border-neutral-200 dark:border-neutral-800 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-500 mb-1">100K+</div>
                  <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Usuários Ativos</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-500 mb-1">1M+</div>
                  <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Notícias Verificadas</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-500 mb-1">99%</div>
                  <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Precisão</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visuals */}
            <div className="hidden lg:flex order-1 lg:order-2 justify-center lg:justify-end relative lg:translate-x-10">
              {/* Animated UI Representation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[500px] aspect-square"
              >
                {/* Rotating Gradient Background */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-tr from-primary-200 via-blue-100 to-primary-50 dark:from-primary-900/40 dark:via-blue-900/20 dark:to-primary-900/10 rounded-[2.5rem] blur-xl opacity-70"
                />

                {/* Main Glass Card */}
                <div className="absolute inset-4 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 dark:border-neutral-700/50 flex flex-col overflow-hidden">
                  {/* Header Mockup */}
                  <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="h-2 w-20 bg-neutral-100 dark:bg-neutral-800 rounded-full" />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col gap-4 relative">
                    {/* Scanning Line Effect */}
                    <motion.div
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50 z-10 pointer-events-none"
                    />

                    {/* Fake News Card (Animated) */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-red-50/50 dark:bg-red-900/10 rounded-xl p-4 border border-red-100 dark:border-red-900/20"
                    >
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 shrink-0">
                          <AlertTriangle size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1 leading-snug">
                            &quot;Nova taxa do PIX começa a valer nesta segunda-feira&quot;
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400 border border-red-200 dark:border-red-800">
                              FALSO
                            </span>
                            <span className="text-[10px] text-neutral-400">Viral no WhatsApp</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Verified Card (Animated) */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="bg-emerald-50/50 dark:bg-emerald-900/10 rounded-xl p-4 border border-emerald-100 dark:border-emerald-900/20"
                    >
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500 shrink-0">
                          <CheckCircle size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1 leading-snug">
                            &quot;Banco Central reafirma gratuidade do PIX para pessoas físicas&quot;
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                              VERDADEIRO
                            </span>
                            <span className="text-[10px] text-neutral-400">Fonte Oficial</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Processing Text */}
                    <div className="mt-auto flex items-center gap-2 text-xs text-neutral-400">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Clock size={12} />
                      </motion.div>
                      <span>Processando análise em tempo real...</span>
                    </div>
                  </div>
                </div>

                {/* Central AI Core (Floating & Pulsing) */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    {/* Pulsing Rings */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary-500/30 rounded-full blur-md"
                    />
                    <div className="relative w-24 h-24 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-primary-100 dark:border-primary-900/50 flex flex-col items-center justify-center gap-2 z-20">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Brain size={28} />
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                        AI Analysis
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Particles/Icons */}
                <motion.div
                  animate={{ y: [-15, 15, -15], x: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white dark:bg-neutral-800 p-3 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700 text-yellow-500"
                >
                  <Zap size={20} fill="currentColor" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -left-4 bg-white dark:bg-neutral-800 p-3 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700 text-primary-500"
                >
                  <Shield size={20} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-gradient-to-b from-primary-50/30 to-white dark:from-neutral-800 dark:to-neutral-900">
        <Container size="lg">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Recursos Poderosos
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
            >
              Tudo que você precisa para combater a desinformação em um único app
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.slice(0, 6).map((feature, index) => {
              const icons = [Shield, Zap, Brain, Lock, TrendingUp, Clock];
              const IconComponent = icons[index % icons.length];

              return (
                <FeatureCard
                  key={feature.id}
                  icon={IconComponent}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* App Preview with Scroll Pinning Animation */}
      <AppPreviewSection />

      {/* How It Works Section */}
      <section id="how-it-works" className="section relative overflow-hidden bg-white dark:bg-neutral-900 py-12 lg:py-20">
        {/* Background Glows (Enhanced) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[30%] -left-[20%] w-[900px] h-[900px] bg-primary-500/20 rounded-full blur-[180px] dark:bg-primary-500/10" />
          <div className="absolute -bottom-[30%] -right-[20%] w-[900px] h-[900px] bg-success-500/20 rounded-full blur-[180px] dark:bg-success-500/10" />
        </div>

        <Container size="lg" className="relative z-10">
          <motion.div
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-4">
              Como Funciona
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
            >
              Processo simples e rápido em 4 passos
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Mascot */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-[500px] aspect-square"
              >
                {/* Blob Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-success-100 dark:from-primary-900/20 dark:to-success-900/20 rounded-full blur-3xl opacity-60 animate-pulse" />

                <NextImage
                  src="/images/checkito/checkito_tela2.png"
                  alt="Checkito explicando como funciona"
                  width={500}
                  height={500}
                  className="relative z-10 object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Right Column - Steps */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              {STEPS.map((step, index) => {
                const icons = [Link, Brain, FileSearch, ShieldCheck];
                const StepIcon = icons[index] || Zap;

                return (
                  <StepCard
                    key={step.id}
                    number={step.id}
                    title={step.title}
                    description={step.description}
                    delay={index * 0.2}
                    isLast={index === STEPS.length - 1}
                    icon={StepIcon}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Vision Mission Values Section */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <Container size="lg">
          <VisionMissionValues />
        </Container>
      </section>

      {/* App Features Showcase Section */}
      <section className="section bg-gradient-to-b from-primary-50/30 to-white dark:from-neutral-800 dark:to-neutral-900">
        <Container size="lg">
          <AppFeaturesShowcase />
        </Container>
      </section>

      {/* Trusted Sources Network Section */}
      <section className="py-8 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <Container size="lg">
          <TrustedSourcesNetwork />
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-white dark:bg-neutral-900">
        <Container size="lg">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Planos Simples e Acessíveis
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
            >
              Escolha o plano perfeito para suas necessidades
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PLANS.map((plan, index) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
                delay={index * 0.2}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-gradient-to-b from-primary-50/20 to-white dark:from-neutral-800 dark:to-neutral-900">
        <Container size="md">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Perguntas Frequentes
            </motion.h2>
          </motion.div>

          <div className="space-y-4">
            {FAQ.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Final Section */}
      <section className="relative section overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-success-600 text-white">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-success-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <Container size="md" className="relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            >
              <Sparkles size={40} className="text-white" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Pronto para Combater a Desinformação?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
            >
              Baixe o CheckNow agora e comece a verificar notícias com inteligência artificial
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                icon={<Download size={20} />}
                className="!bg-white !text-primary-600 hover:!bg-neutral-100 shadow-2xl"
                onClick={handleDownloadClick}
              >
                Baixar CheckNow
              </Button>
              <Button
                size="lg"
                icon={<ArrowRight size={20} />}
                className="!bg-white/10 !text-white hover:!bg-white/20 backdrop-blur-sm border-2 border-white/30"
              >
                Saiba Mais
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </main >
  );
}
