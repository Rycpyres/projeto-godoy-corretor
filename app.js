/* =========================================================
   GODOY CORRETOR — ARGON PLATFORM, VITRINE & CRM KANBAN HUB
   ========================================================= */

const CONFIG = {
  whatsapp: "5527999042024",
  corretorName: "Eder Godoy",
  creci: "15775-F",
  siteUrl: "https://godoy.otcloudsolutions.com.br"
};

const STORAGE_KEYS = {
  PROPS: "godoy_argon_properties_v1",
  LEADS: "godoy_argon_leads_v1"
};

// ── CATÁLOGO BASE (15 EMPREENDIMENTOS MAPEADOS DO PORTFÓLIO DO CORRETOR) ──
// As imagens usam URLs de alta disponibilidade CDN para não inflar o Git,
// mantendo o campo s3Folder preparado para o sync futuro no bucket S3 (/imoveis/...).
const DEFAULT_PROPERTIES = [
  {
    id: 0,
    title: "Paradiso Clube Residence",
    location: "Morada de Laranjeiras, Serra",
    region: "Serra",
    type: "Apartamento",
    badge: "real",
    badgeText: "IMÓVEL REAL",
    bedrooms: 2,
    parking: 1,
    area: 62,
    price: "R$ 555.000",
    priceNum: 555000,
    s3Folder: "imoveis/paradiso-clube",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Apartamento de 62m² em andar alto com vista livre, 2 quartos sendo 1 suíte com armários planejados, cozinha montada e 1 vaga coberta. Lazer clube completo com piscinas, academia e segurança 24h."
  },
  {
    id: 1,
    title: "Apartamento Villaggio Manguinhos",
    location: "Manguinhos, Serra",
    region: "Serra",
    type: "Apartamento",
    badge: "real",
    badgeText: "IMÓVEL REAL",
    bedrooms: 2,
    parking: 1,
    area: 58,
    price: "R$ 395.000",
    priceNum: 395000,
    s3Folder: "imoveis/villaggio-manguinhos",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Viva a poucos minutos da praia de Manguinhos em um condomínio clube arborizado. 2 quartos, sala integrada à varanda, área de lazer com piscina adulto/infantil, churrasqueira e quadra."
  },
  {
    id: 2,
    title: "Condomínio Sevilha Clube",
    location: "Jardim Limoeiro / Laranjeiras, Serra",
    region: "Serra",
    type: "Apartamento",
    badge: "opportunity",
    badgeText: "OPORTUNIDADE",
    bedrooms: 2,
    parking: 1,
    area: 55,
    price: "R$ 315.000",
    priceNum: 315000,
    s3Folder: "imoveis/condominio-sevilha",
    images: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Excelente custo-benefício em condomínio fechado com portaria 24h, piscina, salão de festas e fácil acesso à BR-101 e Vitória. Documentação pronta para financiamento."
  },
  {
    id: 3,
    title: "Naturalle Residencial Clube",
    location: "Morada de Laranjeiras, Serra",
    region: "Serra",
    type: "Apartamento",
    badge: "exclusive",
    badgeText: "EXCLUSIVO",
    bedrooms: 3,
    parking: 2,
    area: 78,
    price: "R$ 620.000",
    priceNum: 620000,
    s3Folder: "imoveis/naturalle-morada",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Planta espaçosa de 3 quartos com suíte e varanda gourmet em Morada de Laranjeiras. Sol da manhã, 2 vagas de garagem e infraestrutura completa de clube para a família."
  },
  {
    id: 4,
    title: "Casa Duplex Colina de Laranjeiras",
    location: "Colina de Laranjeiras, Serra",
    region: "Serra",
    type: "Casa",
    badge: "exclusive",
    badgeText: "EXCLUSIVO",
    bedrooms: 3,
    parking: 2,
    area: 148,
    price: "R$ 740.000",
    priceNum: 740000,
    s3Folder: "imoveis/casa-colina-laranjeiras",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Casa moderna com acabamento em porcelanato, bancadas em granito, espaço gourmet privativo com churrasqueira e 3 quartos amplos na região mais valorizada de Laranjeiras."
  },
  {
    id: 5,
    title: "Condomínio Dream Park",
    location: "Serra Sede / Civit, Serra",
    region: "Serra",
    type: "Apartamento",
    badge: "opportunity",
    badgeText: "OPORTUNIDADE",
    bedrooms: 2,
    parking: 1,
    area: 54,
    price: "R$ 285.000",
    priceNum: 285000,
    s3Folder: "imoveis/condominio-dream-park",
    images: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Ideal para primeiro imóvel ou investimento com alta procura de locação. Condomínio organizado, área de lazer entregue equipada e baixa taxa condominial."
  },
  {
    id: 6,
    title: "Condomínio Via Mar Jacaraípe",
    location: "Jacaraípe, Serra",
    region: "Serra",
    type: "Apartamento",
    badge: "real",
    badgeText: "IMÓVEL REAL",
    bedrooms: 2,
    parking: 1,
    area: 60,
    price: "R$ 345.000",
    priceNum: 345000,
    s3Folder: "imoveis/condominio-via-mar",
    images: [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Apartamento ventilado próximo à orla de Jacaraípe. Excelente iluminação natural, 2 quartos, lazer com piscina e segurança 24h."
  },
  {
    id: 7,
    title: "Casa Independente em Jacaraípe",
    location: "Jacaraípe, Serra",
    region: "Serra",
    type: "Casa",
    badge: "real",
    badgeText: "IMÓVEL REAL",
    bedrooms: 3,
    parking: 3,
    area: 165,
    price: "R$ 580.000",
    priceNum: 580000,
    s3Folder: "imoveis/casa-jacaraipe",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Casa solta em terreno amplo em Jacaraípe, a poucos minutos da praia. 3 quartos sendo 1 suíte, quintal espaçoso com área de churrasqueira e garagem para 3 carros."
  },
  {
    id: 8,
    title: "Casa Cidade Continental",
    location: "Cidade Continental, Serra",
    region: "Serra",
    type: "Casa",
    badge: "opportunity",
    badgeText: "OPORTUNIDADE",
    bedrooms: 3,
    parking: 2,
    area: 130,
    price: "R$ 445.000",
    priceNum: 445000,
    s3Folder: "imoveis/casa-cidade-continental",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Casa residencial reformada em rua tranquila de Cidade Continental. 3 quartos, cozinha americana, área de serviço coberta e garagem para 2 veículos."
  },
  {
    id: 9,
    title: "Residencial Viver Serra",
    location: "Serra, ES",
    region: "Serra",
    type: "Apartamento",
    badge: "opportunity",
    badgeText: "OPORTUNIDADE",
    bedrooms: 2,
    parking: 1,
    area: 52,
    price: "R$ 265.000",
    priceNum: 265000,
    s3Folder: "imoveis/viver-serra",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Oportunidade de entrada com parcelas menores que o aluguel. 2 quartos, condomínio fechado com lazer infantil, quadra e portaria 24h. Aceita FGTS."
  },
  {
    id: 10,
    title: "Residencial Taquara II",
    location: "Taquara II, Serra",
    region: "Serra",
    type: "Apartamento",
    badge: "real",
    badgeText: "IMÓVEL REAL",
    bedrooms: 2,
    parking: 1,
    area: 56,
    price: "R$ 278.000",
    priceNum: 278000,
    s3Folder: "imoveis/taquara-2",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Apartamento pronto para morar em Taquara II, próximo a supermercados, escolas e linhas de transporte. 2 quartos bem distribuídos e documentação 100% regularizada."
  },
  {
    id: 11,
    title: "Residencial HZ Praia Grande",
    location: "Praia Grande, Fundão / Litoral",
    region: "Litoral",
    type: "Apartamento",
    badge: "exclusive",
    badgeText: "EXCLUSIVO",
    bedrooms: 2,
    parking: 1,
    area: 66,
    price: "R$ 420.000",
    priceNum: 420000,
    s3Folder: "imoveis/hz-praia-grande",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Excelente opção para lazer ou rentabilidade com temporada em Praia Grande. Acabamento moderno, varanda arejada e localização estratégica perto do mar."
  },
  {
    id: 12,
    title: "Casa & Terreno Morada de Laranjeiras",
    location: "Morada de Laranjeiras, Serra",
    region: "Serra",
    type: "Casa",
    badge: "exclusive",
    badgeText: "EXCLUSIVO",
    bedrooms: 4,
    parking: 4,
    area: 260,
    price: "R$ 980.000",
    priceNum: 980000,
    s3Folder: "imoveis/casa-terreno-morada",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Residência de alto padrão com terreno diferenciado em Morada de Laranjeiras. 4 quartos, área gourmet integrada à piscina privativa, projeto luminotécnico e alto potencial de valorização."
  },
  {
    id: 13,
    title: "Vista Mar Praia da Costa",
    location: "Praia da Costa, Vila Velha",
    region: "Vila Velha",
    type: "Apartamento",
    badge: "exclusive",
    badgeText: "EXCLUSIVO",
    bedrooms: 3,
    parking: 2,
    area: 118,
    price: "R$ 890.000",
    priceNum: 890000,
    s3Folder: "imoveis/vila-velha-costa",
    images: [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Apartamento amplo a duas quadras do mar da Praia da Costa. 3 quartos com suíte, varanda gourmet com fechamento em vidro, lazer na cobertura e 2 vagas."
  },
  {
    id: 14,
    title: "Cobertura Linear Enseada Premium",
    location: "Enseada do Suá, Vitória",
    region: "Vitória",
    type: "Cobertura",
    badge: "exclusive",
    badgeText: "EXCLUSIVO",
    bedrooms: 4,
    parking: 3,
    area: 205,
    price: "R$ 1.350.000",
    priceNum: 1350000,
    s3Folder: "imoveis/vitoria-enseada",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Cobertura exclusiva em Vitória com vista panorâmica, terraço privativo com deck e espaço gourmet, 3 suítes e localização nobre próxima ao Shopping Vitória."
  }
];

// ── LEADS INICIAIS DO PIPELINE KANBAN ──
const DEFAULT_LEADS = [
  {
    id: 101,
    name: "Mariana Azevedo",
    phone: "27998123400",
    property: "Paradiso Clube Residence",
    budget: "R$ 555.000",
    valueNum: 555000,
    origin: "Meta Ads · Reels",
    stage: "novo",
    date: "Hoje, 09:40"
  },
  {
    id: 102,
    name: "Ricardo & Fernanda",
    phone: "27997441122",
    property: "Apartamento Villaggio Manguinhos",
    budget: "R$ 395.000",
    valueNum: 395000,
    origin: "Google Meu Negócio",
    stage: "atendimento",
    date: "Hoje, 11:15"
  },
  {
    id: 103,
    name: "Dr. Henrique Martins",
    phone: "27999118877",
    property: "Casa Duplex Colina de Laranjeiras",
    budget: "R$ 740.000",
    valueNum: 740000,
    origin: "Quiz do Site",
    stage: "visita",
    date: "Sábado às 10h"
  },
  {
    id: 104,
    name: "Juliana Costa",
    phone: "27996009988",
    property: "Naturalle Residencial Clube",
    budget: "R$ 620.000",
    valueNum: 620000,
    origin: "Simulador Caixa",
    stage: "proposta",
    date: "Crédito Aprovado"
  },
  {
    id: 105,
    name: "Roberto & Família",
    phone: "27998887766",
    property: "Condomínio Sevilha Clube",
    budget: "R$ 315.000",
    valueNum: 315000,
    origin: "Indicação / Instagram",
    stage: "fechado",
    date: "Contrato Assinado"
  }
];

// ── DADOS GEOGRÁFICOS DO MAPA INTERATIVO ES ──
const MAP_REGIONS = {
  "Serra": {
    title: "Serra — Eixo de Maior Crescimento e Liquidez",
    desc: "Principal polo de expansão residencial e condomínios clube da Grande Vitória. Combina excelente custo por m², proximidade das praias de Manguinhos e Jacaraípe e forte comércio em Laranjeiras.",
    val: "+14,2%",
    m2: "R$ 5.850",
    bairros: ["Morada de Laranjeiras", "Manguinhos", "Colina de Laranjeiras", "Jacaraípe", "Cidade Continental", "Taquara II"]
  },
  "Vitória": {
    title: "Vitória — Capital, Alto Padrão & Rentabilidade",
    desc: "Mercado consolidado de alta liquidez e valorização patrimonial constante. Destaque para imóveis executivos, coberturas e apartamentos próximos à Enseada do Suá e Jardim Camburi.",
    val: "+11,8%",
    m2: "R$ 11.400",
    bairros: ["Enseada do Suá", "Jardim Camburi", "Praia do Canto", "Jardim da Penha", "Mata da Praia"]
  },
  "Vila Velha": {
    title: "Vila Velha — Qualidade de Vida e Orla Valorizada",
    desc: "Forte procura por apartamentos vista mar e condomínios modernos na Praia da Costa, Itapuã e Praia de Itaparica, com excelente infraestrutura gastronômica e de lazer.",
    val: "+13,5%",
    m2: "R$ 9.600",
    bairros: ["Praia da Costa", "Itapuã", "Praia de Itaparica", "Coqueiral de Itaparica"]
  },
  "Litoral": {
    title: "Litoral Capixaba — Lazer, Praia Grande & Investimento",
    desc: "Região estratégica para segunda residência, casas de praia e terrenos com alto potencial de valorização turística em Praia Grande (Fundão) e São Mateus.",
    val: "+15,0%",
    m2: "R$ 4.900",
    bairros: ["Praia Grande (Fundão)", "Costa Azul", "Nova Almeida", "Guriri / São Mateus"]
  }
};

// ── STATE INICIAL ──
let properties = loadProperties();
let leads = loadLeads();
let activeFilterRegion = "Todos";
let activeMapRegion = "Serra";
let currentSlide = 0;
let currentImages = [];

function loadProperties() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROPS);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_PROPERTIES));
}

function savePropertiesToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.PROPS, JSON.stringify(properties));
  } catch (e) {}
}

function loadLeads() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LEADS);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_LEADS));
}

function saveLeadsToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
  } catch (e) {}
}

// ── TOAST HELPER ──
function showToast(msg) {
  const el = document.getElementById("toastMsg");
  if (!el) return;
  el.textContent = msg;
  el.style.display = "block";
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    el.style.display = "none";
  }, 4200);
}

// ── KEN BURNS HERO SLIDESHOW ──
let heroIdx = 0;
setInterval(() => {
  const slides = document.querySelectorAll("#heroSlides .hero-slide");
  if (!slides.length) return;
  slides.forEach(s => s.classList.remove("active"));
  heroIdx = (heroIdx + 1) % slides.length;
  slides[heroIdx].classList.add("active");
}, 6500);

// ── RENDER STOREFRONT FILTERS & PROPERTIES ──
function renderFilters() {
  const regions = ["Todos", "Serra", "Vitória", "Vila Velha", "Litoral"];
  const container = document.getElementById("propertyFilters");
  if (!container) return;
  container.innerHTML = regions.map(r => {
    const isAct = r === activeFilterRegion ? " active" : "";
    return `<button class="filter-btn${isAct}" onclick="filterProps('${r}')">${r}</button>`;
  }).join("");
}

