(function () {
  const store = window.CALERO_STORE;
  if (!store) {
    return;
  }
  const config = store.config || {};

  function byId(id) {
    return document.getElementById(id);
  }

  function getProducts() {
    return store.readProducts();
  }

  function getContent() {
    return store.readSiteContent();
  }

  function sortProducts(products) {
    return products.slice().sort((left, right) => {
      const orderDelta = Number(left.sortOrder || 0) - Number(right.sortOrder || 0);
      if (orderDelta !== 0) {
        return orderDelta;
      }
      return String(left.name || "").localeCompare(String(right.name || ""), "es");
    });
  }

  function priceLabel(product) {
    return store.formatPrice(product.price);
  }

  function phoneLink() {
    return `tel:+34${config.phone || "915641846"}`;
  }

  function emailLink(subject, lines) {
    const params = new URLSearchParams();
    params.set("subject", subject);
    params.set("body", lines.filter(Boolean).join("\n"));
    return `mailto:${config.email || "caleroflor2004@gmail.com"}?${params.toString()}`;
  }

  function categoryLabel(id) {
    const match = store.categories.find((item) => item.id === id);
    return match ? match.label : id;
  }

  function placementLabel(id) {
    const match = store.placements.find((item) => item.id === id);
    return match ? match.label : id;
  }

  function productCard(product) {
    const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : "";
    const image = product.images[0] || store.assets.hero;
    return `
      <article class="product-card reveal" data-category="${product.category}" data-placement="${product.placement}">
        <a class="product-media" href="producto.html?id=${product.id}">
          ${badge}
          <img src="${image}" alt="${product.name}" loading="lazy">
        </a>
        <div class="product-copy">
          <div class="product-meta">
            <span>${categoryLabel(product.category)}</span>
            <span>${product.subtitle}</span>
          </div>
          <h3><a href="producto.html?id=${product.id}">${product.name}</a></h3>
          <p>${product.intro}</p>
          <div class="product-footer">
            <strong>${priceLabel(product)}</strong>
            <a class="text-link" href="producto.html?id=${product.id}">Ver producto</a>
          </div>
        </div>
      </article>
    `;
  }

  function applyHomepageContent() {
    const content = getContent();
    const homepage = content.homepage || {};
    const bindings = [
      ["heroTitle", homepage.heroTitle],
      ["heroText", homepage.heroText],
      ["featuredTitle", homepage.featuredTitle],
      ["featuredIntro", homepage.featuredIntro],
      ["spotlightTitle", homepage.spotlightTitle],
      ["spotlightIntro", homepage.spotlightIntro],
    ];

    bindings.forEach(([id, value]) => {
      const node = byId(id);
      if (node && value) {
        node.textContent = value;
      }
    });
  }

  function setupHeader() {
    const header = document.querySelector(".site-header");
    const toggle = byId("navToggle");
    const nav = byId("navLinks");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        const next = !nav.classList.contains("open");
        nav.classList.toggle("open", next);
        toggle.setAttribute("aria-expanded", String(next));
      });
    }
    window.addEventListener("scroll", function () {
      if (!header) {
        return;
      }
      header.classList.toggle("scrolled", window.scrollY > 8);
    });
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) {
      return;
    }

    let remaining = items.length;

    function markVisible(item) {
      if (item.classList.contains("is-visible")) {
        return;
      }
      item.classList.add("is-visible");
      remaining -= 1;
      if (remaining <= 0) {
        window.clearTimeout(forceVisibleTimer);
      }
    }

    const forceVisibleTimer = window.setTimeout(function () {
      items.forEach(markVisible);
    }, 900);

    if (!("IntersectionObserver" in window)) {
      items.forEach(markVisible);
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          markVisible(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((item) => observer.observe(item));
  }

  function renderFeatured() {
    const root = byId("featuredGrid");
    if (!root) {
      return;
    }
    const featured = sortProducts(
      getProducts().filter((product) => product.placement === "featured" || product.featured)
    ).slice(0, 4);
    root.innerHTML = featured.map(productCard).join("");
  }

  function renderSpotlight() {
    const root = byId("spotlightGrid");
    const section = byId("spotlightSection");
    if (!root || !section) {
      return;
    }
    const spotlight = sortProducts(
      getProducts().filter((product) => product.placement === "spotlight")
    ).slice(0, 2);

    if (!spotlight.length) {
      section.classList.add("is-hidden");
      return;
    }

    section.classList.remove("is-hidden");
    root.innerHTML = spotlight.map(productCard).join("");
  }

  function renderCatalog() {
    const root = byId("catalogGrid");
    const filters = byId("filterRow");
    const count = byId("catalogCount");
    if (!root) {
      return;
    }

    const products = sortProducts(getProducts());
    let active = "all";

    function draw() {
      const visible =
        active === "all" ? products : products.filter((item) => item.category === active);
      root.innerHTML = visible.map(productCard).join("");
      if (count) {
        count.textContent = `${visible.length} productos`;
      }
      if (filters) {
        filters.querySelectorAll("button").forEach((button) => {
          button.classList.toggle("is-active", button.dataset.filter === active);
        });
      }
      setupReveal();
    }

    if (filters) {
      filters.innerHTML = store.categories
        .map(
          (category) => `
            <button type="button" class="filter-chip${
              category.id === "all" ? " is-active" : ""
            }" data-filter="${category.id}">
              ${category.label}
            </button>
          `
        )
        .join("");

      filters.addEventListener("click", function (event) {
        const target = event.target.closest("button[data-filter]");
        if (!target) {
          return;
        }
        active = target.dataset.filter;
        draw();
      });
    }

    draw();
  }

  function renderProduct() {
    if (!byId("productName")) {
      return;
    }

    const products = sortProducts(getProducts());
    const map = Object.fromEntries(products.map((item) => [item.id, item]));
    const params = new URLSearchParams(window.location.search);
    const product = map[params.get("id")] || products[0];
    if (!product) {
      return;
    }

    byId("crumbProduct").textContent = product.name;
    byId("productName").textContent = product.name;
    byId("productSubtitle").textContent = `${categoryLabel(product.category)} · ${product.subtitle}`;
    byId("productPrice").textContent = priceLabel(product);
    byId("productIntro").textContent = product.intro;
    byId("productDescription").textContent = product.description;
    byId("productDetail").textContent = product.detail;
    byId("productIncludes").textContent = product.includes;
    byId("productDelivery").textContent = product.delivery;
    byId("productCare").textContent = product.care;
    document.title = `${product.name} | Floristería Calero`;

    const main = byId("productMainImage");
    main.src = product.images[0];
    main.alt = product.name;

    const callLink = byId("productCallLink");
    if (callLink) {
      callLink.href = phoneLink();
    }

    const orderLink = byId("productEmailLink");
    if (orderLink) {
      orderLink.href = emailLink(`Pedido ${product.name}`, [
        `Producto: ${product.name}`,
        `Precio de referencia: ${priceLabel(product)}`,
        `Ocasión: ${categoryLabel(product.category)}`,
        `Ubicación en la web: ${placementLabel(product.placement)}`,
        "",
        "Nombre:",
        "Teléfono:",
        "Dirección de entrega:",
        "Fecha y franja horaria:",
        "Mensaje para la tarjeta:",
      ]);
    }

    const thumbGrid = byId("thumbGrid");
    if (thumbGrid) {
      thumbGrid.innerHTML = product.images
        .map(
          (image, index) => `
            <button type="button" class="thumb-button${
              index === 0 ? " is-active" : ""
            }" data-image="${image}" aria-label="Imagen ${index + 1} de ${product.name}">
              <img src="${image}" alt="${product.name} ${index + 1}">
            </button>
          `
        )
        .join("");

      thumbGrid.addEventListener("click", function (event) {
        const target = event.target.closest("button[data-image]");
        if (!target) {
          return;
        }
        main.src = target.dataset.image;
        thumbGrid.querySelectorAll("button").forEach((button) => {
          button.classList.toggle("is-active", button === target);
        });
      });
    }

    const relatedRoot = byId("relatedGrid");
    if (relatedRoot) {
      const visible = products.filter((item) => item.id !== product.id).slice(0, 3);
      relatedRoot.innerHTML = visible.map(productCard).join("");
    }
  }

  function renderAdminPreviewCount() {
    const count = byId("adminProductCount");
    if (count) {
      count.textContent = String(getProducts().length);
    }
  }

  function labelFromName(name) {
    return String(name || "")
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function setupMailForms() {
    const forms = document.querySelectorAll("[data-mail-form]");
    forms.forEach((form) => {
      const feedback = form.querySelector("[data-form-feedback]");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const lines = [];

        formData.forEach((value, key) => {
          const text = String(value || "").trim();
          if (!text) {
            return;
          }
          lines.push(`${labelFromName(key)}: ${text}`);
        });

        if (!lines.length) {
          if (feedback) {
            feedback.textContent = "Completa al menos un campo antes de enviar la solicitud.";
          }
          return;
        }

        if (feedback) {
          feedback.textContent = "Se abre tu gestor de correo para enviar la solicitud.";
        }

        window.location.href = emailLink(
          form.dataset.subject || "Consulta Floristería Calero",
          lines
        );
      });
    });
  }

  function setYear() {
    const year = byId("footerYear");
    if (year) {
      year.textContent = String(new Date().getFullYear());
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyHomepageContent();
    setupHeader();
    renderFeatured();
    renderSpotlight();
    renderCatalog();
    renderProduct();
    renderAdminPreviewCount();
    setupMailForms();
    setupReveal();
    setYear();
  });
})();
