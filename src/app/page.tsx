/**
 * Página Inicial da Landing Page CheckNow
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Shield, Zap, Sparkles, Instagram, Brain, Lock, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { TubelightNavbar } from "@/components/TubelightNavbar";
import { AnimatedWords } from "@/components/AnimatedWords";
import { AnimatedUnderlineText } from "@/components/ui/animated-underline-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { SplineRobot } from "@/components/SplineRobot";
import { ContainerScroll } from "@/components/ContainerScroll";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { VisionMissionValues } from "@/components/VisionMissionValues";
import { PricingCard } from "@/components/PricingCard";
import { FAQItem } from "@/components/FAQItem";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { FEATURES, STEPS, PLANS, FAQ } from "@/lib/constants";
import { AppFeaturesShowcase } from "@/components/AppFeaturesShowcase";
import TrustedSourcesNetwork from "@/components/TrustedSourcesNetwork";
import { DownloadModal } from "@/components/DownloadModal";

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
    <main className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Structured Data for SEO */}
      <StructuredData />
      
      {/* Navbar */}
      <TubelightNavbar />

      {/* Download Modal */}
      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden pt-4"
        aria-label="Seção principal"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        </div>

        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Left Column - Content */}
            <motion.div
              className="text-center lg:text-left pt-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                  <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    Verificação Inteligente com IA
                  </span>
                </div>
              </motion.div>

            {/* Título Principal */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Combata a desinformação com{" "}
              <span className="text-gradient">
                <AnimatedWords 
                  words={["Inteligência", "Precisão", "Segurança", "Confiança", "Tecnologia"]}
                />
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8"
            >
              Verifique notícias em segundos com inteligência artificial avançada. <AnimatedUnderlineText text="CheckNow" /> é sua defesa definitiva contra fake news.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <InteractiveHoverButton onClick={handleDownloadClick}>
                <Download size={20} />
                <span>Baixar Agora</span>
              </InteractiveHoverButton>
              <a 
                href="https://instagram.com/checknow.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <InteractiveHoverButton className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 hover:shadow-pink-500/50">
                  <Instagram size={20} />
                  <span>Siga no Instagram</span>
                </InteractiveHoverButton>
              </a>
            </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 md:gap-8"
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500">100K+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Usuários Ativos</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500">1M+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Notícias Verificadas</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500">99%</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Precisão</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Robot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[450px] lg:h-[500px] hidden lg:block"
            >
              <SplineRobot className="w-full h-full" />
            </motion.div>
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
      <section className="relative py-4 overflow-hidden">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(255, 255, 255)"
          gradientBackgroundEnd="rgb(249, 250, 251)"
          firstColor="59, 130, 246"
          secondColor="34, 197, 94"
          thirdColor="96, 165, 250"
          fourthColor="52, 211, 153"
          fifthColor="191, 219, 254"
          pointerColor="59, 130, 246"
          size="80%"
          blendingValue="normal"
          interactive={true}
          containerClassName="absolute inset-0"
        />

        <div className="relative z-10">
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
