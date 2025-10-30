/**
 * Componente TubelightNavbar - Navbar moderna com efeito tubelight
 * Adaptado do 21st.dev para CheckNow
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon, Home, Shield, DollarSign, HelpCircle, Download, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface TubelightNavbarProps {
  className?: string;
}

const navItems: NavItem[] = [
  { name: "Início", url: "#", icon: Home },
  { name: "Features", url: "#features", icon: Shield },
  { name: "Preços", url: "#pricing", icon: DollarSign },
  { name: "FAQ", url: "#faq", icon: HelpCircle },
];

export function TubelightNavbar({ className }: TubelightNavbarProps) {
  const [activeTab, setActiveTab] = useState(navItems[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Detecta tema inicial do DOM
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };
    
    checkTheme();
    
    // Observer para detectar mudanças no tema
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    setActiveTab(item.name);
    
    // Scroll suave para a seção
    if (item.url.startsWith("#")) {
      const element = document.querySelector(item.url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6",
        className
      )}
    >
      <div className="flex items-center gap-1 bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 backdrop-blur-lg py-1.5 px-1.5 rounded-full shadow-lg">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 px-4 hover:opacity-80 transition-opacity">
          <img 
            src="/images/logo-sem-fundo.png" 
            alt="CheckNow Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="font-bold text-base hidden sm:inline">CheckNow</span>
        </a>

        {/* Divider */}
        <div className="w-px h-8 bg-neutral-200 dark:bg-neutral-700" />

        {/* Nav Items */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(e, item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                "text-neutral-600 dark:text-neutral-400 hover:text-primary-500",
                isActive && "text-primary-500"
              )}
            >
              {isMobile ? (
                <Icon size={18} strokeWidth={2.5} />
              ) : (
                <span>{item.name}</span>
              )}
              
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary-500/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary-500 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary-500/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary-500/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary-500/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}

        {/* Divider */}
        <div className="w-px h-8 bg-neutral-200 dark:bg-neutral-700" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun size={18} className="text-yellow-500" />
          ) : (
            <Moon size={18} className="text-neutral-600" />
          )}
        </button>

        {/* CTA Button */}
        <Button 
          size="sm" 
          icon={<Download size={16} />} 
          className="ml-1 mr-1 !rounded-full px-5 py-2.5"
        >
          <span className="hidden sm:inline">Baixar</span>
        </Button>
      </div>
    </nav>
  );
}