function renderProperties(regionFilter = "Todos", typeFilter = "Todos", budgetFilter = "Todos") {
  activeFilterRegion = regionFilter;
  renderFilters();
  const grid = document.getElementById("propsGrid");
  if (!grid) return;

  let visibleCount = 0;
  grid.innerHTML = properties.map(p => {
    let match = true;
    if (regionFilter !== "Todos" && p.region !== regionFilter) match = false;
    if (typeFilter !== "Todos" && p.type !== typeFilter) match = false;
    if (budgetFilter === "ate350" && p.priceNum > 350000) match = false;
    if (budgetFilter === "350a650" && (p.priceNum < 350000 || p.priceNum > 650000)) match = false;
    if (budgetFilter === "acima650" && p.priceNum <= 650000) match = false;

    if (match) visibleCount++;
    const hidden = match ? "" : " hidden";

    const specs = [];
    if (p.bedrooms) specs.push(`<span class="prop-spec">🛏️ ${p.bedrooms} Quartos</span>`);
    if (p.parking) specs.push(`<span class="prop-spec">🚗 ${p.parking} Vagas</span>`);
    specs.push(`<span class="prop-spec">📐 ${p.area}m²</span>`);

    return `
      <div class="prop-card${hidden}" data-region="${p.region}" onclick="openModal(${p.id})">
        <div class="prop-img">
          <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
          <span class="prop-badge ${p.badge}">${p.badgeText}</span>
          <span class="prop-type-chip">${p.type || "Imóvel"}</span>
          <span class="prop-photo-count">📷 ${p.images.length}</span>
        </div>
        <div class="prop-info">
          <h3>${p.title}</h3>
          <div class="prop-location">📍 ${p.location}</div>
          <div class="prop-specs">${specs.join("")}</div>
          <div class="prop-footer">
            <span class="prop-price">${p.price}</span>
            <span class="prop-cta">Ver Ficha →</span>
          </div>
        </div>
      </div>`;
  }).join("");

  const badge = document.getElementById("catalogCountBadge");
  if (badge) badge.textContent = `Exibindo ${visibleCount} ${visibleCount === 1 ? "imóvel" : "imóveis"}`;
}

