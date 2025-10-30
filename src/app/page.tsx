/**
 * Página Inicial da Landing Page CheckNow
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Shield, Link, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { TubelightNavbar } from "@/components/TubelightNavbar";
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
              Combata a{" "}
              <span className="text-gradient">Desinformação</span>
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                  <Shield size={24} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STEPS.map((step, index) => (
              <motion.div key={step.id} variants={itemVariants} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-2xl mb-4">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-primary-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PLANS.map((plan) => (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                className={`p-8 rounded-xl border transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary-500 text-white border-primary-600 shadow-lg scale-105"
                    : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.highlighted ? "text-primary-100" : "text-neutral-600 dark:text-neutral-400"}>
                  {plan.description}
                </p>
                <div className="my-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? "text-primary-100" : "text-neutral-600 dark:text-neutral-400"}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-primary-500 dark:text-primary-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "secondary" : "primary"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </motion.div>
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

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {FAQ.map((faq) => (
              <motion.details
                key={faq.id}
                variants={itemVariants}
                className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 cursor-pointer group"
              >
                <summary className="flex items-center justify-between font-semibold text-lg">
                  {faq.question}
                  <span className="text-primary-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400">{faq.answer}</p>
              </motion.details>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA Final Section */}
      <section className="section bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <Container size="md">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Combater a Desinformação?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-primary-100 max-w-2xl mx-auto mb-8"
            >
              Baixe o CheckNow agora e comece a verificar notícias com inteligência artificial
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="secondary"
                size="lg"
                icon={<Download size={20} />}
              >
                Baixar CheckNow
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
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
