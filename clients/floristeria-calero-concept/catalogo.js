const CALERO_STORAGE_KEY = "calero-concept-products-v3";
const CALERO_CONTENT_KEY = "calero-concept-content-v1";

const CALERO_CATEGORIES = [
  { id: "all", label: "Todo" },
  { id: "cumpleanos", label: "Cumpleaños" },
  { id: "amor", label: "Amor" },
  { id: "agradecimiento", label: "Agradecimiento" },
  { id: "personalizado", label: "A gusto del florista" },
  { id: "condolencias", label: "Condolencias" },
];

const CALERO_PLACEMENTS = [
  { id: "catalogo", label: "Solo catálogo" },
  { id: "featured", label: "Destacado en inicio" },
  { id: "spotlight", label: "Selección editorial en inicio" },
];

const CALERO_CONFIG = {
  phone: "915641846",
  phoneLabel: "915 641 846",
  email: "caleroflor2004@gmail.com",
  address: "Calle de Cartagena, 119",
  city: "28002 Madrid",
  hours: "L-V 10:00 - 20:00",
  extraHours: "Domingos y festivos con horario reducido",
  mapUrl: "https://maps.google.com/?q=Calle+de+Cartagena+119+Madrid",
};

const CALERO_ASSETS = {
  logo: "https://floristeriacalero.madrid/wp-content/uploads/2020/09/Logo-Florister%C3%ADa-Calero.jpg",
  hero: "https://floristeriacalero.madrid/wp-content/uploads/2021/12/ramo-trabajo-calero.jpg",
  bouquet: "https://floristeriacalero.madrid/wp-content/uploads/2021/12/ramo-trabajo-calero.jpg",
  plants: "https://floristeriacalero.madrid/wp-content/uploads/2021/12/plantas-trabajo-calero.jpg",
  roses: "https://floristeriacalero.madrid/wp-content/uploads/2021/12/rosas-trabajo-calero.jpg",
  funeralHero: "https://floristeriacalero.madrid/wp-content/uploads/2021/12/Corona-Funeraria-Roja-y-Blanca.jpg",
  guarantee: "https://floristeriacalero.madrid/wp-content/uploads/2020/05/FLORISTERIAS-GARANTIA.jpg",
  wedding: "https://floristeriacalero.madrid/wp-content/uploads/2020/07/Bodas-Florister%C3%ADa-Calero.jpg",
  bride: "https://floristeriacalero.madrid/wp-content/uploads/2019/12/woman-holding-bouquet-of-roses-1424810-533x800.jpg",
  couple: "https://floristeriacalero.madrid/wp-content/uploads/2019/12/man-and-woman-kissing-2253870.jpg",
  hospital: "https://floristeriacalero.madrid/wp-content/uploads/2019/12/Fondo-Hospitales.jpg",
  sympathy: "https://floristeriacalero.madrid/wp-content/uploads/2019/12/cementerio-948048_640.jpg",
};