function filterProps(region) {
  renderProperties(region, "Todos", "Todos");
}

function executeHudSearch() {
  const reg = document.getElementById("hudRegion").value;
  const typ = document.getElementById("hudType").value;
  const bud = document.getElementById("hudBudget").value;
  renderProperties(reg, typ, bud);
  document.getElementById("imoveis").scrollIntoView({ behavior: "smooth" });
  showToast(`🔍 Filtro aplicado: ${reg} · ${typ}`);
}

// ── INTERACTIVE MAP OF GRANDE VITÓRIA ──
function selectMapRegion(region) {
  activeMapRegion = region;
  const info = MAP_REGIONS[region] || MAP_REGIONS["Serra"];

  document.querySelectorAll(".map-zone").forEach(z => z.classList.remove("active"));
  const activeZone = document.getElementById(`zone-${region}`);
  if (activeZone) activeZone.classList.add("active");

  document.querySelectorAll("#mapRegionTabs .map-tab").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.includes(region));
  });

  document.getElementById("mapRegionTitle").textContent = info.title;
  document.getElementById("mapRegionDesc").textContent = info.desc;
  document.getElementById("mapKpiVal").textContent = info.val;
  document.getElementById("mapKpiM2").textContent = info.m2;

  const regCount = properties.filter(p => p.region === region).length;
  document.getElementById("mapKpiCount").textContent = regCount;

  document.getElementById("mapBairrosList").innerHTML = info.bairros
    .map(b => `<span class="bairro-pill">📍 ${b}</span>`)
    .join("");
}

function filterByCurrentMapRegion() {
  renderProperties(activeMapRegion, "Todos", "Todos");
  document.getElementById("imoveis").scrollIntoView({ behavior: "smooth" });
  showToast(`📍 Mostrando imóveis em ${activeMapRegion}`);
}

// ── FINANCING SIMULATOR ──
function formatBRL(val) {
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function updateSimulator() {
  const price = parseFloat(document.getElementById("simPrice").value);
  const downPct = parseFloat(document.getElementById("simDown").value);
  const months = parseInt(document.getElementById("simYears").value);

  const downAmount = price * (downPct / 100);
  const financed = price - downAmount;
  const monthlyRate = 0.0989 / 12; // ~9.89% a.a. referencial
  const amortization = financed / months;
  const firstInterest = financed * monthlyRate;
  const firstInstallment = amortization + firstInterest + 65; // + taxas/seguro DFI/MIP estimado
  const lastInstallment = amortization + (amortization * monthlyRate) + 65;
  const requiredIncome = firstInstallment / 0.30;

  document.getElementById("simPriceDisplay").textContent = formatBRL(price);
  document.getElementById("simDownPct").textContent = downPct;
  document.getElementById("simDownDisplay").textContent = formatBRL(downAmount);
  document.getElementById("simYearsDisplay").textContent = `${months} meses (${Math.round(months / 12)} anos)`;

  document.getElementById("simFirstInstallment").textContent = formatBRL(firstInstallment);
  document.getElementById("simLastInstallment").textContent = formatBRL(lastInstallment);
  document.getElementById("simFinancedAmount").textContent = formatBRL(financed);
  document.getElementById("simIncomeRequired").textContent = formatBRL(requiredIncome);
}

function submitSimulationLead() {
  const price = document.getElementById("simPriceDisplay").textContent;
  const down = document.getElementById("simDownDisplay").textContent;
  const first = document.getElementById("simFirstInstallment").textContent;
  const months = document.getElementById("simYears").value;

  addLeadToCrm({
    name: "Visitante (Simulador Crédito)",
    phone: "27999000000",
    property: `Simulação Imóvel ${price}`,
    budget: price,
    valueNum: parseFloat(document.getElementById("simPrice").value),
    origin: "Simulador Financiamento"
  });

  const msg = encodeURIComponent(
    `Olá Godoy! Fiz uma simulação de financiamento no site:\n\n` +
    `🏠 Valor do Imóvel: ${price}\n` +
    `💰 Entrada disponível: ${down}\n` +
    `📅 Prazo: ${months} meses\n` +
    `📊 1ª Parcela estimada: ${first}\n\n` +
    `Gostaria de validar essa simulação e ver imóveis nessa faixa!`
  );
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, "_blank");
}

// ── BEFORE / AFTER SLIDER ──
function moveBeforeAfter(val) {
  const wrap = document.getElementById("baBeforeWrap");
  const handle = document.getElementById("baHandle");
  if (wrap) wrap.style.width = `${val}%`;
  if (handle) handle.style.left = `${val}%`;
}

function openOwnerCaptureModal() {
  addLeadToCrm({
    name: "Proprietário Interessado",
    phone: "27999000000",
    property: "Captação de Imóvel para Venda",
    budget: "A avaliar",
    valueNum: 550000,
    origin: "Captação Proprietário"
  });
  const msg = encodeURIComponent("Olá Godoy! Vi o comparativo de curadoria visual no seu site e quero anunciar meu imóvel com você.");
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, "_blank");
}

