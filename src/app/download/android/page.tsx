/**
 * Página de Download Android - Gu

ia de Instalação com APK
 * Autor: Capitão Henrique
 * Data: Novembro 2025
 * Versão: 2.0.0
 */

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Bell, FolderOpen, Shield, Settings, CheckCircle2, ArrowLeft, CircleCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    icon: Download,
    title: "Baixando o APK",
    description: "O download do CheckNow.apk está sendo iniciado automaticamente. Aguarde alguns segundos.",
    color: "from-primary-500 to-primary-600",
    detail: "Você verá uma notificação na barra superior quando o download for concluído.",
  },
  {
    number: 2,
    icon: Bell,
    title: "Abra suas notificações",
    description: "Deslize para baixo na tela para ver as notificações do sistema.",
    color: "from-blue-500 to-blue-600",
    detail: "Procure pela notificação 'Download concluído' ou 'CheckNow-2.8.1.apk'.",
  },
  {
    number: 3,
    icon: FolderOpen,
    title: "Localize o arquivo baixado",
    description: "Toque na notificação 'Download concluído' ou acesse a pasta 'Downloads'.",
    color: "from-purple-500 to-purple-600",
    detail: "Você também pode usar o aplicativo 'Arquivos' ou 'Gerenciador de Arquivos' do seu celular.",
  },
  {
    number: 4,
    icon: Shield,
    title: "Permita instalação",
    description: "Se solicitado, ative 'Permitir de fontes desconhecidas' nas configurações.",
    color: "from-orange-500 to-orange-600",
    detail: "Isso é normal e seguro. O CheckNow é um aplicativo confiável e verificado.",
  },
  {
    number: 5,
    icon: Settings,
    title: "Instale o aplicativo",
    description: "Toque em 'Instalar' na tela de instalação e aguarde a conclusão.",
    color: "from-green-500 to-green-600",
    detail: "A instalação leva apenas alguns segundos. Não feche a tela durante o processo.",
  },
  {
    number: 6,
    icon: CheckCircle2,
    title: "Pronto! Abra o CheckNow",
    description: "Toque em 'Abrir' ou encontre o ícone do CheckNow na tela inicial do seu celular.",
    color: "from-success-500 to-success-600",
    detail: "Agora você pode começar a verificar notícias e combater a desinformação!",
  },
];