const DEFAULT_PRODUCTS = [
  {
    id: "ramo-grecia",
    name: "Ramo Grecia",
    category: "cumpleanos",
    price: 36.3,
    badge: "Entrega hoy",
    subtitle: "Cumpleaños y celebración",
    intro: "Un ramo luminoso y alegre para felicitar, sorprender o resolver un regalo con gusto el mismo día.",
    description:
      "Composición de flor variada con presencia fresca y una paleta amable, pensada para quien busca acertar con un detalle bonito sin complicarse.",
    detail:
      "Ideal para cumpleaños, agradecimientos y visitas en las que quieres enviar un ramo vistoso y fácil de regalar.",
    includes: "Flor variada de temporada, verdes frescos y envoltorio cuidado.",
    delivery: "Reparto propio en Madrid con entrega en el día según horario de compra.",
    care: "Cambiar el agua cada 2 días y recortar los tallos en diagonal.",
    featured: true,
    placement: "featured",
    sortOrder: 1,
    images: [
      "https://floristeriacalero.madrid/wp-content/uploads/2019/12/Ramo-Flores-Grecia-F140-500x500.jpg",
      CALERO_ASSETS.bouquet,
      CALERO_ASSETS.hero,
    ],
  },
  {
    id: "ramo-florista",
    name: "Ramo a gusto del florista",
    category: "personalizado",
    price: 35,
    badge: "Recomendado",
    subtitle: "Selección personalizada",
    intro: "Cuéntanos el presupuesto y la ocasión. Nosotros elegimos la combinación floral más adecuada para ese momento.",
    description:
      "La opción más cómoda para regalar cuando quieres confiar en el criterio de una floristería local con experiencia y resolverlo rápido.",
    detail:
      "Perfecto para clientes que prefieren dejar la selección en manos del florista y recibir un ramo equilibrado, fresco y bien presentado.",
    includes: "Composición personalizada según presupuesto, ocasión y flor disponible.",
    delivery: "Disponible desde 35 EUR con reparto local y opción de recogida en tienda.",
    care: "Se entrega con recomendaciones básicas según el tipo de flor seleccionada.",
    featured: true,
    placement: "spotlight",
    sortOrder: 1,
    images: [
      "https://floristeriacalero.madrid/wp-content/uploads/2022/11/Ramo-a-Gusto-del-Florista-1338A13-500x500.jpg",
      CALERO_ASSETS.bouquet,
      CALERO_ASSETS.plants,
    ],
  },
  {
    id: "bouquet-tonos-naranjas",
    name: "Bouquet tonos naranjas",
    category: "agradecimiento",
    price: 41,
    badge: "Favorito",
    subtitle: "Gracias y visitas",
    intro: "Tonos cálidos y carácter elegante para agradecer, felicitar o llevar flores a una visita especial.",
    description:
      "Un bouquet con presencia serena y un punto editorial, muy fácil de regalar cuando buscas algo alegre sin caer en un gesto romántico.",
    detail:
      "Encaja muy bien en agradecimientos, detalles para anfitriones, visitas y regalos con un tono más sobrio.",
    includes: "Bouquet de flor variada en tonos cálidos con envoltorio premium.",
    delivery: "Entrega local en Madrid y recogida en tienda.",
    care: "Mantener lejos del sol directo y renovar el agua cada 48 horas.",
    featured: true,
    placement: "featured",
    sortOrder: 2,
    images: [
      "https://floristeriacalero.madrid/wp-content/uploads/2020/01/bouquet-tonos-naranjas-500x500.jpg",
      CALERO_ASSETS.hero,
      CALERO_ASSETS.bouquet,
    ],
  },
  {
    id: "ramo-6-rosas",
    name: "Ramo de 6 rosas",
    category: "amor",
    price: 38,
    badge: "Clásico",
    subtitle: "Romántico directo",
    intro: "Un gesto claro y elegante para aniversarios, reconciliaciones, citas o cualquier momento en el que quieres decirlo con rosas.",
    description:
      "Seis rosas presentadas con cuidado y listas para regalar con una lectura romántica inmediata, sin exceso y con muy buena presencia.",
    detail:
      "Ideal para aniversarios, sorpresas de última hora y encargos donde el mensaje es claro y la entrega rápida importa mucho.",
    includes: "6 rosas, verdes de apoyo y presentación cuidada.",
    delivery: "Entrega prioritaria en Madrid con posibilidad de recogida en tienda.",
    care: "Agua fresca, corte en diagonal y evitar fuentes de calor directo.",
    featured: true,
    placement: "featured",
    sortOrder: 4,
    images: [
      "https://floristeriacalero.madrid/wp-content/uploads/2019/12/Ramo-de-6-Rosas-410-500x500.jpg",
      CALERO_ASSETS.roses,
      CALERO_ASSETS.hero,
    ],
  },
  {
    id: "ramo-irlanda",
    name: "Ramo Irlanda",
    category: "agradecimiento",
    price: 40.7,
    badge: "Versátil",
    subtitle: "Detalles elegantes",
    intro: "Una composición equilibrada para agradecer, felicitar o enviar un detalle con un tono natural y refinado.",
    description:
      "Ramo de presencia suave y elegante, cómodo para ocasiones distintas y muy fácil de recomendar cuando se busca un regalo fino.",
    detail:
      "Funciona bien para agradecimientos, nacimientos, visitas o felicitaciones donde quieres un detalle delicado y muy presentable.",
    includes: "Flor de temporada, verdes suaves y envoltorio elegante.",
    delivery: "Reparto propio en Madrid con margen de personalización según stock.",
    care: "Mantener con agua limpia y alejado de fuentes de calor.",
    featured: false,
    placement: "catalogo",
    sortOrder: 5,
    images: [
      "https://floristeriacalero.madrid/wp-content/uploads/2019/12/Ramo-Flores-Irlanda-F180-500x500.jpg",
      CALERO_ASSETS.bouquet,
      CALERO_ASSETS.guarantee,
    ],
  },
  {
    id: "ramo-malta",
    name: "Ramo Malta",
    category: "cumpleanos",
    price: 34.1,
    badge: "Pedido rápido",
    subtitle: "Regalo fácil",
    intro: "Ramo ligero y resultón para felicitar hoy mismo con una compra ágil y un precio muy cómodo.",
    description:
      "Pensado para regalos del día, sorpresas sencillas y encargos que necesitan resolverse rápido sin perder buena presencia.",
    detail:
      "Muy recomendable para cumpleaños, visitas de última hora y pedidos de móvil donde prima decidir rápido.",
    includes: "Ramo de flor variada con formato ligero y envoltorio limpio.",
    delivery: "Entrega hoy según horario y disponibilidad en Madrid.",
    care: "Recortar los tallos y cambiar el agua cada 48 horas.",
    featured: false,
    placement: "featured",
    sortOrder: 3,
    images: [
      "https://floristeriacalero.madrid/wp-content/uploads/2020/01/Ramo-Flores-Malta-A185-500x500.jpg",
      CALERO_ASSETS.hero,
      CALERO_ASSETS.plants,
    ],
  },
  {
    id: "corona-roja-blanca",
    name: "Corona funeraria roja y blanca",
    category: "condolencias",
    price: 175,
    badge: "Prioridad",
    subtitle: "Tanatorios y condolencias",
    intro: "Arreglo funerario preparado para encargos delicados que necesitan coordinación, claridad y entrega prioritaria.",
    description:
      "Corona de presencia solemne y bien equilibrada para acompañar condolencias con un acabado serio y una gestión cuidada.",
    detail:
      "Indicada para tanatorios y despedidas donde es importante confirmar sala, horario y mensaje con rapidez.",
    includes: "Corona funeraria con flores seleccionadas y cinta personalizada si se solicita.",
    delivery: "Prioridad operativa para envíos a tanatorios en Madrid.",
    care: "Preparación y entrega coordinadas por la floristería.",
    featured: false,
    placement: "spotlight",
    sortOrder: 2,
    images: [
      "https://floristeriacalero.madrid/wp-content/uploads/2021/12/Corona-Funeraria-Roja-y-Blanca.jpg",
      "https://floristeriacalero.madrid/wp-content/uploads/2020/01/Centro-Funerario-Tonos-Rojos-500x500.jpg",
      CALERO_ASSETS.sympathy,
    ],
  },
];

