/**
 * Componente Footer
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Container } from "./Container";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <Container size="lg">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/images/logo-sem-fundo.png" 
                  alt="CheckNow Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="font-bold text-lg">CheckNow</span>
              </div>
              <p className="text-neutral-400 text-sm">
                Combata a desinformação com inteligência artificial avançada.
              </p>
            </motion.div>

            {/* Product Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-800 my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <motion.p
              className="text-neutral-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {currentYear} CheckNow. Todos os direitos reservados.
            </motion.p>

            {/* Instagram Link */}
            <motion.div
              className="flex items-center gap-3 mt-6 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-neutral-400 text-sm">Siga-nos:</span>
              <motion.a
                href="https://instagram.com/checknow.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Instagram @checknow.br"
              >
                <Instagram size={20} />
                <span className="font-medium">@checknow.br</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
