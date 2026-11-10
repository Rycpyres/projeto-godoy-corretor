# Backlog de Engenharia, Infraestrutura e Produto — Godoy Corretor

> **Projeto:** Godoy Corretor — Presença Digital e Plataforma Comercial  
> **Data de Atualização:** 10/11/2026  
> **Status:** Ativo  

---

## 1. Visão Geral

Este documento consolida os itens técnicos, arquiteturais e de produto para a evolução do ecossistema digital do **Godoy Corretor**, garantindo escalabilidade, baixo custo de operação e separação rigorosa entre código de aplicação e acervo de mídia.

---

## 2. Itens Priorizados

### 🏗️ Infraestrutura & Armazenamento (S3 + CloudFront)

#### [INFRA-01] Arquitetura de Mídia Desacoplada (Git Leve vs. S3 Storage)
- **Contexto:** O acervo de fotos brutas dos imóveis recebidas de clientes e proprietários supera 300 MB e crescerá continuamente. Arquivos de mídia não devem residir no repositório Git.
- **Implementação:**
  - Configuração do `.gitignore` para bloquear pastas de imóveis brutos (`*.jpeg`, `*.jpg`, pastas individuais de condomínios).
  - Alocação dos arquivos no bucket S3 sob o prefixo `/imoveis/` (mesmo bucket da aplicação estática para manter o mesmo domínio CloudFront sem custos adicionais).
  - Configuração de cabeçalhos de cache no S3: `Cache-Control: public, max-age=31536000, immutable`.
- **Status:** Planejado.

#### [INFRA-02] Pipeline de Otimização e Conversão de Imagens (`process-images.js`)
- **Contexto:** Fotos originais de celular/WhatsApp possuem nomes com espaços/acentos e formatos pesados.
- **Implementação:**
  - Script em Node.js (`scripts/process-images.js`) usando `sharp` para redimensionar (largura máx. 1400px), comprimir e converter em `.webp` (qualidade 82%).
  - Geração de nomes padronizados e normalizados (slugs: `01.webp`, `02.webp`, etc.).
  - Redução estimada do peso total do catálogo de ~300 MB para ~35 MB.
- **Status:** Planejado.

#### [INFRA-03] Proteção de Sincronização no CI/CD (`deploy-app.yml`)
- **Contexto:** O comando padrão `aws s3 sync ./web s3://$BUCKET --delete` apagaria as fotos do bucket por não estarem na pasta local `./web`.
- **Implementação:**
  - Inclusão da flag `--exclude "imoveis/*"` no passo de sync do GitHub Actions.
  - Invalidação pontual do CloudFront (`/*` para código ou `/imoveis/*` para novas mídias).
- **Status:** Planejado.

---

### 🎨 Design & Experiência Visual (Argon Design System)

#### [DES-01] Hero Cinemático com Motion & Micro-interações
- **Descrição:** Implementação de hero imersivo com efeito Ken Burns suave em fotos selecionadas, transição crepuscular e HUD flutuante de busca rápida (Tipo | Região | Faixa de Preço).
- **Status:** Planejado.

#### [DES-02] Mobile Experience Refinada (App-Like)
- **Descrição:** Barra de ação rápida fixa inferior no mobile (Bottom Quick Bar: WhatsApp Direto, Filtro Rápido e Buscar), navegação por swipe horizontal nas fotos do imóvel com `scroll-snap`.
- **Status:** Planejado.

#### [DES-03] Mapa Interativo da Grande Vitória
- **Descrição:** Mapa vetorial interativo destacando as regiões de atuação (Serra, Vitória, Vila Velha, Fundão/Praia Grande) com contagem de imóveis e filtro direto.
- **Status:** Planejado.

---

### 💼 Negócio, Captação & Presença Local (Google & Automações)

#### [BIZ-01] Otimização Estratégica do Google Meu Negócio (Perfil de Empresas)
- **Descrição:** Cadastro completo com categoria primária "Corretor de Imóveis / Agência Imobiliária", vitrine de produtos cadastrada com os imóveis ativos e estratégia de avaliações guiadas pós-visita.
- **Status:** Planejado.

#### [BIZ-02] SEO Local & Dados Estruturados Schema.org
- **Descrição:** Inclusão de JSON-LD (`RealEstateAgent`, `SingleFamilyResidence`, `Apartment`) para leitura semântica dos imóveis pelo Google e geração de rich snippets nos resultados de busca local.
- **Status:** Planejado.

#### [BIZ-03] Automação de Atendimento & Triagem Rápida
- **Descrição:** Fluxo de boas-vindas com triagem em até 5 minutos no WhatsApp Business, integração de UTMs nos links de anúncio e captura direta de leads qualificados.
- **Status:** Planejado.

