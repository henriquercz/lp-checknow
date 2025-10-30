/**
 * Componente StructuredData - Schema.org JSON-LD para SEO
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

"use client";

import Script from 'next/script';

export const StructuredData = () => {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CheckNow",
    "alternateName": "CheckNow App",
    "url": "https://checknow.app",
    "logo": "https://checknow.app/images/logo.png",
    "description": "Plataforma de verificação de notícias com inteligência artificial para combater a desinformação no Brasil e América Latina",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "CheckNow Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "Brasil"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://instagram.com/checknow.br"
    },
    "sameAs": [
      "https://instagram.com/checknow.br"
    ]
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CheckNow",
    "url": "https://checknow.app",
    "description": "Verificador inteligente de notícias com IA para combater fake news",
    "publisher": {
      "@type": "Organization",
      "name": "CheckNow"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://checknow.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // WebApplication Schema
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "CheckNow",
    "url": "https://checknow.app",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Aplicativo de verificação de notícias com inteligência artificial. Identifique fake news em segundos e proteja-se contra desinformação.",
    "screenshot": "https://checknow.app/images/checkito/checkito_tela1.png",
    "featureList": [
      "Verificação instantânea de notícias",
      "Análise com inteligência artificial",
      "Histórico de verificações",
      "Relatórios detalhados",
      "Alertas de fake news",
      "Comunidade de verificadores"
    ]
  };

  // SoftwareApplication Schema
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CheckNow",
    "applicationCategory": "NewsApplication",
    "operatingSystem": "Android, iOS, Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  // Product Schema (para planos premium)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CheckNow Premium",
    "description": "Plano premium do CheckNow com recursos avançados de verificação de notícias",
    "brand": {
      "@type": "Brand",
      "name": "CheckNow"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Plano Gratuito",
        "price": "0",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Plano Pro",
        "price": "19.90",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31"
      },
      {
        "@type": "Offer",
        "name": "Plano Business",
        "price": "49.90",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31"
      }
    ]
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é o CheckNow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O CheckNow é uma plataforma de verificação de notícias que utiliza inteligência artificial para identificar fake news e combater a desinformação. Oferecemos análise instantânea de notícias com tecnologia de ponta."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona a verificação de notícias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossa IA analisa múltiplas fontes, verifica a credibilidade das informações e compara com bases de dados confiáveis para determinar a veracidade de uma notícia em segundos."
        }
      },
      {
        "@type": "Question",
        "name": "O CheckNow é gratuito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Oferecemos um plano gratuito com verificações ilimitadas. Também temos planos Pro e Business com recursos avançados para usuários e empresas."
        }
      },
      {
        "@type": "Question",
        "name": "Como posso começar a usar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basta baixar o aplicativo CheckNow na App Store ou Google Play, criar uma conta gratuita e começar a verificar notícias imediatamente."
        }
      }
    ]
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://checknow.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Recursos",
        "item": "https://checknow.app/#features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Como Funciona",
        "item": "https://checknow.app/#how-it-works"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Preços",
        "item": "https://checknow.app/#pricing"
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="webapplication-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <Script
        id="softwareapplication-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
