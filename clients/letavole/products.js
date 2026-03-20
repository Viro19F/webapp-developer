// ========== LE TAVOLE — PRODUCT DATABASE ==========
// All real products scraped from letavole.com

const PRODUCTS = {
    // ===== CHRISTOFLE =====
    "graphik-florero-medium": {
        id: "graphik-florero-medium",
        name: "Graphik Florero Medium",
        brand: "Christofle",
        price: 2090,
        sku: "113803",
        status: "in-stock",
        description: "El florero Graphik de Christofle combina líneas geométricas con la elegancia atemporal de la plata. Una pieza escultórica que transforma cualquier arreglo floral en una obra de arte. Perfecto como centro de mesa o pieza decorativa independiente.",
        material: "Plata plateada",
        origin: "Francia",
        dimensions: "24 cm altura",
        collection: "Graphik",
        category: "Floreros",
        images: [
            "https://letavole.com/wp-content/uploads/2025/03/113803.jpg"
        ],
        related: ["madison-6-florero", "entremesera-vertigo", "candelabro-perspectives"]
    },
    "madison-6-florero": {
        id: "madison-6-florero",
        name: "Madison 6 Florero Medio",
        brand: "Christofle",
        price: 1650,
        sku: "113520",
        status: "in-stock",
        description: "El florero Madison 6 presenta una silueta moderna con acabado en plata plateada. Diseñado para crear arreglos espectaculares, su forma equilibrada complementa cualquier estilo de decoración.",
        material: "Plata plateada",
        origin: "Francia",
        dimensions: "20 cm altura",
        collection: "Madison",
        category: "Floreros",
        images: [
            "https://letavole.com/wp-content/uploads/2024/11/113520.jpg"
        ],
        related: ["graphik-florero-medium", "entremesera-vertigo", "vinagrera-vertigo"]
    },
    "entremesera-vertigo": {
        id: "entremesera-vertigo",
        name: "Entremesera 3 Bandejas Vertigo",
        brand: "Christofle",
        price: 1450,
        sku: "114039",
        badge: "Bestseller",
        status: "in-stock",
        description: "La icónica colección Vertigo de Christofle en formato entremesera. Tres bandejas de plata plateada apiladas con el característico borde ondulado, perfectas para servir aperitivos con estilo impecable.",
        material: "Plata plateada",
        origin: "Francia",
        dimensions: "3 niveles",
        collection: "Vertigo",
        category: "Piezas de Servir",
        images: [
            "https://letavole.com/wp-content/uploads/2026/01/114039.jpg"
        ],
        related: ["vinagrera-vertigo", "ensaladera-malmaison", "graphik-florero-medium"]
    },
    "candelabro-perspectives": {
        id: "candelabro-perspectives",
        name: "Candelabro 2 Luces Cromo Perspectives",
        brand: "Christofle",
        price: 1420,
        sku: "114653",
        status: "in-stock",
        description: "El candelabro Perspectives en acabado cromado refleja la maestría artesanal de Christofle. Sus líneas arquitectónicas crean un juego de luz y sombras que transforma cualquier cena en un evento memorable.",
        material: "Cromo plateado",
        origin: "Francia",
        dimensions: "28 cm altura",
        collection: "Perspectives",
        category: "Candelabros",
        images: [
            "https://letavole.com/wp-content/uploads/2025/07/114653-00.jpg"
        ],
        related: ["entremesera-vertigo", "graphik-florero-medium", "vinagrera-vertigo"]
    },
    "vinagrera-vertigo": {
        id: "vinagrera-vertigo",
        name: "Vinagrera Vertigo",
        brand: "Christofle",
        price: 1060,
        sku: "104382",
        status: "in-stock",
        description: "La vinagrera Vertigo combina cristal soplado a mano con montura de plata plateada y el icónico borde ondulado de la colección. Una pieza funcional que eleva cada comida.",
        material: "Cristal + plata plateada",
        origin: "Francia",
        dimensions: "22 cm altura",
        collection: "Vertigo",
        category: "Cristalería",
        images: [
            "https://letavole.com/wp-content/uploads/2019/03/104382-01.jpg"
        ],
        related: ["entremesera-vertigo", "ensaladera-malmaison", "madison-6-florero"]
    },
    "ensaladera-malmaison": {
        id: "ensaladera-malmaison",
        name: "Ensaladera Malmaison Imperiale",
        brand: "Christofle",
        price: 545,
        sku: "114047",
        status: "in-stock",
        description: "La ensaladera de la colección Malmaison Imperiale rinde homenaje al estilo imperial francés. Plata plateada con detalles clásicos que añaden sofisticación a cualquier mesa.",
        material: "Plata plateada",
        origin: "Francia",
        dimensions: "26 cm diámetro",
        collection: "Malmaison Imperiale",
        category: "Piezas de Servir",
        images: [
            "https://letavole.com/wp-content/uploads/2025/04/114047.jpg"
        ],
        related: ["entremesera-vertigo", "vinagrera-vertigo", "graphik-florero-medium"]
    },

    // ===== JULISKA =====
    "willa-charger-amber": {
        id: "willa-charger-amber",
        name: "Willa Charger / Platter Amber",
        brand: "Juliska",
        price: 125,
        sku: "115178",
        badge: "Nuevo",
        status: "in-stock",
        description: "Los textiles de herencia cobran vida en esta fantasía de flores románticas y hojas entrelazadas en tonos terrosos. El borde festoneado permite superponer piezas y sirve tanto como plato base como bandeja de servir, añadiendo elegancia y riqueza natural a tu mesa.",
        material: "Cerámica gres portuguesa",
        origin: "Portugal",
        dimensions: "35.5 × 35.5 × 2.5 cm",
        care: "Apto para lavavajillas, horno, microondas y congelador. Sin plomo.",
        collection: "Willa",
        category: "Vajillas",
        images: [
            "https://letavole.com/wp-content/uploads/2025/11/115178.jpg",
            "https://letavole.com/wp-content/uploads/2025/11/115178_1.jpg",
            "https://letavole.com/wp-content/uploads/2025/11/115178_2.jpg",
            "https://letavole.com/wp-content/uploads/2025/11/115178_3.jpg"
        ],
        related: ["le-panier-charger", "tea-cup-bt", "leaftrail-incense"]
    },
    "le-panier-charger": {
        id: "le-panier-charger",
        name: "Le Panier Mystic Knot Charger Plate",
        brand: "Juliska",
        price: 111,
        sku: "114815",
        status: "in-stock",
        description: "Un diseño de espiral trenzada entrelazada que simboliza protección y longevidad. Un magnífico plato base que ofrece calidez texturizada, una silueta escultórica y una estética atemporal.",
        material: "Cerámica gres portuguesa",
        origin: "Portugal",
        dimensions: "35.5 × 35.5 × 2.5 cm",
        care: "Apto para lavavajillas, horno, microondas y congelador. Sin plomo.",
        collection: "Le Panier",
        category: "Vajillas",
        images: [
            "https://letavole.com/wp-content/uploads/2025/09/114815.jpg"
        ],
        related: ["willa-charger-amber", "tea-cup-bt", "leaftrail-incense"]
    },
    "tea-cup-bt": {
        id: "tea-cup-bt",
        name: "Tea Cup & Saucer Berry & Thread",
        brand: "Juliska",
        price: 72,
        sku: "108492",
        status: "in-stock",
        description: "La taza de té Berry & Thread de Juliska es un clásico atemporal. Cerámica portuguesa hecha a mano con el emblemático diseño de bayas e hilos que define la colección más querida de la marca.",
        material: "Cerámica gres portuguesa",
        origin: "Portugal",
        dimensions: "Taza + platillo",
        care: "Apto para lavavajillas, horno, microondas y congelador.",
        collection: "Berry & Thread",
        category: "Café y Té",
        images: [
            "https://letavole.com/wp-content/uploads/2021/11/108492-00.jpg"
        ],
        related: ["willa-charger-amber", "le-panier-charger", "leaftrail-incense"]
    },

    // ===== LA DOUBLE J =====
    "bubble-candlestick": {
        id: "bubble-candlestick",
        name: "Bubble Candle Stick S/4 Mixed",
        brand: "La Double J",
        price: 980,
        sku: "113875",
        status: "in-stock",
        description: "Set de 4 candeleros Bubble en colores mixtos. Vidrio de Murano soplado a mano con formas orgánicas y burbujas que capturan la luz de forma mágica. Una declaración de estilo para cualquier mesa.",
        material: "Vidrio de Murano soplado a mano",
        origin: "Italia",
        dimensions: "Variadas",
        collection: "Bubble",
        category: "Candelabros",
        images: [
            "https://letavole.com/wp-content/uploads/2025/01/113875.jpg"
        ],
        related: ["carafe-murano", "leaftrail-incense", "parrotstem-tray"]
    },
    "carafe-murano": {
        id: "carafe-murano",
        name: "Carafe in Murano Glass",
        brand: "La Double J",
        price: 612,
        sku: "110637",
        status: "in-stock",
        description: "Jarra de vidrio de Murano soplada a mano por maestros artesanos venecianos. Cada pieza es única, con colores vibrantes y formas orgánicas que celebran la tradición centenaria del cristal italiano.",
        material: "Vidrio de Murano soplado a mano",
        origin: "Italia (Murano)",
        dimensions: "28 cm altura",
        collection: "Murano Glass",
        category: "Cristalería",
        images: [
            "https://letavole.com/wp-content/uploads/2023/01/110637.jpg"
        ],
        related: ["bubble-candlestick", "bamboo-highball", "leaftrail-incense"]
    },
    "leaftrail-incense": {
        id: "leaftrail-incense",
        name: "Leaftrail Incense Holder Blue",
        brand: "La Double J",
        price: 347,
        sku: "115375",
        badge: "Nuevo",
        status: "in-stock",
        description: "Las pequeñas cosas convierten una casa en un santuario personal. Este porta incienso presenta el diseño Leaftrail de la colección Fantastic Creatures, creado en colaboración con el artista surrealista Beto Val. Diseñado para colocarse en cualquier habitación y combinarse con tu incienso preferido.",
        material: "100% Porcelana",
        origin: "Hecho en Italia",
        dimensions: "18 × 11 cm",
        collection: "Fantastic Creatures con Beto Val",
        category: "Accesorios",
        images: [
            "https://letavole.com/wp-content/uploads/2025/12/115375-6.jpg",
            "https://letavole.com/wp-content/uploads/2025/12/115375_1.jpg",
            "https://letavole.com/wp-content/uploads/2025/12/115375_2.jpg"
        ],
        related: ["parrotstem-tray", "leafbug-tray", "leafflyer-tray"]
    },
    "bamboo-highball": {
        id: "bamboo-highball",
        name: "Bamboo Highball S/2",
        brand: "La Double J",
        price: 347,
        sku: "115362",
        status: "in-stock",
        description: "Set de 2 vasos highball con diseño Bamboo. Vidrio italiano con patrón texturizado que evoca las cañas de bambú tropical. Perfectos para cócteles y long drinks con estilo.",
        material: "Vidrio italiano",
        origin: "Italia",
        dimensions: "Set de 2",
        collection: "Bamboo",
        category: "Cristalería",
        images: [
            "https://letavole.com/wp-content/uploads/2025/12/115362.jpg"
        ],
        related: ["carafe-murano", "bubble-candlestick", "leaftrail-incense"]
    },
    "parrotstem-tray": {
        id: "parrotstem-tray",
        name: "Parrotstem Trinket Tray Green",
        brand: "La Double J",
        price: 318,
        sku: "115374",
        badge: "Nuevo",
        status: "in-stock",
        description: "Bandeja de porcelana italiana con diseño Parrotstem de la colección Fantastic Creatures. Borde pintado a mano en oro de 18K. Versátil como organizador, joyero o plato para aperitivos.",
        material: "100% Porcelana italiana",
        origin: "Hecho a mano en Verona, Italia",
        dimensions: "21 × 16 cm",
        care: "Apto para lavavajillas",
        collection: "Fantastic Creatures con Beto Val",
        category: "Accesorios",
        images: [
            "https://letavole.com/wp-content/uploads/2025/12/115374.jpg"
        ],
        related: ["leaftrail-incense", "leafbug-tray", "leafflyer-tray"]
    },
    "odysseus-tea-cup": {
        id: "odysseus-tea-cup",
        name: "Odysseus Pink Tea Cup S/2",
        brand: "La Double J",
        price: 346,
        sku: "114292",
        status: "in-stock",
        description: "Set de 2 tazas de té con diseño Odysseus en rosa. Porcelana italiana con detalles pintados a mano en oro de 18K. Cada taza es una pequeña obra de arte que transforma la hora del té.",
        material: "100% Porcelana",
        origin: "Hecho en Italia",
        dimensions: "Set de 2 tazas con platillos",
        collection: "Odysseus",
        category: "Café y Té",
        images: [
            "https://letavole.com/wp-content/uploads/2025/05/114292.jpg"
        ],
        related: ["leaftrail-incense", "parrotstem-tray", "bubble-candlestick"]
    },

    // ===== ALESSI =====
    "cafetera-espresso-6": {
        id: "cafetera-espresso-6",
        name: "Cafetera Espresso 6 Tazas",
        brand: "Alessi",
        price: 371,
        sku: "115430",
        badge: "Nuevo",
        status: "in-stock",
        description: "Cafetera espresso italiana de diseño para 6 tazas. Acero inoxidable pulido con las líneas limpias y funcionales que caracterizan a Alessi. El ritual del café elevado a arte.",
        material: "Acero inoxidable 18/10",
        origin: "Italia",
        dimensions: "6 tazas",
        collection: "Espresso",
        category: "Café y Té",
        images: [
            "https://letavole.com/wp-content/uploads/2026/01/115430.jpg"
        ],
        related: ["frutero-charpin", "veneer-centro", "alessandro-sacacorchos"]
    },
    "frutero-charpin": {
        id: "frutero-charpin",
        name: "Frutero Pierre Charpin Mediano",
        brand: "Alessi",
        price: 257,
        sku: "112353",
        status: "in-stock",
        description: "Frutero diseñado por Pierre Charpin en acero inoxidable. Formas geométricas suaves que combinan función y escultura. Una pieza de diseño italiano que embellece cualquier cocina.",
        material: "Acero inoxidable 18/10",
        origin: "Italia",
        dimensions: "Mediano",
        collection: "Pierre Charpin",
        category: "Accesorios",
        images: [
            "https://letavole.com/wp-content/uploads/2024/01/112353.jpg"
        ],
        related: ["veneer-centro", "alessandro-sacacorchos", "cafetera-espresso-6"]
    },
    "veneer-centro": {
        id: "veneer-centro",
        name: "Veneer Centro de Mesa",
        brand: "Alessi",
        price: 219,
        sku: "115422",
        status: "in-stock",
        description: "Centro de mesa Veneer de Alessi. Diseño contemporáneo en acero inoxidable que sirve como pieza escultórica y funcional. Perfecto para frutas, pan o simplemente como decoración.",
        material: "Acero inoxidable 18/10",
        origin: "Italia",
        dimensions: "35 cm diámetro",
        collection: "Veneer",
        category: "Bandejas",
        images: [
            "https://letavole.com/wp-content/uploads/2026/01/115422.jpg"
        ],
        related: ["frutero-charpin", "alessandro-sacacorchos", "moledor-pimienta"]
    },
    "alessandro-sacacorchos": {
        id: "alessandro-sacacorchos",
        name: "Alessandro M. Sacacorchos",
        brand: "Alessi",
        price: 181,
        sku: "115416",
        badge: "Bestseller",
        status: "in-stock",
        description: "El icónico sacacorchos Alessandro M. de Alessi, diseñado por Alessandro Mendini. Una de las piezas de diseño más reconocidas del mundo. Funcionalidad perfecta con un toque de humor italiano.",
        material: "Resina termoplástica + zamak cromado",
        origin: "Italia",
        dimensions: "24.5 cm altura",
        collection: "Alessandro Mendini",
        category: "Bar",
        images: [
            "https://letavole.com/wp-content/uploads/2026/01/115416.jpg"
        ],
        related: ["moledor-pimienta", "frutero-charpin", "cafetera-espresso-6"]
    },
    "moledor-pimienta": {
        id: "moledor-pimienta",
        name: "Moledor de Pimienta Negro",
        brand: "Alessi",
        price: 186,
        sku: "115426",
        status: "in-stock",
        description: "Molinillo de pimienta de diseño italiano. Mecanismo de cerámica de alta calidad para una molienda precisa. El complemento perfecto para una mesa sofisticada.",
        material: "Resina + mecanismo cerámico",
        origin: "Italia",
        dimensions: "22 cm altura",
        collection: "Kitchen",
        category: "Cocina",
        images: [
            "https://letavole.com/wp-content/uploads/2026/01/115426.jpg"
        ],
        related: ["alessandro-sacacorchos", "frutero-charpin", "veneer-centro"]
    },

    // ===== HEREND =====
    "herend-tray-ribbon": {
        id: "herend-tray-ribbon",
        name: "Tray with Ribbon",
        brand: "Herend",
        price: 684,
        sku: "110929",
        status: "in-stock",
        description: "Bandeja de porcelana húngara pintada a mano con el clásico motivo floral Chinese Bouquet. Cada pieza es decorada individualmente por artesanos de la manufactura Herend, fundada en 1826.",
        material: "Porcelana fina pintada a mano",
        origin: "Hungría",
        dimensions: "Bandeja mediana",
        collection: "Chinese Bouquet",
        category: "Bandejas",
        images: [
            "https://letavole.com/wp-content/uploads/2023/09/110929.jpg"
        ],
        related: ["herend-coffee-pot", "herend-sugar-basin", "willa-charger-amber"]
    },
    "herend-coffee-pot": {
        id: "herend-coffee-pot",
        name: "Coffee Pot Rose Knob",
        brand: "Herend",
        price: 616,
        sku: "110930",
        status: "in-stock",
        description: "Cafetera con pomo de rosa de la colección Chinese Bouquet de Herend. Porcelana fina pintada a mano con motivos florales. El pomo en forma de rosa es un sello distintivo de la artesanía Herend.",
        material: "Porcelana fina pintada a mano",
        origin: "Hungría",
        dimensions: "Cafetera individual",
        collection: "Chinese Bouquet",
        category: "Café y Té",
        images: [
            "https://letavole.com/wp-content/uploads/2023/09/110930.jpg"
        ],
        related: ["herend-tray-ribbon", "herend-sugar-basin", "tea-cup-bt"]
    },
    "herend-sugar-basin": {
        id: "herend-sugar-basin",
        name: "Sugar Basin Rose Knob",
        brand: "Herend",
        price: 275,
        sku: "110925",
        status: "in-stock",
        description: "Azucarera con tapa decorada con pomo de rosa. Porcelana Herend pintada a mano de la colección Chinese Bouquet. Un detalle refinado para el servicio de té o café.",
        material: "Porcelana fina pintada a mano",
        origin: "Hungría",
        dimensions: "Azucarera con tapa",
        collection: "Chinese Bouquet",
        category: "Café y Té",
        images: [
            "https://letavole.com/wp-content/uploads/2023/09/110925.jpg"
        ],
        related: ["herend-coffee-pot", "herend-tray-ribbon", "tea-cup-bt"]
    },

    // ===== WEDGWOOD =====
    "arris-charger": {
        id: "arris-charger",
        name: "Arris Charger Octagonal 33cm",
        brand: "Wedgwood",
        price: 244,
        sku: "102528",
        status: "in-stock",
        description: "Plato base octagonal de la colección Arris de Wedgwood. Diseño contemporáneo con patrón geométrico sutil que rinde homenaje a la herencia artesanal británica de más de 260 años.",
        material: "Porcelana fina bone china",
        origin: "Inglaterra",
        dimensions: "33 cm diámetro",
        collection: "Arris",
        category: "Vajillas",
        images: [
            "https://letavole.com/wp-content/uploads/2019/06/102528.jpg"
        ],
        related: ["renaissance-dinner", "wonderlust-plate", "willa-charger-amber"]
    },
    "renaissance-dinner": {
        id: "renaissance-dinner",
        name: "Renaissance Gold Dinner Plate",
        brand: "Wedgwood",
        price: 72,
        sku: "110566",
        status: "in-stock",
        description: "Plato llano de la colección Renaissance Gold. Porcelana bone china con borde dorado que evoca la opulencia del Renacimiento. Elegancia clásica para la mesa contemporánea.",
        material: "Porcelana bone china",
        origin: "Inglaterra",
        dimensions: "27 cm diámetro",
        collection: "Renaissance Gold",
        category: "Vajillas",
        images: [
            "https://letavole.com/wp-content/uploads/2022/12/110566.jpg"
        ],
        related: ["arris-charger", "wonderlust-plate", "le-panier-charger"]
    },
    "wonderlust-plate": {
        id: "wonderlust-plate",
        name: "Wonderlust Plate",
        brand: "Wedgwood",
        price: 68,
        sku: "109309",
        status: "in-stock",
        description: "Plato de la colección Wonderlust de Wedgwood. Diseños inspirados en viajes y descubrimientos, con patrones exóticos sobre porcelana bone china. Disponible en 7 diseños.",
        material: "Porcelana bone china",
        origin: "Inglaterra",
        dimensions: "20 cm diámetro",
        collection: "Wonderlust",
        category: "Vajillas",
        images: [
            "https://letavole.com/wp-content/uploads/2022/04/109309-01.jpg"
        ],
        related: ["renaissance-dinner", "arris-charger", "le-panier-charger"]
    },

    // ===== SABRE PARIS =====
    "icone-steel-blue": {
        id: "icone-steel-blue",
        name: "Icône Set 5 Piezas Steel Blue",
        brand: "Sabre Paris",
        price: 127,
        sku: "114710",
        badge: "Bestseller",
        status: "in-stock",
        description: "Set de 5 cubiertos Icône en Steel Blue. Acero inoxidable con mangos de resina acrílica en colores vibrantes. Diseño parisino que transforma cada comida en una celebración de color.",
        material: "Acero inoxidable + resina acrílica",
        origin: "Francia",
        dimensions: "5 piezas: cuchillo, tenedor, cuchara, cuchara postre, tenedor postre",
        collection: "Icône",
        category: "Cubertería",
        images: [
            "https://letavole.com/wp-content/uploads/2025/09/114710.jpg"
        ],
        related: ["icone-caramel", "leaftrail-incense", "willa-charger-amber"]
    },
    "icone-caramel": {
        id: "icone-caramel",
        name: "Icône Set 5 Piezas Caramel",
        brand: "Sabre Paris",
        price: 127,
        sku: "109194",
        status: "in-stock",
        description: "Set de 5 cubiertos Icône en Caramel. La misma calidad francesa con un tono cálido y elegante que complementa vajillas clásicas y contemporáneas por igual.",
        material: "Acero inoxidable + resina acrílica",
        origin: "Francia",
        dimensions: "5 piezas",
        collection: "Icône",
        category: "Cubertería",
        images: [
            "https://letavole.com/wp-content/uploads/2023/09/109194-04.jpg"
        ],
        related: ["icone-steel-blue", "willa-charger-amber", "le-panier-charger"]
    },

    // ===== CORKCICLE =====
    "estelle-tote": {
        id: "estelle-tote",
        name: "Estelle Tote",
        brand: "Corkcicle",
        price: 180,
        sku: "113141",
        status: "in-stock",
        description: "Bolsa cooler premium Estelle de Corkcicle. Aislamiento térmico avanzado con diseño elegante que no parece una nevera portátil. Perfecta para picnics, playa o compras en el mercado.",
        material: "Nylon premium + aislamiento térmico",
        origin: "USA",
        dimensions: "Capacidad grande",
        collection: "Estelle",
        category: "Cooler",
        images: [
            "https://letavole.com/wp-content/uploads/2024/08/113141-03.webp"
        ],
        related: ["lunchpod", "icone-steel-blue", "alessandro-sacacorchos"]
    },
    "lunchpod": {
        id: "lunchpod",
        name: "Lunchpod",
        brand: "Corkcicle",
        price: 74,
        sku: "111511",
        status: "in-stock",
        description: "Contenedor de almuerzo con aislamiento térmico. Mantiene la comida fría o caliente durante horas. Diseño compacto y elegante para llevar tu almuerzo con estilo.",
        material: "Nylon + aislamiento térmico",
        origin: "USA",
        dimensions: "Compacto",
        collection: "Lunch",
        category: "Lunch Bag",
        images: [
            "https://letavole.com/wp-content/uploads/2023/08/111511.jpg"
        ],
        related: ["estelle-tote", "icone-steel-blue", "blox-organiser"]
    },

    // ===== JOSEPH JOSEPH =====
    "space-saucepan-set": {
        id: "space-saucepan-set",
        name: "Space 3pc Saucepan Set",
        brand: "Joseph Joseph",
        price: 571,
        sku: "114021",
        badge: "Nuevo",
        status: "in-stock",
        description: "Set de 3 ollas con mangos plegables que ahorran espacio. Cerámica antiadherente azul. Diseño inteligente británico que resuelve el problema del almacenamiento en cocinas modernas.",
        material: "Aluminio + cerámica antiadherente",
        origin: "Reino Unido",
        dimensions: "3 piezas con tapas",
        collection: "Space",
        category: "Cocina",
        images: [
            "https://letavole.com/wp-content/uploads/2025/04/114021.jpg"
        ],
        related: ["blox-organiser", "lunchpod", "moledor-pimienta"]
    },
    "blox-organiser": {
        id: "blox-organiser",
        name: "Blox 10 Piece Drawer Organiser Set",
        brand: "Joseph Joseph",
        price: 89,
        sku: "115579",
        badge: "Nuevo",
        status: "in-stock",
        description: "Set de 10 piezas para organizar cajones de cocina. Sistema modular que se adapta a cualquier cajón. Diseño inteligente de Joseph Joseph para mantener todo en su lugar.",
        material: "Plástico reciclado",
        origin: "Reino Unido",
        dimensions: "10 piezas modulares",
        collection: "Blox",
        category: "Organización",
        images: [
            "https://letavole.com/wp-content/uploads/2026/03/115579-05.jpg"
        ],
        related: ["space-saucepan-set", "lunchpod", "moledor-pimienta"]
    },

    // ===== ICHENDORF =====
    "leafbug-tray": {
        id: "leafbug-tray",
        name: "Leafbug Trinket Tray Light Blue",
        brand: "Ichendorf",
        price: 318,
        sku: "115373",
        badge: "Nuevo",
        status: "in-stock",
        description: "Bandeja trinket con diseño Leafbug de la colección Fantastic Creatures. Porcelana italiana con borde de oro de 18K pintado a mano. Perfecta para joyas, llaves o como pieza decorativa.",
        material: "100% Porcelana",
        origin: "Hecho a mano en Verona, Italia",
        dimensions: "21 × 16 cm",
        care: "Apto para lavavajillas",
        collection: "Fantastic Creatures con Beto Val",
        category: "Accesorios",
        images: [
            "https://letavole.com/wp-content/uploads/2025/12/115373-0.jpg"
        ],
        related: ["leaftrail-incense", "parrotstem-tray", "leafflyer-tray"]
    },
    "leafflyer-tray": {
        id: "leafflyer-tray",
        name: "Leafflyer Trinket Tray Saffron",
        brand: "Ichendorf",
        price: 401,
        sku: "115372",
        status: "in-stock",
        description: "Bandeja trinket cuadrada con diseño Leafflyer en azafrán. Colección Fantastic Creatures. Porcelana italiana con borde de oro de 18K pintado a mano.",
        material: "100% Porcelana",
        origin: "Hecho en Italia (Verona)",
        dimensions: "21 × 21 cm",
        care: "Apto para lavavajillas",
        collection: "Fantastic Creatures con Beto Val",
        category: "Accesorios",
        images: [
            "https://letavole.com/wp-content/uploads/2025/12/115372.jpg"
        ],
        related: ["leaftrail-incense", "parrotstem-tray", "leafbug-tray"]
    },
    "trinket-libellula": {
        id: "trinket-libellula",
        name: "Trinket Tray Libellula",
        brand: "Ichendorf",
        price: 215,
        sku: "113359",
        status: "out-of-stock",
        description: "Bandeja trinket con diseño Libellula (libélula). Porcelana italiana con detalles en oro de 18K. Actualmente agotada — contáctanos para lista de espera.",
        material: "100% Porcelana italiana",
        origin: "Hecho en Italia",
        dimensions: "15 × 15 cm",
        care: "Apto para lavavajillas",
        collection: "Libellula",
        category: "Accesorios",
        images: [
            "https://letavole.com/wp-content/uploads/2025/01/113359.jpg"
        ],
        related: ["leaftrail-incense", "parrotstem-tray", "leafbug-tray"]
    }
};

// Helper: get product by ID
function getProduct(id) {
    return PRODUCTS[id] || null;
}

// Helper: get related products
function getRelatedProducts(product) {
    if (!product || !product.related) return [];
    return product.related.map(id => PRODUCTS[id]).filter(Boolean);
}

// Helper: format price
function formatPrice(price) {
    return `US$${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
}

// Helper: get all products as array
function getAllProducts() {
    return Object.values(PRODUCTS);
}

// Helper: filter by brand
function getProductsByBrand(brand) {
    return getAllProducts().filter(p => p.brand.toLowerCase() === brand.toLowerCase());
}
