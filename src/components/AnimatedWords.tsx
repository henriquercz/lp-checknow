/**
 * Componente AnimatedWords - Palavras animadas alternando
 * Adaptado do 21st.dev para CheckNow
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedWordsProps {
  words: string[];
  className?: string;
}

export function AnimatedWords({ words, className = "" }: AnimatedWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (index === words.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2500); // Troca a cada 2.5 segundos

    return () => clearTimeout(timeoutId);
  }, [index, words]);

  return (
    <span className={`relative inline-flex justify-center overflow-visible h-[1.2em] align-bottom ${className}`}>
      <span className="invisible">{words[0]}</span>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          className="absolute font-bold left-0 right-0 text-center text-primary-500 dark:text-success-500"
          initial={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          animate={
            index === idx
              ? {
                  y: "0%",
                  opacity: 1,
                }
              : {
                  y: index > idx ? "-100%" : "100%",
                  opacity: 0,
                }
          }
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
