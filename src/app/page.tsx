/**
 * Página Inicial da Landing Page CheckNow
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Shield, Zap, Brain, Lock, TrendingUp, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { TubelightNavbar } from "@/components/TubelightNavbar";
import { AnimatedWords } from "@/components/AnimatedWords";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingCard } from "@/components/PricingCard";
import { FAQItem } from "@/components/FAQItem";
import { Footer } from "@/components/Footer";
import { FEATURES, STEPS, PLANS, TESTIMONIALS, FAQ } from "@/lib/constants";

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
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Navbar */}
      <TubelightNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        </div>

        <Container size="lg">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6 flex justify-center">
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
              Verifique notícias em segundos com inteligência artificial avançada. CheckNow é sua defesa definitiva contra fake news.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                size="lg"
                icon={<Download size={20} />}
                className="shadow-lg hover:shadow-xl"
              >
                Baixar Agora
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Saiba Mais
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-500">100K+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Usuários Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-500">1M+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Notícias Verificadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-500">99%</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Precisão</div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-neutral-50 dark:bg-neutral-800/50">
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

      {/* How It Works Section */}
      <section id="how-it-works" className="section">
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

      {/* Testimonials Section */}
      <section className="section bg-neutral-50 dark:bg-neutral-800/50">
        <Container size="lg">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              O Que Dizem Sobre Nós
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
            >
              Confira os depoimentos de nossos usuários satisfeitos
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
                content={testimonial.content}
                rating={testimonial.rating}
                delay={index * 0.2}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
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
      <section id="faq" className="section bg-neutral-50 dark:bg-neutral-800/50">
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
