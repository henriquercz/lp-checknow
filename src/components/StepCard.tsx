/**
 * Componente StepCard - Card de passo com timeline animado
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
  isLast?: boolean;
  className?: string;
}

export function StepCard({ number, title, description, delay = 0, isLast = false, className }: StepCardProps) {
  return (
    <div className={cn("relative flex gap-8", className)}>
      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Number Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay }}
          className={cn(
            "relative z-10 w-16 h-16 rounded-full",
            "bg-gradient-to-br from-primary-500 to-primary-600",
            "flex items-center justify-center",
            "shadow-lg shadow-primary-500/50",
            "ring-4 ring-white dark:ring-neutral-900"
          )}
        >
          <span className="text-2xl font-bold text-white">{number}</span>
          
          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary-500"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>

        {/* Vertical Line */}
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + 0.3 }}
            className="w-1 flex-1 mt-4 bg-gradient-to-b from-primary-500 to-transparent"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className={cn(
          "flex-1 pb-12",
          "group"
        )}
      >
        <div className={cn(
          "p-6 rounded-2xl",
          "bg-white dark:bg-neutral-900",
          "border border-neutral-200 dark:border-neutral-700",
          "hover:border-primary-500 dark:hover:border-primary-500",
          "shadow-sm hover:shadow-xl",
          "transition-all duration-300",
          "hover:-translate-y-1"
        )}>
          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>

          {/* Decorative Element */}
          <div className="mt-4 flex gap-1">
            <motion.div
              className="h-1 bg-primary-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "40px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: delay + 0.5 }}
            />
            <motion.div
              className="h-1 bg-success-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "24px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: delay + 0.6 }}
            />
            <motion.div
              className="h-1 bg-primary-300 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "16px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: delay + 0.7 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
