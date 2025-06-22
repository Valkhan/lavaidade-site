# 🌸 La Vaidade - Site Moderno de Clínica Estética

Site moderno e responsivo para a **La Vaidade**, clínica especializada em estética facial e corporal que também oferece aluguel de equipamentos profissionais para estetas.

## 🎯 **Visão Geral do Projeto**

O site foi desenvolvido com foco em **UX moderno**, **design feminino** e **conversão de clientes**, atendendo dois públicos distintos:
- **Consumidores finais**: Procedimentos estéticos (facial, corporal, emagrecimento, rejuvenescimento)
- **Profissionais da estética**: Aluguel de equipamentos de última geração

## ✨ **Características Principais**

### 🎨 **Design**
- **Paleta de cores**: Rosa claro (#FFB6C1) e ouro (#D4A574)
- **Tipografia**: Playfair Display (títulos) + Inter (corpo)
- **Layout**: Clean, elegante e feminino
- **Responsividade**: Mobile-first design

### 🚀 **Tecnologias**
- **HTML5** semântico
- **CSS3** moderno com variáveis CSS
- **JavaScript** vanilla (ES6+)
- **FontAwesome** para ícones
- **Google Fonts** para tipografia

### 📱 **Funcionalidades**
- ✅ Design totalmente responsivo
- ✅ Navegação intuitiva e acessível
- ✅ Filtros de serviços por categoria
- ✅ Modal de detalhes dos equipamentos
- ✅ Galeria antes/depois
- ✅ Slider de depoimentos
- ✅ Integração com WhatsApp
- ✅ Animações suaves e modernas
- ✅ SEO otimizado

## 📁 **Estrutura do Projeto**

```
lavaidade-site/
├── index.html              # Landing page principal
├── servicos.html           # Página de procedimentos estéticos
├── equipamentos.html       # Página de aluguel de equipamentos
├── css/
│   ├── styles.css          # Estilos principais
│   ├── services.css        # Estilos da página de serviços
│   └── equipments.css      # Estilos da página de equipamentos
├── js/
│   ├── main.js            # JavaScript principal
│   ├── services.js        # JS da página de serviços
│   └── equipments.js      # JS da página de equipamentos
├── assets/                # Imagens e recursos
└── README.md             # Documentação
```

## 🌟 **Páginas do Site**

### 1. **Landing Page (`index.html`)**
- Hero section com chamada principal
- Seção para dois públicos-alvo
- Procedimentos em destaque
- Categorias de serviços
- Galeria antes/depois (com tabs)
- Depoimentos dos clientes
- Seção sobre a empresa
- CTAs para WhatsApp

### 2. **Procedimentos (`servicos.html`)**
- Filtros por categoria (Facial, Corporal, Emagrecimento, Rejuvenescimento)
- Cards detalhados com:
  - Preços transparentes
  - Duração das sessões
  - Benefícios do tratamento
  - CTAs diretos para WhatsApp
- Design focado em conversão

### 3. **Equipamentos (`equipamentos.html`)**
- Catálogo completo de equipamentos
- Filtros por tipo de tecnologia
- Modal com detalhes técnicos
- Planos de locação (Básico, Profissional, Premium)
- Benefícios da locação
- CTAs para contato comercial

## 🎨 **Paleta de Cores**

```css
--primary-color: #FFB6C1;    /* Rosa claro */
--primary-dark: #FF91A4;     /* Rosa mais escuro */
--secondary-color: #D4A574;   /* Ouro/dourado */
--accent-color: #F8E8E8;     /* Rosa muito claro */
--success-color: #25D366;     /* WhatsApp verde */
```

## 📱 **Responsividade**

O site é totalmente responsivo com breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🚀 **Como Executar**

1. Clone o repositório
2. Abra `index.html` em um navegador moderno
3. Para desenvolvimento local, use um servidor HTTP:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js (live-server)
   npx live-server
   ```

## 📈 **Otimizações Implementadas**

### Performance
- ✅ Lazy loading de imagens
- ✅ CSS e JS minificados (produção)
- ✅ Fontes web otimizadas
- ✅ Compressão de imagens

### SEO
- ✅ Meta tags otimizadas
- ✅ Estrutura semântica
- ✅ Schema.org markup
- ✅ URLs amigáveis
- ✅ Sitemap.xml

### Acessibilidade
- ✅ Navegação por teclado
- ✅ Alt text em imagens
- ✅ Contraste adequado
- ✅ ARIA labels
- ✅ Focus visível

## 💬 **Integração WhatsApp**

Todas as CTAs direcionam para WhatsApp com mensagens personalizadas:
- Agendamento de procedimentos
- Consulta sobre equipamentos
- Planos de locação
- Suporte geral

## 🎯 **Conversões Implementadas**

1. **Botões de ação visíveis** em todas as seções
2. **Preços transparentes** para gerar confiança
3. **Depoimentos reais** para social proof
4. **Galeria antes/depois** para mostrar resultados
5. **WhatsApp integrado** para facilitar contato
6. **Design feminino** que conecta com o público-alvo

## 🔧 **Manutenção**

Para atualizar:
- **Serviços**: Edite `servicos.html` e `js/services.js`
- **Equipamentos**: Edite `equipamentos.html` e `js/equipments.js`
- **Estilos**: Modifique as variáveis CSS em `css/styles.css`
- **Conteúdo**: Atualize textos e imagens diretamente nos HTMLs

## 📊 **Analytics**

O site está preparado para integração com:
- Google Analytics 4
- Facebook Pixel
- Google Tag Manager
- Hotjar/Clarity

---

**Desenvolvido com 💖 para La Vaidade**  
*Clínica de estética moderna e profissional*

