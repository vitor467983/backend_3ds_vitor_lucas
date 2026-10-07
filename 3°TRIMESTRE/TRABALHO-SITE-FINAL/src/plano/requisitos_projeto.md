# Especificação de Requisitos do Projeto - E-Commerce Varejo

Este documento descreve as páginas, o fluxo de navegação através de rotas e os requisitos gerais do sistema de comércio eletrônico.

## 🧭 Componentes Globais (Presentes em todas as páginas)

### 1. Cabeçalho Fixo (Header)
*   **Comportamento:** Fixado no topo da tela (`position: fixed`) durante a rolagem, com fundo opaco e leve sombra para separação do conteúdo.
*   **Elementos:**
    *   Logotipo da empresa à esquerda (com destaque na cor primária).
    *   Menu de navegação à direita com links para: `Início (/)`, `Produtos (/produtos)`, `Carrinho (/carrinho)`, `Pedidos (/pedidos)`, `Sobre (/sobre)` e `Contato (/contato)`.
*   **Responsividade:** Em telas menores (mobile), o menu deve se transformar em um formato colapsável (Hambúrguer) acionado puramente 

## 🎨 Diretrizes Visuais Globais

Os seguintes estilos e cores devem ser aplicados consistentemente em todas as páginas por meio de variáveis CSS (`:root`):

*   **Cor Primária:** Vermelho (`#D32F2F` ou similar corporativo) — Destinado a botões de ação principal (CTAs), destaques importantes, logomarca e links ativos.
*   **Cor Secundária:** Laranja (`#F57C00` ou similar vibrante) — Destinado a estados de *hover*, botões secundários, bordas decorativas e elementos de suporte visual.
*   **Cor de Fundo:** Cinza Escuro (`#121212` ou `#1E1E1E`) — Base predominante do site, garantindo uma estética moderna no estilo *Dark Mode*.
*   **Cor do Texto:** Branco (`#FFFFFF` ou `#F5F5F5` para legibilidade) — Aplicado em todo o conteúdo textual e títulos para garantir alto contraste sobre o fundo cinza.

