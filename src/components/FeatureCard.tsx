/**
 * Componente FeatureCard - Card de feature com ícone animado
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0, className }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "group relative p-6 rounded-2xl",
        "bg-white dark:bg-neutral-900",
        "border border-neutral-200 dark:border-neutral-700",
        "shadow-sm hover:shadow-xl",
        "transition-all duration-300",
        "overflow-hidden",
        className
      )}
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-success-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={cn(
            "w-12 h-12 rounded-xl mb-4",
            "bg-primary-100 dark:bg-primary-900/30",
            "flex items-center justify-center",
            "group-hover:bg-primary-500 group-hover:scale-110",
            "transition-all duration-300"
          )}
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon 
            size={24} 
            className="text-primary-500 dark:text-primary-400 group-hover:text-white transition-colors duration-300" 
          />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/20 to-transparent rotate-45 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
      </div>
    </motion.div>
  );
}
