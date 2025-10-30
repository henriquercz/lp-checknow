/**
 * Componente FAQItem - Item de FAQ com accordion animado
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
  className?: string;
}

export function FAQItem({ question, answer, delay = 0, className }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "rounded-2xl overflow-hidden",
        "bg-white dark:bg-neutral-900",
        "border border-neutral-200 dark:border-neutral-700",
        "hover:border-primary-500 dark:hover:border-primary-500",
        "transition-all duration-300",
        isOpen && "ring-2 ring-primary-500/20",
        className
      )}
    >
      {/* Question Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between gap-4 text-left group"
      >
        <span className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors">
          {question}
        </span>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown 
            size={24} 
            className={cn(
              "transition-colors",
              isOpen 
                ? "text-primary-500" 
                : "text-neutral-400 group-hover:text-primary-500"
            )}
          />
        </motion.div>
      </button>

      {/* Answer Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3, delay: 0.1 },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-success-500 rounded-full mb-4" />
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