const DEFAULT_SITE_CONTENT = {
  settings: {
    adminPasscode: "calero2026",
  },
  homepage: {
    heroTitle: "Flores para regalar hoy en Madrid.",
    heroText:
      "Ramos, rosas, centros y arreglos florales con atención directa desde tienda, reparto propio y un servicio preparado para cumpleaños, amor, hospitales, tanatorios, bodas y eventos.",
    featuredTitle: "Ramos y arreglos listos para regalar con criterio.",
    featuredIntro:
      "Cada referencia se presenta con fotografía real, contexto de compra, precio claro y una ruta directa para encargar desde móvil o desde la tienda.",
    spotlightTitle: "Selección del florista",
    spotlightIntro:
      "Una zona más editorial para dar visibilidad extra a los arreglos que hoy queremos empujar en la portada.",
  },
};

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

function formatPrice(value) {
  if (value === "" || value === null || typeof value === "undefined") {
    return "";
  }
  const number = Number(value);
  if (Number.isNaN(number)) {
    return String(value);
  }
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(number);
}

function normalizeProduct(raw, index) {
  const name = (raw.name || "").trim() || `Producto ${index + 1}`;
  const id = slugify(raw.id || name || `producto-${index + 1}`) || `producto-${index + 1}`;
  const images = Array.isArray(raw.images)
    ? raw.images.map((item) => String(item).trim()).filter(Boolean)
    : String(raw.images || "")
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);
  const placement = CALERO_PLACEMENTS.some((item) => item.id === raw.placement)
    ? raw.placement
    : Boolean(raw.featured)
      ? "featured"
      : "catalogo";
  const sortOrder = Number(raw.sortOrder);

  return {
    id,
    name,
    category: raw.category || "personalizado",
    price: raw.price === "" ? "" : Number(raw.price || 0),
    badge: raw.badge || "",
    subtitle: raw.subtitle || "",
    intro: raw.intro || "",
    description: raw.description || "",
    detail: raw.detail || "",
    includes: raw.includes || "",
    delivery: raw.delivery || "",
    care: raw.care || "",
    featured: placement === "featured",
    placement,
    sortOrder: Number.isFinite(sortOrder) ? sortOrder : index + 1,
    images: images.length ? images : [CALERO_ASSETS.hero],
  };
}

