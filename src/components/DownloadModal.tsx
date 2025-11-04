/**
 * Componente DownloadModal - Modal de Download com Liquid Glass
 * Autor: Capitão Henrique
 * Data: Novembro 2025
 * Versão: 1.0.0
 */

"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const router = useRouter();

  const handleAndroidClick = () => {
    onClose();
    router.push("/download/android");
  };

  const handleIOSClick = () => {
    onClose();
    router.push("/download/ios");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop com blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Liquid Glass Card */}
              <div className="relative rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-white/20 dark:border-neutral-700/50 shadow-2xl overflow-hidden">
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-success-500/10 pointer-events-none" />

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                </button>

                {/* Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-success-500 shadow-lg"
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                        />
                      </svg>
                    </motion.div>
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                      Escolha sua plataforma
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Selecione o sistema operacional do seu dispositivo
                    </p>
                  </div>

                  {/* Download Options */}
                  <div className="space-y-4">
                    {/* Android Option */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAndroidClick}
                      className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                            {/* Android Logo SVG */}
                            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.523 15.341c-.759 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm-11.046 0c-.759 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zM12 22.125c-5.376 0-9.75-4.374-9.75-9.75S6.624 2.625 12 2.625s9.75 4.374 9.75 9.75-4.374 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25S16.55 4.125 12 4.125zM15.786 1.808c-.195-.195-.195-.512 0-.707l1.371-1.371c.195-.195.512-.195.707 0s.195.512 0 .707l-1.371 1.371c-.195.195-.512.195-.707 0zm-7.572 0l-1.371-1.371c-.195-.195-.195-.512 0-.707s.512-.195.707 0l1.371 1.371c.195.195.195.512 0 .707s-.512.195-.707 0z"/>
                            </svg>
                          </div>
                          <div className="text-left">
                            <div className="text-lg font-bold text-white">
                              Android
                            </div>
                            <div className="text-sm text-white/80">
                              Baixar APK
                            </div>
                          </div>
                        </div>
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </motion.button>

                    {/* iOS Option */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleIOSClick}
                      className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-neutral-900 hover:to-black p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                            {/* Apple Logo SVG */}
                            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                            </svg>
                          </div>
                          <div className="text-left">
                            <div className="text-lg font-bold text-white">
                              iOS
                            </div>
                            <div className="text-sm text-white/70">
                              Via Expo Go
                            </div>
                          </div>
                        </div>
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </motion.button>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Disponível gratuitamente para Android e iOS
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
