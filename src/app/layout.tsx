/**
 * Layout Raiz da Landing Page CheckNow
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CheckNow - Verificador Inteligente de Notícias",
  description:
    "Combata a desinformação com inteligência artificial. Verifique notícias em segundos com o CheckNow.",
  keywords: [
    "fake news",
    "verificação de notícias",
    "desinformação",
    "IA",
    "fact-checking",
  ],
  authors: [{ name: "Capitão Henrique" }],
  creator: "Capitão Henrique",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://checknow.app",
    title: "CheckNow - Verificador Inteligente de Notícias",
    description:
      "Combata a desinformação com inteligência artificial. Verifique notícias em segundos com o CheckNow.",
    siteName: "CheckNow",
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckNow - Verificador Inteligente de Notícias",
    description:
      "Combata a desinformação com inteligência artificial. Verifique notícias em segundos com o CheckNow.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 font-inter antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
