/**
 * Componente Footer
 * Autor: Capitão Henrique
 * Data: Novembro 2025
 * Versão: 2.0.0 - Clean & Premium
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden border-t border-neutral-800">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="py-16 flex flex-col items-center justify-center text-center">

          {/* Logo & Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 mb-8"
          >
            <div className="relative w-16 h-16 bg-white/5 rounded-2xl p-3 border border-white/10 shadow-2xl backdrop-blur-sm">
              <Image
                src="/images/logo-sem-fundo.png"
                alt="CheckNow Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              CheckNow
            </h3>
            <p className="text-neutral-400 max-w-md mx-auto mt-3 text-base leading-relaxed">
              Sua fonte segura de verdade em um mundo de incertezas.
            </p>
          </motion.div>

          {/* Instagram Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <motion.a
              href="https://instagram.com/checknow.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-2 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg">
                <Instagram size={20} />
              </div>
              <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">
                Siga-nos no Instagram
              </span>
            </motion.a>
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-sm font-medium"
          >
            © {currentYear} CheckNow. Todos os direitos reservados.
          </motion.p>
        </div>
      </Container>
    </footer>
  );
}
