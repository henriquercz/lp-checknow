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
    icon?: React.ElementType;
}

export function StepCard({ number, title, description, delay = 0, isLast = false, className, icon: Icon }: StepCardProps) {
    return (
        <div className={cn("relative flex gap-4", className)}>
            {/* Timeline */}
            <div className="flex flex-col items-center">
                {/* Number Circle */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay }}
                    className={cn(
                        "relative z-10 w-10 h-10 rounded-full",
                        "bg-gradient-to-br from-primary-500 to-primary-600",
                        "flex items-center justify-center",
                        "shadow-lg shadow-primary-500/50",
                        "ring-4 ring-white dark:ring-neutral-900"
                    )}
                >
                    <span className="text-lg font-bold text-white">{number}</span>

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
                    <div className="w-1 flex-1 mt-3 relative overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500 via-primary-300 to-primary-500 bg-[length:100%_200%]"
                            animate={{ backgroundPosition: ["0% 0%", "0% 200%"] }}
                            // @ts-ignore - Framer Motion backgroundPosition animation
                            style={{ backgroundPosition: "0% 0%" }}
                            transition={{
                                height: { duration: 0.8, delay: delay + 0.3 },
                                backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
                            }}
                        />
                    </div>
                )}
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: delay + 0.2 }}
                className={cn(
                    "flex-1 pb-10",
                    "group"
                )}
            >
                <div className={cn(
                    "p-5 rounded-xl",
                    "bg-white dark:bg-neutral-900",
                    "border border-neutral-200 dark:border-neutral-700",
                    "hover:border-primary-500 dark:hover:border-primary-500",
                    "shadow-sm hover:shadow-lg",
                    "transition-all duration-300",
                    "hover:-translate-y-1",
                    "flex items-start justify-between gap-4"
                )}>
                    <div className="flex-1">
                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                            {description}
                        </p>

                        {/* Decorative Element */}
                        <div className="mt-3 flex gap-1">
                            <motion.div
                                className="h-1 bg-primary-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "32px" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: delay + 0.5 }}
                            />
                            <motion.div
                                className="h-1 bg-success-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "20px" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: delay + 0.6 }}
                            />
                            <motion.div
                                className="h-1 bg-primary-300 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "12px" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: delay + 0.7 }}
                            />
                        </div>
                    </div>

                    {/* Icon */}
                    {Icon && (
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                            <Icon size={24} />
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