function readProducts() {
  try {
    const saved = localStorage.getItem(CALERO_STORAGE_KEY);
    if (!saved) {
      return clone(DEFAULT_PRODUCTS);
    }
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || !parsed.length) {
      return clone(DEFAULT_PRODUCTS);
    }
    return parsed.map((item, index) => normalizeProduct(item, index));
  } catch (error) {
    return clone(DEFAULT_PRODUCTS);
  }
}

function saveProducts(products) {
  const normalized = products.map((item, index) => normalizeProduct(item, index));
  localStorage.setItem(CALERO_STORAGE_KEY, JSON.stringify(normalized));
  return normalized;
}

function resetProducts() {
  localStorage.removeItem(CALERO_STORAGE_KEY);
  return clone(DEFAULT_PRODUCTS);
}

function mergeContent(base, saved) {
  return {
    settings: {
      ...base.settings,
      ...(saved && saved.settings ? saved.settings : {}),
    },
    homepage: {
      ...base.homepage,
      ...(saved && saved.homepage ? saved.homepage : {}),
    },
  };
}

function readSiteContent() {
  try {
    const saved = localStorage.getItem(CALERO_CONTENT_KEY);
    if (!saved) {
      return clone(DEFAULT_SITE_CONTENT);
    }
    const parsed = JSON.parse(saved);
    return mergeContent(clone(DEFAULT_SITE_CONTENT), parsed);
  } catch (error) {
    return clone(DEFAULT_SITE_CONTENT);
  }
}

function saveSiteContent(content) {
  const normalized = mergeContent(clone(DEFAULT_SITE_CONTENT), content || {});
  localStorage.setItem(CALERO_CONTENT_KEY, JSON.stringify(normalized));
  return normalized;
}

function resetSiteContent() {
  localStorage.removeItem(CALERO_CONTENT_KEY);
  return clone(DEFAULT_SITE_CONTENT);
}

window.CALERO_STORE = {
  storageKey: CALERO_STORAGE_KEY,
  contentKey: CALERO_CONTENT_KEY,
  config: CALERO_CONFIG,
  assets: CALERO_ASSETS,
  categories: CALERO_CATEGORIES,
  placements: CALERO_PLACEMENTS,
  defaultProducts: clone(DEFAULT_PRODUCTS),
  defaultSiteContent: clone(DEFAULT_SITE_CONTENT),
  readProducts,
  saveProducts,
  resetProducts,
  readSiteContent,
  saveSiteContent,
  resetSiteContent,
  normalizeProduct,
  formatPrice,
  slugify,
};
