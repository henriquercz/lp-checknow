# ⚡ Guia Rápido - Landing Page CheckNow

**Capitão Henrique**, este é um guia rápido para começar a trabalhar no projeto.

## 🚀 Começar Agora

### 1. Instalar Dependências
```bash
cd "d:\4 - TCC e InterDisciplinar\fato seguro\lp-checknow"
npm install
```

### 2. Iniciar Desenvolvimento
```bash
npm run dev
```
Acesse: `http://localhost:3000`

### 3. Fazer Alterações
- Edite arquivos em `src/`
- As mudanças aparecem automaticamente no navegador

## 📁 Estrutura Importante

```
src/
├── app/
│   ├── page.tsx         ← Página inicial (edite aqui)
│   ├── layout.tsx       ← Layout raiz
│   └── globals.css      ← Estilos globais
├── components/
│   ├── Button.tsx       ← Botão reutilizável
│   ├── Navbar.tsx       ← Navegação
│   ├── Footer.tsx       ← Rodapé
│   └── Container.tsx    ← Container responsivo
└── lib/
    ├── constants.ts     ← Dados (features, planos, etc)
    └── utils.ts         ← Funções auxiliares
```

## 🎨 Cores Principais

```
Primary (Azul):    #2563EB
Success (Verde):   #22C55E
Error (Vermelho):  #EF4444
Warning (Amarelo): #F59E0B
```

Use no Tailwind: `bg-primary-500`, `text-primary-600`, etc.

## 🔧 Tarefas Comuns

### Adicionar Nova Seção
1. Crie um novo componente em `src/components/`
2. Importe em `src/app/page.tsx`
3. Adicione entre as seções existentes

### Editar Dados (Features, Planos, etc)
Edite `src/lib/constants.ts`

### Adicionar Ícone
```tsx
import { IconName } from "lucide-react";
<IconName size={24} />
```

### Adicionar Animação
```tsx
import { motion } from "framer-motion";
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo
</motion.div>
```

## 📱 Breakpoints Tailwind

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Exemplo: `md:text-2xl` (texto grande em tablets+)

## 🎬 Próximas Tarefas

1. **Adicionar Componentes Animados** (21st.dev)
   - Spline 3D Robot
   - Container Scroll Animation
   - Animated Hero
   - Interactive Button

2. **Adicionar Imagens**
   - Screenshots do app
   - Logo
   - Ícones customizados

3. **Otimizações**
   - SEO
   - Performance
   - Acessibilidade

## 🐛 Troubleshooting Rápido

### Erro: "Cannot find module"
```bash
npm install
```

### Página não atualiza
- Salve o arquivo
- Verifique o console (F12)
- Reinicie: `npm run dev`

### Tailwind não funciona
- Verifique se a classe existe em `tailwind.config.ts`
- Limpe cache: `npm run clean`

## 📚 Documentação Completa

- `PROJETO_LP.md` - Análise detalhada
- `README.md` - Guia completo
- `SETUP_INSTRUCTIONS.md` - Setup passo a passo
- `RESUMO_DESENVOLVIMENTO.md` - O que foi feito

## 💡 Dicas Rápidas

- Use `className` para Tailwind
- Use `motion.` para Framer Motion
- Use `lucide-react` para ícones
- Componentes em `src/components/`
- Dados em `src/lib/constants.ts`
- Estilos globais em `src/app/globals.css`

## 🎯 Checklist Diário

- [ ] Instalar dependências (`npm install`)
- [ ] Iniciar servidor (`npm run dev`)
- [ ] Fazer alterações
- [ ] Testar no navegador
- [ ] Fazer commit (`git commit -m "..."`)

## 📞 Suporte Rápido

**Erro comum**: Tailwind não funciona
**Solução**: Verifique se está usando `className` (não `class`)

**Erro comum**: Ícone não aparece
**Solução**: Verifique o nome exato em `lucide-react`

**Erro comum**: Animação não funciona
**Solução**: Verifique se importou `motion` de `framer-motion`

---

**Pronto para começar?** Execute:
```bash
npm install && npm run dev
```

Boa sorte! 🚀
