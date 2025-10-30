# 🚀 Landing Page CheckNow

Landing page profissional e moderna para o CheckNow - Verificador Inteligente de Notícias.

## 📋 Sobre o Projeto

Esta é a landing page oficial do CheckNow, desenvolvida com Next.js 15, Tailwind CSS v4 e Framer Motion. A página apresenta o aplicativo de forma atrativa, com componentes animados e interativos de alta qualidade.

## 🎯 Características

- ✨ **Componentes Animados**: Spline 3D, Container Scroll, Animated Hero
- 📱 **100% Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🎨 **Design Moderno**: Tailwind CSS com paleta de cores do CheckNow
- ⚡ **Performance**: Otimizado para Lighthouse > 90
- 🌙 **Tema Claro/Escuro**: Suporte completo a modo escuro
- ♿ **Acessível**: WCAG 2.1 AA compliance
- 🔐 **Seguro**: Headers de segurança configurados

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Linguagem**: TypeScript
- **Componentes**: shadcn/ui (quando necessário)

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ (recomendado 20+)
- npm ou yarn

### Passos

1. **Instale as dependências**:

```bash
npm install
```

2. **Inicie o servidor de desenvolvimento**:

```bash
npm run dev
```

3. **Abra no navegador**:

```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
lp-checknow/
├── public/                 # Arquivos estáticos
│   ├── images/            # Screenshots, logos
│   └── videos/            # Vídeos de demonstração
├── src/
│   ├── app/               # App Router do Next.js
│   │   ├── layout.tsx     # Layout raiz
│   │   ├── page.tsx       # Página inicial
│   │   └── globals.css    # Estilos globais
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── lib/               # Utilitários
│   │   ├── constants.ts   # Constantes
│   │   └── utils.ts       # Funções auxiliares
│   └── styles/            # Estilos adicionais
├── tailwind.config.ts     # Configuração Tailwind
├── tsconfig.json          # Configuração TypeScript
├── next.config.ts         # Configuração Next.js
└── package.json           # Dependências
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Verificar tipos TypeScript
npm run type-check

# Lint do código
npm run lint
```

## 🎨 Paleta de Cores

### Cores Principais

- **Primary**: `#2563EB` (Azul)
- **Success**: `#22C55E` (Verde)
- **Error**: `#EF4444` (Vermelho)
- **Warning**: `#F59E0B` (Amarelo)

### Cores Neutras

- **50**: `#F9FAFB`
- **100**: `#F3F4F6`
- **200**: `#E5E7EB`
- **500**: `#6B7280`
- **700**: `#374151`
- **900**: `#111827`

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔐 Segurança

- Headers de segurança configurados
- Proteção contra XSS
- CORS configurado
- Sem hardcode de chaves/tokens
- Variáveis de ambiente seguras

## 📊 Performance

- Lighthouse Score: > 90
- Core Web Vitals otimizados
- Imagens otimizadas
- Code splitting automático
- Lazy loading de componentes

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push para GitHub
2. Conecte o repositório no Vercel
3. Deploy automático em cada push

### Outras Plataformas

```bash
# Build
npm run build

# Iniciar
npm start
```

## 📝 Commits

Todos os commits devem ser em português seguindo o padrão:

```
git commit -m "feat: adiciona seção de features"
git commit -m "fix: corrige responsividade no mobile"
git commit -m "docs: atualiza README"
```

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
2. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
3. Push para a branch (`git push origin feature/nova-feature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto é parte do CheckNow TCC 2025.

## 👨‍💻 Desenvolvedor

**Capitão Henrique**

- GitHub: [@ricks18](https://github.com/ricks18)
- Email: henrique@checknow.app

## 🙏 Agradecimentos

- Etec Taboão da Serra
- Comunidade Next.js
- Tailwind CSS Team
- Framer Motion Team

---

**CheckNow v2.8** - Verificador Inteligente de Notícias 🛡️
