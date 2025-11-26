/**
 * Página Inicial da Landing Page CheckNow
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.3.2
 */

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Shield, Zap, Sparkles, Instagram, Brain, Lock, TrendingUp, Clock, ArrowRight, CheckCircle, AlertTriangle, FileText } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { TubelightNavbar } from "@/components/TubelightNavbar";
import { AnimatedWords } from "@/components/AnimatedWords";
import { AnimatedUnderlineText } from "@/components/ui/animated-underline-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ContainerScroll } from "@/components/ContainerScroll";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { PricingCard } from "@/components/PricingCard";
import { FAQItem } from "@/components/FAQItem";
import { StructuredData } from "@/components/StructuredData";
import { FEATURES, STEPS, PLANS, FAQ } from "@/lib/constants";
import { DownloadModal } from "@/components/DownloadModal";

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
          <div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px]" />

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
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
              {/* Placeholder para Ilustração 3D/Visual */}
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/10 rounded-[2rem] rotate-3 transform transition-transform hover:rotate-6 duration-500" />
                <div className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-[2rem] shadow-2xl border border-neutral-100 dark:border-neutral-700 flex items-center justify-center overflow-hidden">
                  {/* Abstract UI Representation */}
                  <div className="w-full h-full p-8 flex flex-col gap-6 opacity-80">
                    {/* Header Mockup */}
                    <div className="flex items-center justify-between">
                      <div className="w-32 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-lg animate-pulse" />
                      <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full" />
                    </div>
                    {/* Content Mockup */}
                    <div className="space-y-4">
                      <div className="w-full h-32 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl border border-neutral-100 dark:border-neutral-700 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-500">
                            <AlertTriangle size={20} />
                          </div>
                          <div className="flex-1">
                            <div className="w-24 h-4 bg-neutral-200 dark:bg-neutral-600 rounded mb-1" />
                            <div className="w-16 h-3 bg-neutral-100 dark:bg-neutral-700 rounded" />
                          </div>
                        </div>
                        <div className="w-full h-2 bg-neutral-100 dark:bg-neutral-700 rounded mb-2" />
                        <div className="w-2/3 h-2 bg-neutral-100 dark:bg-neutral-700 rounded" />
                      </div>

                      <div className="w-full h-32 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl border border-neutral-100 dark:border-neutral-700 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-success-100 dark:bg-success-900/20 rounded-full flex items-center justify-center text-success-500">
                            <CheckCircle size={20} />
                          </div>
                          <div className="flex-1">
                            <div className="w-24 h-4 bg-neutral-200 dark:bg-neutral-600 rounded mb-1" />
                            <div className="w-16 h-3 bg-neutral-100 dark:bg-neutral-700 rounded" />
                          </div>
                        </div>
                        <div className="w-full h-2 bg-neutral-100 dark:bg-neutral-700 rounded mb-2" />
                        <div className="w-2/3 h-2 bg-neutral-100 dark:bg-neutral-700 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge Center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-xl border border-primary-100 dark:border-primary-900/30 flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
                      <Brain size={32} />
                    </div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white">AI Analysis</div>
                  </div>
                </div>
              </div>
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

      {/* App Preview with Container Scroll Animation */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 overflow-hidden py-12">
        <div className="relative">
          <ContainerScroll
            titleComponent={
              <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  Experiência Intuitiva e <span className="text-primary-500">Poderosa</span>
                </h2>
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
                  Verifique notícias com apenas alguns toques.
                </p>
              </div>
            }
          >
            <div className="w-full h-full overflow-y-auto scrollbar-hide">
              <div className="space-y-2 p-2">
                {/* Telas do app em proporção 9:16 */}
                <Image
                  src="/images/smartphone/home.PNG"
                  alt="CheckNow App - Tela Inicial"
                  width={400}
                  height={711}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
                <Image
                  src="/images/smartphone/noticias.PNG"
                  alt="CheckNow App - Notícias"
                  width={400}
                  height={711}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
                <Image
                  src="/images/smartphone/veredito.PNG"
                  alt="CheckNow App - Veredito"
                  width={400}
                  height={711}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
                <Image
                  src="/images/smartphone/educacao.PNG"
                  alt="CheckNow App - Educação"
                  width={400}
                  height={711}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </ContainerScroll>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section bg-white dark:bg-neutral-900">
        <Container size="lg">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Como Funciona
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
            >
              Processo simples e rápido em 4 passos
            </motion.p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {STEPS.map((step, index) => (
              <StepCard
                key={step.id}
                number={step.id}
                title={step.title}
                description={step.description}
                delay={index * 0.2}
                isLast={index === STEPS.length - 1}
              />
            ))}
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
    </main>
  );
}