// Componente ProgressIndicator customizado
function ProgressIndicator({ step, onContinue, onBack }: { step: number; onContinue: () => void; onBack: () => void }) {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    if (step > 1) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }, [step]);

  const handleContinue = () => {
    if (step < 6) {
      onContinue();
    }
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex items-center gap-6 relative">
        {[1, 2, 3, 4, 5, 6].map((dot) => (
          <div
            key={dot}
            className={cn(
              "w-2 h-2 rounded-full relative z-10 transition-all duration-300",
              dot <= step ? "bg-success-500" : "bg-neutral-300 dark:bg-neutral-600"
            )}
          />
        ))}

        {/* Green progress overlay */}
        <motion.div
          initial={{ width: "12px", height: "24px", x: 0 }}
          animate={{
            width: step === 1 ? "24px" : step === 2 ? "60px" : step === 3 ? "96px" : step === 4 ? "132px" : step === 5 ? "168px" : "204px",
            x: 0,
          }}
          className="absolute -left-[8px] -top-[8px] h-3 bg-success-500 rounded-full"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.8,
            bounce: 0.25,
            duration: 0.6,
          }}
        />
      </div>

      {/* Buttons container */}
      <div className="w-full max-w-sm">
        <motion.div
          className="flex items-center gap-2"
          animate={{
            justifyContent: isExpanded ? "stretch" : "space-between",
          }}
        >
          {!isExpanded && (
            <motion.button
              initial={{ opacity: 0, width: 0, scale: 0.8 }}
              animate={{ opacity: 1, width: "80px", scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                mass: 0.8,
                bounce: 0.25,
                duration: 0.6,
                opacity: { duration: 0.2 },
              }}
              onClick={handleBack}
              className="px-4 py-3 text-neutral-900 dark:text-white flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 font-semibold rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex-1 text-sm"
            >
              Voltar
            </motion.button>
          )}
          <motion.button
            onClick={handleContinue}
            animate={{
              flex: isExpanded ? 1 : "inherit",
            }}
            disabled={step === 6}
            className={cn(
              "px-6 py-3 rounded-full text-white bg-primary-500 hover:bg-primary-600 transition-colors flex-1",
              !isExpanded && "w-56",
              step === 6 && "bg-success-500 hover:bg-success-600"
            )}
          >
            <div className="flex items-center font-semibold justify-center gap-2 text-sm">
              {step === 6 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    mass: 0.5,
                    bounce: 0.4,
                  }}
                >
                  <CircleCheck size={18} />
                </motion.div>
              )}
              {step === 6 ? "Concluído!" : "Continuar"}
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default function AndroidDownloadPage() {
  const router = useRouter();
  const [downloading, setDownloading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Iniciar download do APK
    const downloadAPK = () => {
      // URL do APK real
      const apkUrl = "https://xout2xjgsj0csshv.public.blob.vercel-storage.com/checknow2.8.1.apk";

      // Criar elemento de link temporário para forçar download
      const link = document.createElement("a");
      link.href = apkUrl;
      link.download = "CheckNow-2.8.1.apk";
      link.target = "_blank";
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

  const handleContinue = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep - 1];
  const Icon = currentStepData.icon;

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
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-3xl bg-gradient-to-br from-green-500 to-green-600 shadow-xl">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.341c-.759 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm-11.046 0c-.759 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zM12 22.125c-5.376 0-9.75-4.374-9.75-9.75S6.624 2.625 12 2.625s9.75 4.374 9.75 9.75-4.374 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25S16.55 4.125 12 4.125zM15.786 1.808c-.195-.195-.195-.512 0-.707l1.371-1.371c.195-.195.512-.195.707 0s.195.512 0 .707l-1.371 1.371c-.195.195-.512.195-.707 0zm-7.572 0l-1.371-1.371c-.195-.195-.195-.512 0-.707s.512-.195.707 0l1.371 1.371c.195.195.195.512 0 .707s-.512.195-.707 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Instalação Android
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Siga o passo a passo para instalar o CheckNow no seu dispositivo
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
                <p className="font-semibold text-neutral-900 dark:text-white">Iniciando download...</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">O arquivo APK será baixado automaticamente</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Progress Indicator */}
        <div className="mb-16">
          <ProgressIndicator step={currentStep} onContinue={handleContinue} onBack={handleBack} />
        </div>

        {/* Current Step Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <div className={`relative p-8 rounded-3xl border-4 bg-white dark:bg-neutral-800 border-primary-500 shadow-2xl shadow-primary-500/20`}>
            {/* Step Number Badge */}
            <div className={`absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br ${currentStepData.color} shadow-xl flex items-center justify-center`}>
              <span className="text-white font-bold text-2xl">{currentStepData.number}</span>
            </div>

            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${currentStepData.color}`}>
              <Icon className="w-10 h-10 text-white" />
            </div>

            {/* Content */}
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">{currentStepData.title}</h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">{currentStepData.description}</p>
            <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-700/50 border-l-4 border-primary-500">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{currentStepData.detail}</p>
            </div>
          </div>
        </motion.div>

        {/* Security Note */}
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800"
          >
            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Sobre a segurança</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  O CheckNow é um aplicativo 100% seguro e confiável. A instalação via APK é necessária enquanto aguardamos
                  aprovação na Google Play Store. Seu dispositivo pode solicitar permissão para instalar apps de fontes desconhecidas
                  - isso é normal e seguro.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
