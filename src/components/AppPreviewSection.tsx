/**
 * Componente AppPreviewSection - Seção de Preview do App com Scroll Lock Real
 * Data: Novembro 2025
 * Versão: 2.0.0
 * 
 * OBS: Implementa lógica de "Scroll Hijacking" para navegar pelas telas do celular
 * antes de permitir que o usuário continue rolando a página.
 */

"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/Container";

// Configuração das telas
const SCREENS = [
    { id: 1, src: "/images/smartphone/home.PNG", alt: "Tela Inicial" },
    { id: 2, src: "/images/smartphone/noticias.PNG", alt: "Notícias" },
    { id: 3, src: "/images/smartphone/veredito.PNG", alt: "Veredito" },
    { id: 4, src: "/images/smartphone/educacao.PNG", alt: "Educação" },
];

export function AppPreviewSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [currentScreen, setCurrentScreen] = useState(0);

    // Refs para controle de lógica dentro dos event listeners (evita re-renders/re-binds)
    const currentScreenRef = useRef(0);
    const isLockedRef = useRef(false);
    const scrollAccumulator = useRef(0);
    const touchStartY = useRef(0);
    const lastScrollTime = useRef(0);

    // Sincroniza ref com state
    useEffect(() => {
        currentScreenRef.current = currentScreen;
    }, [currentScreen]);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Verifica se a seção está ocupando a maior parte da tela (foco)
            // Margem de erro de 100px para garantir que pegue mesmo se não estiver pixel-perfect
            const isFocused = rect.top <= 100 && rect.bottom >= viewportHeight - 100;

            if (!isFocused) {
                isLockedRef.current = false;
                return;
            }

            const delta = e.deltaY;
            const now = Date.now();

            // Lógica de liberação do scroll (Boundaries)
            // Se está na primeira tela e rola pra cima -> Libera scroll da página
            if (currentScreenRef.current === 0 && delta < 0) {
                isLockedRef.current = false;
                return;
            }
            // Se está na última tela e rola pra baixo -> Libera scroll da página
            if (currentScreenRef.current === SCREENS.length - 1 && delta > 0) {
                isLockedRef.current = false;
                return;
            }

            // Se chegou aqui, TRAVA o scroll da página e navega internamente
            e.preventDefault();
            isLockedRef.current = true;

            // Acumulador para suavizar o scroll (evita mudar slides muito rápido com trackpads sensíveis)
            scrollAccumulator.current += delta;

            // Throttle para evitar mudanças múltiplas muito rápidas
            if (now - lastScrollTime.current < 500 && Math.abs(scrollAccumulator.current) < 50) return;

            const THRESHOLD = 30; // Sensibilidade do scroll

            if (scrollAccumulator.current > THRESHOLD) {
                // Próxima tela
                if (currentScreenRef.current < SCREENS.length - 1) {
                    setCurrentScreen(prev => prev + 1);
                    scrollAccumulator.current = 0;
                    lastScrollTime.current = now;
                }
            } else if (scrollAccumulator.current < -THRESHOLD) {
                // Tela anterior
                if (currentScreenRef.current > 0) {
                    setCurrentScreen(prev => prev - 1);
                    scrollAccumulator.current = 0;
                    lastScrollTime.current = now;
                }
            }
        };

        // Lógica para Mobile (Touch)
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const isFocused = rect.top <= 50 && rect.bottom >= window.innerHeight - 50;

            if (!isFocused) return;

            const touchY = e.touches[0].clientY;
            const delta = touchStartY.current - touchY; // Positivo = deslizar para cima (scroll down)

            // Mesma lógica de boundaries do desktop
            if (currentScreenRef.current === 0 && delta < 0) return;
            if (currentScreenRef.current === SCREENS.length - 1 && delta > 0) return;

            // Trava scroll nativo se estiver navegando nas telas
            if (Math.abs(delta) > 5) { // Pequena zona morta
                e.preventDefault();
            }
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const isFocused = rect.top <= 50 && rect.bottom >= window.innerHeight - 50;

            if (!isFocused) return;

            const touchY = e.changedTouches[0].clientY;
            const delta = touchStartY.current - touchY;
            const SWIPE_THRESHOLD = 50;

            if (currentScreenRef.current === 0 && delta < -SWIPE_THRESHOLD) return;
            if (currentScreenRef.current === SCREENS.length - 1 && delta > SWIPE_THRESHOLD) return;

            if (delta > SWIPE_THRESHOLD) {
                setCurrentScreen(prev => Math.min(prev + 1, SCREENS.length - 1));
            } else if (delta < -SWIPE_THRESHOLD) {
                setCurrentScreen(prev => Math.max(prev - 1, 0));
            }
        };

        // Adiciona listeners com { passive: false } para permitir preventDefault
        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("touchend", handleTouchEnd, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, []); // Executa apenas uma vez na montagem

    return (
        <section
            ref={sectionRef}
            className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-500/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-blue-500/8 rounded-full blur-[140px]" />
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <Container size="lg" className="relative z-10 w-full h-full flex flex-col justify-center">

                {/* Título e Descrição */}
                <div className="text-center mb-8 relative z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400"
                    >
                        Experiência Intuitiva e <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-blue-600">Poderosa</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
                    >
                        Verifique notícias com apenas alguns toques. <span className="text-primary-600 dark:text-primary-400 font-medium">Role para navegar pelo app</span>.
                    </motion.p>
                </div>

                {/* Área do Celular e Mascote */}
                <div className="relative flex justify-center items-center gap-8 lg:gap-16">

                    {/* Celular Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative z-10 w-[280px] md:w-[320px]"
                    >
                        <div className="relative aspect-[9/19] bg-neutral-900 rounded-[3rem] p-3 shadow-2xl border-4 border-neutral-800">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-neutral-900 rounded-b-2xl z-30" />

                            {/* Botões Laterais */}
                            <div className="absolute top-20 -right-[2px] w-[2px] h-12 bg-neutral-700 rounded-r-sm" />
                            <div className="absolute top-20 -left-[2px] w-[2px] h-8 bg-neutral-700 rounded-l-sm" />
                            <div className="absolute top-36 -left-[2px] w-[2px] h-12 bg-neutral-700 rounded-l-sm" />

                            {/* Tela */}
                            <div className="relative w-full h-full bg-white dark:bg-neutral-800 rounded-[2.4rem] overflow-hidden shadow-inner">

                                {/* Barra de Status Fake */}
                                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/10 to-transparent z-20 flex items-center justify-between px-6 pt-2">
                                    <span className="text-xs font-semibold text-neutral-800 dark:text-white">9:41</span>
                                    <div className="flex gap-1 items-center">
                                        <div className="w-4 h-4 rounded-full border border-neutral-800 dark:border-white opacity-50" />
                                        <div className="w-4 h-4 rounded-full border border-neutral-800 dark:border-white opacity-50" />
                                    </div>
                                </div>

                                {/* Container das Imagens (Carrossel Vertical) */}
                                <div className="relative w-full h-full overflow-hidden">
                                    <motion.div
                                        className="w-full h-full"
                                        animate={{ y: `-${currentScreen * 100}%` }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    >
                                        {SCREENS.map((screen) => (
                                            <div key={screen.id} className="w-full h-full relative">
                                                <Image
                                                    src={screen.src}
                                                    alt={screen.alt}
                                                    fill
                                                    className="object-cover"
                                                    priority={screen.id === 1}
                                                />
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Botão Home */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-neutral-700 rounded-full" />
                        </div>

                        {/* Indicadores de Navegação (Dots) */}
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                            {SCREENS.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentScreen
                                        ? "bg-primary-500 h-4"
                                        : "bg-neutral-300 dark:bg-neutral-700"
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Mascote Flutuante (Fixo ao lado do celular) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="hidden lg:block relative z-20"
                    >
                        <motion.div
                            animate={{ y: [-12, 12, -12] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Image
                                src="/images/checkito/checkito_tela3.png"
                                alt="Checkito Mascote"
                                width={350}
                                height={350}
                                className="object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