// ── PROPERTY MODAL & LIGHTBOX ──
function openModal(id) {
  const p = properties.find(x => x.id === id);
  if (!p) return;
  currentImages = p.images;
  currentSlide = 0;

  const gallery = document.getElementById("modalGallery");
  gallery.innerHTML = p.images.map((img, i) =>
    `<img src="${img}" alt="${p.title}" class="${i === 0 ? 'active' : ''}" onclick="openLightbox(${i})">`
  ).join("");

  const dots = document.getElementById("galleryDots");
  dots.innerHTML = p.images.map((_, i) =>
    `<button class="gallery-dot${i === 0 ? ' active' : ''}" onclick="goToSlide(${i})"></button>`
  ).join("");

  const specs = [];
  if (p.bedrooms) specs.push(`<div class="modal-spec"><div class="val">${p.bedrooms}</div><div class="lbl">Quartos</div></div>`);
  if (p.parking) specs.push(`<div class="modal-spec"><div class="val">${p.parking}</div><div class="lbl">Vagas</div></div>`);
  specs.push(`<div class="modal-spec"><div class="val">${p.area}</div><div class="lbl">Área m²</div></div>`);
  specs.push(`<div class="modal-spec"><div class="val">${p.region}</div><div class="lbl">Região</div></div>`);

  document.getElementById("modalBody").innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:12px;">
      <div>
        <span class="section-eyebrow" style="margin-bottom:6px;">${p.type || "Imóvel Selecionado"} · ${p.badgeText}</span>
        <h2 style="font-size:28px;color:var(--petrol);">${p.title}</h2>
        <div style="color:var(--graphite-mid);font-size:14px;margin-top:4px;">📍 ${p.location}</div>
      </div>
      <div style="font-family:'Playfair Display',serif;font-size:32px;color:var(--petrol);font-weight:700;">${p.price}</div>
    </div>
    <div class="modal-specs">${specs.join("")}</div>
    <p style="font-size:14.5px;color:var(--graphite-mid);line-height:1.75;margin-bottom:24px;">${p.description}</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <button class="btn btn-gold" onclick="scheduleVisitLead(${p.id})">💬 Agendar Visita Presencial (Gera Lead no CRM)</button>
      <button class="btn btn-outline" onclick="simulateThisProperty(${p.id})">🧮 Simular Financiamento deste Imóvel</button>
    </div>`;

  document.getElementById("propModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function scheduleVisitLead(propId) {
  const p = properties.find(x => x.id === propId);
  if (!p) return;
  addLeadToCrm({
    name: `Interessado em ${p.title}`,
    phone: "27999042024",
    property: p.title,
    budget: p.price,
    valueNum: p.priceNum || 500000,
    origin: "Vitrine do Site (Card)"
  });
  const wppMsg = encodeURIComponent(`Olá Godoy! Vi o imóvel "${p.title}" em ${p.location} (${p.price}) no site e gostaria de agendar uma visita.`);
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${wppMsg}`, "_blank");
}

function simulateThisProperty(propId) {
  const p = properties.find(x => x.id === propId);
  closeModal();
  if (p && p.priceNum) {
    const slider = document.getElementById("simPrice");
    slider.value = Math.min(Math.max(p.priceNum, 200000), 1500000);
    updateSimulator();
  }
  document.getElementById("simulador").scrollIntoView({ behavior: "smooth" });
}

