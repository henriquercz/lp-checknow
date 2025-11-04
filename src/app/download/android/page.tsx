/**
 * Página de Download Android - Guia de Instalação com APK
 * Autor: Capitão Henrique
 * Data: Novembro 2025
 * Versão: 1.0.0
 */

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Bell, FolderOpen, Shield, Settings, CheckCircle2, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ProgressIndicator from "@/components/ui/progress-indicator";

const steps = [
  {
    number: 1,
    icon: Download,
    title: "Baixando o APK",
    description: "O download do CheckNow.apk está sendo iniciado automaticamente",
    color: "from-primary-500 to-primary-600",
  },
  {
    number: 2,
    icon: Bell,
    title: "Abra suas notificações",
    description: "Deslize para baixo na tela para ver as notificações do sistema",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: 3,
    icon: FolderOpen,
    title: "Localize o arquivo baixado",
    description: "Toque na notificação 'Download concluído' ou vá em 'Downloads'",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: 4,
    icon: Shield,
    title: "Permita instalação",
    description: "Se solicitado, ative 'Permitir de fontes desconhecidas' nas configurações",
    color: "from-orange-500 to-orange-600",
  },
  {
    number: 5,
    icon: Settings,
    title: "Instale o aplicativo",
    description: "Toque em 'Instalar' na tela de instalação e aguarde a conclusão",
    color: "from-green-500 to-green-600",
  },
  {
    number: 6,
    icon: CheckCircle2,
    title: "Abra o CheckNow",
    description: "Toque em 'Abrir' ou encontre o ícone do CheckNow na tela inicial",
    color: "from-success-500 to-success-600",
  },
];

export default function AndroidDownloadPage() {
  const router = useRouter();
  const [downloading, setDownloading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Simular início do download do APK
    const downloadAPK = () => {
      // URL do APK - SUBSTITUIR pela URL real quando disponível
      const apkUrl = "/downloads/checknow.apk";
      
      // Criar elemento de link temporário para forçar download
      const link = document.createElement("a");
      link.href = apkUrl;
      link.download = "CheckNow.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Atualizar estado após 2 segundos
      setTimeout(() => {
        setDownloading(false);
      }, 2000);
    };

    downloadAPK();
  }, []);

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
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-3xl bg-gradient-to-br from-green-500 to-green-600 shadow-xl">
            <Download className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Instalação Android
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Siga o passo a passo abaixo para instalar o CheckNow no seu dispositivo Android
          </p>
        </motion.div>

        {/* Download Status */}
        {downloading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 p-6 rounded-2xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800"
          >
            <div className="flex items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500" />
              <div>
                <p className="font-semibold text-neutral-900 dark:text-white">
                  Iniciando download...
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  O arquivo APK será baixado automaticamente
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Progress Indicator */}
        <div className="mb-12 flex justify-center">
          <ProgressIndicator />
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div
                  className={`relative h-full p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? "bg-white dark:bg-neutral-800 border-primary-500 shadow-xl shadow-primary-500/20"
                      : isCompleted
                      ? "bg-success-50 dark:bg-success-900/10 border-success-500 dark:border-success-700"
                      : "bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700"
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${step.color}`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Completed Badge */}
                  {isCompleted && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      Concluído
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800"
        >
          <div className="flex gap-4">
            <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-neutral-900 dark:text-white mb-2">
                Sobre a segurança
              </h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                O CheckNow é um aplicativo 100% seguro e confiável. A instalação via APK é necessária 
                enquanto aguardamos aprovação na Google Play Store. Seu dispositivo pode solicitar 
                permissão para instalar apps de fontes desconhecidas - isso é normal e seguro.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-6 py-3 rounded-xl bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Passo Anterior
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
            disabled={currentStep === 6}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-success-500 text-white font-medium hover:from-primary-600 hover:to-success-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
          >
            Próximo Passo
          </button>
        </div>
      </div>
    </div>
  );
}
