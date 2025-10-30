/**
 * Constantes da Landing Page CheckNow
 * Autor: Capitão Henrique
 * Data: Outubro 2025
 * Versão: 1.0.0
 */

// Cores do Design System
export const COLORS = {
  primary: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    500: "#2563EB",
    600: "#1D4ED8",
    700: "#1E40AF",
  },
  success: {
    500: "#22C55E",
    600: "#16A34A",
  },
  error: {
    500: "#EF4444",
    600: "#DC2626",
  },
  warning: {
    500: "#F59E0B",
    600: "#D97706",
  },
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
};

// Features do CheckNow
export const FEATURES = [
  {
    id: 1,
    title: "Verificação Inteligente",
    description: "Análise com IA avançada (Checkito) para detectar fake news em segundos",
    icon: "Shield",
  },
  {
    id: 2,
    title: "Múltiplos Formatos",
    description: "Verifique textos e links de notícias com um único toque",
    icon: "Link",
  },
  {
    id: 3,
    title: "Contexto Web",
    description: "Busca automática de fontes confiáveis para análise mais precisa",
    icon: "Globe",
  },
  {
    id: 4,
    title: "Histórico Completo",
    description: "Acesse todas as suas verificações organizadas cronologicamente",
    icon: "Clock",
  },
  {
    id: 5,
    title: "Central de Notícias",
    description: "Feed atualizado com notícias do Brasil verificadas em tempo real",
    icon: "Newspaper",
  },
  {
    id: 6,
    title: "Sistema Premium",
    description: "Verificações ilimitadas com plano premium por um preço acessível",
    icon: "Crown",
  },
];

// Passos do processo
export const STEPS = [
  {
    id: 1,
    title: "Cole a Notícia",
    description: "Insira o texto ou link da notícia que deseja verificar",
  },
  {
    id: 2,
    title: "IA Analisa",
    description: "Nossa inteligência artificial processa e analisa o conteúdo",
  },
  {
    id: 3,
    title: "Busca Contexto",
    description: "Sistema busca fontes confiáveis para validação",
  },
  {
    id: 4,
    title: "Receba Resultado",
    description: "Resultado detalhado com veredito, explicação e fontes",
  },
];

// Planos de preço
export const PLANS = [
  {
    id: 1,
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "3 verificações por mês",
      "Acesso ao histórico",
      "Central de notícias",
      "Suporte por email",
    ],
    cta: "Começar Agora",
    highlighted: false,
  },
  {
    id: 2,
    name: "Premium",
    price: "R$ 19,99",
    period: "/mês",
    description: "Para usuários frequentes",
    features: [
      "Verificações ilimitadas",
      "Histórico completo",
      "Central de notícias",
      "Suporte prioritário",
      "Relatórios detalhados",
      "Sem anúncios",
    ],
    cta: "Assinar Agora",
    highlighted: true,
  },
];

// Depoimentos
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Jornalista",
    content: "CheckNow revolucionou meu workflow de verificação de fatos. Rápido e preciso!",
    rating: 5,
    avatar: "MS",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Professor",
    content: "Excelente ferramenta para ensinar alunos sobre desinformação e pensamento crítico.",
    rating: 5,
    avatar: "JS",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Pesquisadora",
    content: "A precisão da IA é impressionante. Recomendo para qualquer um preocupado com fake news.",
    rating: 5,
    avatar: "AC",
  },
];

// FAQ
export const FAQ = [
  {
    id: 1,
    question: "Como o CheckNow detecta fake news?",
    answer:
      "Usamos o Checkito, nossa IA para análise semântica avançada, combinada com busca web em fontes confiáveis. O sistema compara informações e gera um veredito baseado em evidências.",
  },
  {
    id: 2,
    question: "Quantas verificações posso fazer por dia?",
    answer:
      "Usuários gratuitos têm 3 verificações por mês, sendo possível gastar as 3 no mesmo dia. Usuários premium têm verificações ilimitadas. O limite se reseta todos os meses no dia 1.",
  },
  {
    id: 3,
    question: "Meus dados são seguros?",
    answer:
      "Sim! Usamos Supabase com Row Level Security, criptografia end-to-end e conformidade com LGPD. Seus dados nunca são compartilhados com terceiros.",
  },
  {
    id: 4,
    question: "Como funciona o plano premium?",
    answer:
      "O plano premium oferece verificações ilimitadas, suporte prioritário e acesso a relatórios detalhados. Você pode cancelar a qualquer momento sem penalidades.",
  },
  {
    id: 5,
    question: "CheckNow funciona offline?",
    answer:
      "Não, CheckNow requer conexão com internet pois precisa acessar APIs de IA e busca web. Mas seus dados são sincronizados localmente para acesso rápido.",
  },
  {
    id: 6,
    question: "Qual é a precisão do CheckNow?",
    answer:
      "Nosso APP tem taxa de acurácia de ~99% em detecção de fake news. Pois juntamos IA e busca web em fontes confiáveis.",
  },
];

// Links de navegação
export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Como Funciona", href: "#how-it-works" },
  { label: "Preços", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contact" },
];

// Links de redes sociais
export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/ricks18/checknow", icon: "Github" },
  { name: "Twitter", url: "https://twitter.com/checknow", icon: "Twitter" },
  { name: "Instagram", url: "https://instagram.com/checknow", icon: "Instagram" },
  { name: "LinkedIn", url: "https://linkedin.com/company/checknow", icon: "Linkedin" },
];

// Links do footer
export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Preços", href: "#pricing" },
    { label: "Download", href: "#download" },
  ],
  company: [
    { label: "Sobre", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "#contact" },
  ],
  legal: [
    { label: "Privacidade", href: "/privacy" },
    { label: "Termos", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
};