function closeModal() {
  document.getElementById("propModal").classList.remove("active");
  document.getElementById("lightboxOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function goToSlide(n) {
  currentSlide = n;
  document.querySelectorAll("#modalGallery img").forEach((img, i) => img.classList.toggle("active", i === n));
  document.querySelectorAll("#galleryDots .gallery-dot").forEach((d, i) => d.classList.toggle("active", i === n));
}

function galleryNext() { goToSlide((currentSlide + 1) % currentImages.length); }
function galleryPrev() { goToSlide((currentSlide - 1 + currentImages.length) % currentImages.length); }

document.getElementById("propModal").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

// ── FULLSCREEN LIGHTBOX ──
function updateLightboxImg() {
  document.getElementById("lightboxImg").src = currentImages[currentSlide];
  document.getElementById("lightboxCounter").textContent = `${currentSlide + 1} / ${currentImages.length}`;
}

function openLightbox(i) {
  currentSlide = i;
  updateLightboxImg();
  document.getElementById("lightboxOverlay").classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightboxOverlay").classList.remove("active");
}

function lightboxNext() {
  currentSlide = (currentSlide + 1) % currentImages.length;
  updateLightboxImg();
  goToSlide(currentSlide);
}

function lightboxPrev() {
  currentSlide = (currentSlide - 1 + currentImages.length) % currentImages.length;
  updateLightboxImg();
  goToSlide(currentSlide);
}

document.addEventListener("keydown", function(e) {
  if (!document.getElementById("lightboxOverlay").classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") lightboxNext();
  if (e.key === "ArrowLeft") lightboxPrev();
});

// ── QUIZ ──
let quizStep = 1;
const quizData = {};

document.querySelectorAll(".quiz-opt").forEach(opt => {
  opt.addEventListener("click", function() {
    const step = this.closest(".quiz-step");
    step.querySelectorAll(".quiz-opt").forEach(o => o.classList.remove("selected"));
    this.classList.add("selected");
    quizData[`step${step.dataset.step}`] = this.dataset.val;
    const nextBtn = step.querySelector(".quiz-nav button:last-child");
    if (nextBtn) nextBtn.disabled = false;
  });
});

function quizNext() {
  if (quizStep >= 3) return;
  quizStep++;
  updateQuiz();
}

function quizPrev() {
  if (quizStep <= 1) return;
  quizStep--;
  updateQuiz();
}

function updateQuiz() {
  document.querySelectorAll(".quiz-step").forEach(s => s.classList.remove("active"));
  document.querySelector(`.quiz-step[data-step="${quizStep}"]`).classList.add("active");
  document.querySelectorAll(".quiz-progress .step").forEach((s, i) => s.classList.toggle("done", i < quizStep));
}

function quizSubmit() {
  const obj = quizData.step1 || "Comprar";
  const reg = quizData.step2 || "Grande Vitória";
  const val = quizData.step3 || "A definir";

  addLeadToCrm({
    name: `Lead Quiz (${reg})`,
    phone: "27999042024",
    property: `${obj} · ${reg}`,
    budget: val,
    valueNum: 500000,
    origin: "Quiz Interativo"
  });

  const msg = encodeURIComponent(`Olá Godoy! Fiz o quiz no site.\n\n🎯 Objetivo: ${obj}\n📍 Região: ${reg}\n💰 Faixa: ${val}\n\nPode me enviar as melhores opções?`);
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, "_blank");
}

// ── FORM HANDLER (INTEGRADO AO KANBAN) ──
function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const obj = document.getElementById("objective").value;
  const msg = document.getElementById("message").value;

  addLeadToCrm({
    name,
    phone,
    property: msg || obj,
    budget: "Sob Consulta",
    valueNum: 520000,
    origin: "Formulário do Site"
  });

  document.getElementById("formSuccess").style.display = "block";
  e.target.reset();

  const wppMsg = encodeURIComponent(`Olá Godoy! Sou ${name}.\n📋 Objetivo: ${obj}\n💬 ${msg || "Gostaria de atendimento consultivo."}\n📱 Meu contato: ${phone}`);
  setTimeout(() => {
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${wppMsg}`, "_blank");
  }, 1200);
}

// =========================================================
// PAINEL GERENCIAL INTEGRADO (CRM KANBAN + IMÓVEIS + ADS)
// =========================================================

function switchView(target) {
  const storefront = document.getElementById("publicStorefront");
  const admin = document.getElementById("adminPanelView");
  const btn = document.getElementById("btnToggleAdmin");

  if (target === "admin") {
    storefront.style.display = "none";
    admin.classList.add("active");
    btn.classList.add("active");
    renderKanbanBoard();
    renderAdminCatalogTable();
    populateMetaPropSelect();
    updateGmbMessage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    storefront.style.display = "block";
    admin.classList.remove("active");
    btn.classList.remove("active");
  }
}

function toggleAdminView() {
  const admin = document.getElementById("adminPanelView");
  if (admin.classList.contains("active")) {
    switchView("storefront");
  } else {
    switchView("admin");
  }
}

function switchAdminTab(tabId, btnEl) {
  document.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  document.querySelectorAll(".admin-pane").forEach(p => p.classList.remove("active"));
  const pane = document.getElementById(`admPane-${tabId}`);
  if (pane) pane.classList.add("active");
}

function addLeadToCrm(leadObj) {
  const newLead = {
    id: Date.now(),
    name: leadObj.name || "Novo Lead",
    phone: (leadObj.phone || "27999042024").replace(/\D/g, ""),
    property: leadObj.property || "Consultoria Geral",
    budget: leadObj.budget || "R$ 500.000",
    valueNum: leadObj.valueNum || 500000,
    origin: leadObj.origin || "Vitrine do Site",
    stage: "novo",
    date: "Agora mesmo"
  };
  leads.unshift(newLead);
  saveLeadsToStorage();
  updateLeadCounters();
  renderKanbanBoard();
  showToast(`⚡ Lead registrado no CRM Kanban: ${newLead.name}`);
}

function updateLeadCounters() {
  const navCount = document.getElementById("navLeadCount");
  if (navCount) navCount.textContent = leads.length;

  const kpiLeads = document.getElementById("admKpiLeads");
  if (kpiLeads) kpiLeads.textContent = leads.length;

  const totalVgv = leads.reduce((acc, l) => acc + (l.valueNum || 450000), 0);
  const kpiVgv = document.getElementById("admKpiVgv");
  if (kpiVgv) kpiVgv.textContent = `R$ ${(totalVgv / 1000000).toFixed(2)}M`;

  const kpiComm = document.getElementById("admKpiComm");
  if (kpiComm) kpiComm.textContent = formatBRL(totalVgv * 0.05);

  const kpiProps = document.getElementById("admKpiProps");
  if (kpiProps) kpiProps.textContent = properties.length;
}

const KANBAN_STAGES = [
  { key: "novo", title: "🔥 Novos Leads" },
  { key: "atendimento", title: "💬 Em Qualificação" },
  { key: "visita", title: "📅 Visita Agendada" },
  { key: "proposta", title: "📝 Proposta / Crédito" },
  { key: "fechado", title: "🏆 Vendido / Fechado" }
];

function renderKanbanBoard() {
  const board = document.getElementById("kanbanBoard");
  if (!board) return;
  updateLeadCounters();

  board.innerHTML = KANBAN_STAGES.map((stage, idx) => {
    const stageLeads = leads.filter(l => l.stage === stage.key);
    const cardsHtml = stageLeads.map(l => {
      const prevStage = idx > 0 ? KANBAN_STAGES[idx - 1].key : null;
      const nextStage = idx < KANBAN_STAGES.length - 1 ? KANBAN_STAGES[idx + 1].key : null;
      const wppText = encodeURIComponent(`Olá ${l.name}! Aqui é o Eder Godoy, corretor de imóveis. Recebi seu interesse sobre "${l.property}" e gostaria de conversar com você.`);

      return `
        <div class="kanban-card">
          <span class="kanban-origin">${l.origin}</span>
          <h4>${l.name}</h4>
          <div class="kanban-prop">🏠 ${l.property}</div>
          <div style="display:flex;justify-content:space-between;font-size:11px;opacity:0.78;">
            <span>💰 ${l.budget}</span>
            <span>🕒 ${l.date}</span>
          </div>
          <div class="kanban-actions">
            <div style="display:flex;gap:4px;">
              ${prevStage ? `<button class="kanban-btn" title="Voltar etapa" onclick="moveLeadStage(${l.id}, '${prevStage}')">←</button>` : ""}
              ${nextStage ? `<button class="kanban-btn" title="Avançar etapa" onclick="moveLeadStage(${l.id}, '${nextStage}')">Avançar →</button>` : ""}
            </div>
            <div style="display:flex;gap:4px;">
              <a class="kanban-btn" style="background:rgba(37,211,102,0.2);border-color:#25D366;" href="https://wa.me/55${l.phone}?text=${wppText}" target="_blank">💬 WhatsApp</a>
              <button class="kanban-btn" onclick="deleteLead(${l.id})" title="Remover">✕</button>
            </div>
          </div>
        </div>`;
    }).join("");

    return `
      <div class="kanban-col">
        <div class="kanban-col-head">
          <span>${stage.title}</span>
          <span class="kanban-count">${stageLeads.length}</span>
        </div>
        <div class="kanban-cards">${cardsHtml || `<div style="font-size:12px;opacity:0.4;text-align:center;padding:30px 10px;">Nenhum lead nesta etapa</div>`}</div>
      </div>`;
  }).join("");
}

function moveLeadStage(leadId, newStage) {
  const lead = leads.find(l => l.id === leadId);
  if (!lead) return;
  lead.stage = newStage;
  saveLeadsToStorage();
  renderKanbanBoard();
}

function deleteLead(leadId) {
  leads = leads.filter(l => l.id !== leadId);
  saveLeadsToStorage();
  renderKanbanBoard();
}

function promptNewLead() {
  const name = prompt("Nome do Cliente:");
  if (!name) return;
  const phone = prompt("WhatsApp com DDD (ex: 27999887766):", "27999042024") || "27999042024";
  const property = prompt("Imóvel ou Bairro de Interesse:", "Paradiso Clube Residence") || "Consultoria";
  const budget = prompt("Faixa de Valor:", "R$ 555.000") || "R$ 555.000";

  addLeadToCrm({
    name,
    phone,
    property,
    budget,
    valueNum: parseInt(budget.replace(/\D/g, "")) || 500000,
    origin: "Cadastro Manual Corretor"
  });
}

// ── ADMIN CATALOG CRUD ──
function renderAdminCatalogTable() {
  const tbody = document.getElementById("adminPropsTableBody");
  if (!tbody) return;

  tbody.innerHTML = properties.map(p => `
    <tr>
      <td>
        <strong>${p.title}</strong>
        <div style="font-size:11px;opacity:0.7;">📍 ${p.location}</div>
      </td>
      <td>${p.region} · ${p.type || "Apartamento"}</td>
      <td style="color:var(--gold-light);font-weight:700;">${p.price}</td>
      <td><span class="prop-badge ${p.badge}" style="position:static;font-size:9px;padding:4px 9px;">${p.badgeText}</span></td>
      <td>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <button class="kanban-btn" onclick="editAdminProperty(${p.id})">✏️ Editar</button>
          <button class="kanban-btn" onclick="toggleSoldProperty(${p.id})">🏷️ ${p.badge === 'sold' ? 'Reativar' : 'Marcar Vendido'}</button>
          <button class="kanban-btn" onclick="deleteAdminProperty(${p.id})">🗑️</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function saveAdminProperty(e) {
  e.preventDefault();
  const idVal = document.getElementById("admPropId").value;
  const badgeVal = document.getElementById("admPropBadge").value;
  const badgeMap = {
    real: "IMÓVEL REAL",
    exclusive: "EXCLUSIVO",
    opportunity: "OPORTUNIDADE",
    sold: "VENDIDO"
  };

  const propObj = {
    id: idVal !== "" ? parseInt(idVal) : Date.now(),
    title: document.getElementById("admPropTitle").value,
    region: document.getElementById("admPropRegion").value,
    type: document.getElementById("admPropType").value,
    location: document.getElementById("admPropLocation").value,
    price: document.getElementById("admPropPrice").value,
    priceNum: parseFloat(document.getElementById("admPropPriceNum").value) || 450000,
    bedrooms: parseInt(document.getElementById("admPropBeds").value) || 2,
    parking: parseInt(document.getElementById("admPropPark").value) || 1,
    area: parseInt(document.getElementById("admPropArea").value) || 60,
    badge: badgeVal,
    badgeText: badgeMap[badgeVal] || "IMÓVEL REAL",
    images: [document.getElementById("admPropImg").value],
    description: document.getElementById("admPropDesc").value
  };

  const existingIdx = properties.findIndex(x => x.id === propObj.id);
  if (existingIdx >= 0) {
    if (properties[existingIdx].images.length > 1) {
      propObj.images = [propObj.images[0], ...properties[existingIdx].images.slice(1)];
    }
    properties[existingIdx] = propObj;
    showToast(`✅ Imóvel "${propObj.title}" atualizado na vitrine!`);
  } else {
    properties.unshift(propObj);
    showToast(`🎉 Novo imóvel "${propObj.title}" publicado na vitrine!`);
  }

  savePropertiesToStorage();
  resetPropForm();
  renderAdminCatalogTable();
  renderProperties(activeFilterRegion);
  updateLeadCounters();
  populateMetaPropSelect();
}

function editAdminProperty(id) {
  const p = properties.find(x => x.id === id);
  if (!p) return;
  document.getElementById("propFormTitle").textContent = `✏️ Editando: ${p.title}`;
  document.getElementById("admPropId").value = p.id;
  document.getElementById("admPropTitle").value = p.title;
  document.getElementById("admPropRegion").value = p.region;
  document.getElementById("admPropType").value = p.type || "Apartamento";
  document.getElementById("admPropLocation").value = p.location;
  document.getElementById("admPropPrice").value = p.price;
  document.getElementById("admPropPriceNum").value = p.priceNum || 450000;
  document.getElementById("admPropBeds").value = p.bedrooms;
  document.getElementById("admPropPark").value = p.parking;
  document.getElementById("admPropArea").value = p.area;
  document.getElementById("admPropBadge").value = p.badge;
  document.getElementById("admPropImg").value = p.images[0];
  document.getElementById("admPropDesc").value = p.description;
}

function toggleSoldProperty(id) {
  const p = properties.find(x => x.id === id);
  if (!p) return;
  if (p.badge === "sold") {
    p.badge = "real";
    p.badgeText = "IMÓVEL REAL";
  } else {
    p.badge = "sold";
    p.badgeText = "VENDIDO";
  }
  savePropertiesToStorage();
  renderAdminCatalogTable();
  renderProperties(activeFilterRegion);
  showToast(`🏷️ Status de "${p.title}" alterado para ${p.badgeText}`);
}

function deleteAdminProperty(id) {
  properties = properties.filter(x => x.id !== id);
  savePropertiesToStorage();
  renderAdminCatalogTable();
  renderProperties(activeFilterRegion);
  updateLeadCounters();
  showToast("🗑️ Imóvel removido do catálogo.");
}

function resetPropForm() {
  document.getElementById("propFormTitle").textContent = "➕ Cadastrar Novo Imóvel";
  document.getElementById("adminPropForm").reset();
  document.getElementById("admPropId").value = "";
}

function resetDemoData() {
  localStorage.removeItem(STORAGE_KEYS.PROPS);
  localStorage.removeItem(STORAGE_KEYS.LEADS);
  properties = JSON.parse(JSON.stringify(DEFAULT_PROPERTIES));
  leads = JSON.parse(JSON.stringify(DEFAULT_LEADS));
  renderProperties("Todos");
  renderKanbanBoard();
  renderAdminCatalogTable();
  populateMetaPropSelect();
  showToast("🔄 Catálogo e CRM restaurados para o estado original!");
}

// ── META BUSINESS SUITE AD GENERATOR ──
function populateMetaPropSelect() {
  const sel = document.getElementById("metaSelectProp");
  if (!sel) return;
  sel.innerHTML = properties.map(p => `<option value="${p.id}">${p.title} (${p.location} — ${p.price})</option>`).join("");
  generateMetaAdCopy();
}

function generateMetaAdCopy() {
  const sel = document.getElementById("metaSelectProp");
  if (!sel) return;
  const p = properties.find(x => x.id === parseInt(sel.value)) || properties[0];
  if (!p) return;

  const slug = p.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");
  const utm = `${CONFIG.siteUrl}/?utm_source=instagram&utm_medium=cpc&utm_campaign=${slug}#imoveis`;

  const copy =
    `✨ OPORTUNIDADE EM ${p.location.toUpperCase()}!\n\n` +
    `🏠 ${p.title}\n` +
    `📐 ${p.area}m² · 🛏️ ${p.bedrooms} Quartos · 🚗 ${p.parking} Vaga(s)\n` +
    `💰 Investimento: ${p.price}\n\n` +
    `${p.description}\n\n` +
    `📲 Atendimento direto e consultivo com Eder Godoy (CRECI ${CONFIG.creci}).\n` +
    `👉 Clique em "Saiba Mais" para ver a galeria completa e simular seu financiamento!`;

  document.getElementById("metaGeneratedCopy").value = copy;
  document.getElementById("metaGeneratedUtm").value = utm;
}

function copyMetaAd() {
  const copy = document.getElementById("metaGeneratedCopy").value;
  const utm = document.getElementById("metaGeneratedUtm").value;
  navigator.clipboard.writeText(`${copy}\n\n🔗 Link: ${utm}`);
  showToast("📋 Copy e Link UTM copiados para colar no Meta Business Suite!");
}

// ── GOOGLE MEU NEGÓCIO REVIEW GENERATOR ──
function updateGmbMessage() {
  const name = document.getElementById("gmbClientName").value || "Cliente";
  const bairro = document.getElementById("gmbBairro").value || "Serra / Grande Vitória";
  const msg =
    `Olá ${name}! Foi um prazer atender você na visita em ${bairro}. 🤝\n\n` +
    `Sua opinião ajuda muito meu trabalho aqui na Grande Vitória! Você poderia deixar uma avaliação rápida no meu perfil do Google mencionando como foi o atendimento em ${bairro}?\n\n` +
    `⭐ Link rápido: https://g.page/r/godoy-corretor-es/review\n\nMuito obrigado — Eder Godoy (CRECI 15775-F).`;
  const box = document.getElementById("gmbReviewMsg");
  if (box) box.value = msg;
}

function sendGmbReviewRequest() {
  const msg = document.getElementById("gmbReviewMsg").value;
  navigator.clipboard.writeText(msg);
  showToast("📋 Mensagem de avaliação 5⭐ copiada! Abra o WhatsApp do cliente para enviar.");
}

// ── ANIMATED COUNTERS & SCROLL REVEAL ──
function animateCounters() {
  document.querySelectorAll(".cred-item .num").forEach(el => {
    const target = parseInt(el.dataset.target);
    const isPct = el.closest(".cred-item").querySelector(".label").textContent.includes("%");
    const suffix = isPct ? "%" : "+";
    let current = 0;
    const increment = Math.max(target / 45, 1);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + (current >= target ? suffix : "");
    }, 28);
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const credBarEl = document.querySelector(".cred-bar");
if (credBarEl) {
  const credObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounters();
        credObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  credObserver.observe(credBarEl);
}

// ── MOBILE MENU & WHATSAPP LINKS ──
function toggleMobile() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

function applyWppLinks() {
  document.querySelectorAll(".js-wpp").forEach(el => {
    const msg = el.dataset.msg || "";
    el.href = `https://wa.me/${CONFIG.whatsapp}` + (msg ? `?text=${encodeURIComponent(msg)}` : "");
  });
}

// ── INIT ──
renderProperties("Todos");
selectMapRegion("Serra");
updateSimulator();
updateLeadCounters();
applyWppLinks();
