/**
 * Componente PricingCard - Card de preço com destaque para plano recomendado
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
  className?: string;
}

export function PricingCard({ 
  name, 
  price, 
  description, 
  features, 
  highlighted = false,
  delay = 0,
  className 
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: highlighted ? -12 : -8, scale: highlighted ? 1.03 : 1.02 }}
      className={cn(
        "relative group p-8 rounded-3xl",
        highlighted
          ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-2xl shadow-primary-500/50"
          : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700",
        "transition-all duration-300",
        "overflow-hidden",
        className
      )}
    >
      {/* Badge "Recomendado" */}
      {highlighted && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="absolute top-6 right-6"
        >
          <div className="flex items-center gap-1 bg-success-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            <Sparkles size={14} />
            <span>Recomendado</span>
          </div>
        </motion.div>
      )}

      {/* Background Effects */}
      {highlighted && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <motion.div
            className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Plan Name */}
        <h3 className={cn(
          "text-2xl font-bold mb-2",
          highlighted ? "text-white" : "text-neutral-900 dark:text-white"
        )}>
          {name}
        </h3>

        {/* Description */}
        <p className={cn(
          "text-sm mb-6",
          highlighted ? "text-white/80" : "text-neutral-600 dark:text-neutral-400"
        )}>
          {description}
        </p>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className={cn(
              "text-5xl font-bold",
              highlighted ? "text-white" : "text-neutral-900 dark:text-white"
            )}>
              {price}
            </span>
            {price !== "Grátis" && (
              <span className={cn(
                "text-lg",
                highlighted ? "text-white/70" : "text-neutral-600 dark:text-neutral-400"
              )}>
                /mês
              </span>
            )}
          </div>
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: delay + 0.3 + (index * 0.1) }}
              className="flex items-start gap-3"
            >
              <div className={cn(
                "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                highlighted 
                  ? "bg-white/20" 
                  : "bg-success-100 dark:bg-success-900/30"
              )}>
                <Check 
                  size={14} 
                  className={cn(
                    highlighted 
                      ? "text-white" 
                      : "text-success-600 dark:text-success-400"
                  )}
                />
              </div>
              <span className={cn(
                highlighted 
                  ? "text-white/90" 
                  : "text-neutral-700 dark:text-neutral-300"
              )}>
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          className={cn(
            "w-full",
            highlighted
              ? "!bg-white !text-primary-600 hover:!bg-neutral-100"
              : "!bg-primary-500 !text-white hover:!bg-primary-600"
          )}
        >
          {highlighted ? "Começar Agora" : "Experimentar"}
        </Button>
      </div>

      {/* Decorative Bottom Line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500",
        highlighted 
          ? "bg-white/50" 
          : "bg-gradient-to-r from-primary-500 to-success-500"
      )} />
    </motion.div>
  );
}
