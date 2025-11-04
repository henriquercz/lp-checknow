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
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://checknow.app'),
  title: {
    default: "CheckNow - Verificador Inteligente de Notícias com IA",
    template: "%s | CheckNow"
  },
  description:
    "Combata a desinformação com inteligência artificial. Verifique notícias em segundos, identifique fake news e proteja-se contra informações falsas. Tecnologia de ponta para fact-checking no Brasil.",
  keywords: [
    "fake news",
    "verificação de notícias",
    "desinformação",
    "inteligência artificial",
    "IA",
    "fact-checking",
    "checagem de fatos",
    "notícias falsas",
    "verificador de notícias",
    "combate à desinformação",
    "análise de notícias",
    "detector de fake news",
    "verificação automática",
    "tecnologia contra fake news",
    "Brasil",
    "América Latina"
  ],
  authors: [{ name: "CheckNow Team", url: "https://checknow.app" }],
  creator: "CheckNow",
  publisher: "CheckNow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://checknow.app",
    title: "CheckNow - Verificador Inteligente de Notícias com IA",
    description:
      "Combata a desinformação com inteligência artificial. Verifique notícias em segundos, identifique fake news e proteja-se contra informações falsas.",
    siteName: "CheckNow",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CheckNow - Verificador Inteligente de Notícias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckNow - Verificador Inteligente de Notícias com IA",
    description:
      "Combata a desinformação com inteligência artificial. Verifique notícias em segundos com o CheckNow.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://checknow.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CheckNow" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://checknowbr.vercel.app" />
        <link rel="preconnect" href="https://xout2xjgsj0csshv.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://checknowbr.vercel.app" />
        <link rel="preload" href="/images/checkito/checkito_tela1.png" as="image" fetchPriority="high" />
        <link rel="preload" href="/images/logo-sem-fundo.png" as="image" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const html = document.documentElement;
                
                if (theme === 'dark') {
                  html.classList.add('dark');
                } else if (theme === 'light') {
                  html.classList.remove('dark');
                } else {
                  // Se não tem preferência salva, usa a do sistema
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (systemPrefersDark) {
                    html.classList.add('dark');
                  } else {
                    html.classList.remove('dark');
                  }
                }
              } catch (e) {}
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
