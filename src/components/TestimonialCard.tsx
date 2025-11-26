/**
 * Componente TestimonialCard - Card de depoimento com glassmorphism
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  delay?: number;
  className?: string;
}

export function TestimonialCard({ 
  name, 
  role,
  content, 
  rating, 
  delay = 0 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "group relative p-8 rounded-2xl",
        "bg-white/80 dark:bg-neutral-900/80",
        "backdrop-blur-lg",
        "border border-neutral-200 dark:border-neutral-700",
        "shadow-lg hover:shadow-2xl",
        "transition-all duration-300",
        "overflow-hidden"
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-success-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Quote Icon */}
      <div className="absolute -top-2 -right-2 opacity-5 group-hover:opacity-10 transition-opacity">
        <Quote size={120} className="text-primary-500" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: delay + (i * 0.1),
                type: "spring",
                stiffness: 200
              }}
            >
              <Star
                size={20}
                className={cn(
                  "transition-colors duration-300",
                  i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-neutral-300 text-neutral-300 dark:fill-neutral-700 dark:text-neutral-700"
                )}
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed italic">
          &ldquo;{content}&rdquo;
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <motion.div
            className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary-500/20 group-hover:ring-primary-500/50 transition-all"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary-500 to-success-500 flex items-center justify-center text-white font-bold text-lg">
              {name.charAt(0)}
            </div>
          </motion.div>

          {/* Name and Role */}
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white">
              {name}
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-success-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
