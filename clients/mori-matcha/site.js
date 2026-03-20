(function () {
  const store = window.MATCHA_PRODUCTS;

  function byId(id) {
    return document.getElementById(id);
  }

  function formatPrice(value) {
    return new Intl.NumberFormat("en-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  }

  function createProductCard(product) {
    const badge = product.badge
      ? `<span class="product-badge">${product.badge}</span>`
      : "";

    return `
      <article class="product-card reveal" data-category="${product.category}">
        <a class="product-media" href="product.html?id=${product.id}" aria-label="${product.name}">
          ${badge}
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        </a>
        <div class="product-copy">
          <div class="product-meta">
            <span>${product.category}</span>
            <span>${product.origin}</span>
          </div>
          <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
          <p>${product.description}</p>
          <div class="product-footer">
            <strong>${formatPrice(product.price)}</strong>
            <a class="text-link" href="product.html?id=${product.id}">View product</a>
          </div>
        </div>
      </article>
    `;
  }

  function setupNavigation() {
    const header = document.querySelector(".site-header");
    const toggle = byId("navToggle");
    const links = byId("navLinks");

    if (toggle && links) {
      toggle.addEventListener("click", function () {
        const next = !links.classList.contains("open");
        links.classList.toggle("open", next);
        toggle.setAttribute("aria-expanded", String(next));
      });
    }

    window.addEventListener("scroll", function () {
      if (!header) {
        return;
      }
      header.classList.toggle("scrolled", window.scrollY > 12);
    });
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length || !("IntersectionObserver" in window)) {
      for (const item of items) {
        item.classList.add("is-visible");
      }
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 }
    );

    for (const item of items) {
      observer.observe(item);
    }
  }

  function renderFeaturedProducts() {
    const root = byId("featuredProducts");
    if (!root || !store) {
      return;
    }

    const items = store.list.filter((product) => product.featured).slice(0, 4);
    root.innerHTML = items.map(createProductCard).join("");
  }

  function renderShop() {
    const root = byId("shopGrid");
    const filters = byId("filterRow");
    const count = byId("shopCount");

    if (!root || !store) {
      return;
    }

    let active = "all";

    function draw() {
      const items =
        active === "all"
          ? store.list
          : store.list.filter((product) => product.category === active);

      root.innerHTML = items.map(createProductCard).join("");
      if (count) {
        count.textContent = `${items.length} products`;
      }

      if (filters) {
        const chips = filters.querySelectorAll("button");
        for (const chip of chips) {
          chip.classList.toggle("is-active", chip.dataset.filter === active);
        }
      }

      setupReveal();
    }

    if (filters) {
      filters.innerHTML = store.categories
        .map(
          (category) =>
            `<button type="button" class="filter-chip${
              category.id === "all" ? " is-active" : ""
            }" data-filter="${category.id}">${category.label}</button>`
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
    const name = byId("productName");
    if (!name || !store) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const fallback = store.list[0];
    const product = store.map[params.get("id")] || fallback;

    byId("productName").textContent = product.name;
    byId("productCategory").textContent = product.category;
    byId("productPrice").textContent = formatPrice(product.price);
    byId("productOrigin").textContent = product.origin;
    byId("productSize").textContent = product.size;
    byId("productTasting").textContent = product.tasting;
    byId("productDescription").textContent = product.description;
    byId("productDetails").textContent = product.details;
    byId("productIngredients").textContent = product.ingredients;
    byId("productServing").textContent = product.serving;
    byId("productMainImage").src = product.images[0];
    byId("productMainImage").alt = product.name;
    byId("crumbProduct").textContent = product.name;
    byId("reserveLink").href = `contact.html#reserve`;

    const thumbRoot = byId("productThumbs");
    if (thumbRoot) {
      thumbRoot.innerHTML = product.images
        .map(
          (image, index) => `
            <button type="button" class="thumb-button${
              index === 0 ? " is-active" : ""
            }" data-image="${image}" aria-label="View ${product.name} image ${index + 1}">
              <img src="${image}" alt="${product.name} view ${index + 1}">
            </button>
          `
        )
        .join("");

      thumbRoot.addEventListener("click", function (event) {
        const button = event.target.closest("button[data-image]");
        if (!button) {
          return;
        }
        byId("productMainImage").src = button.dataset.image;
        const buttons = thumbRoot.querySelectorAll("button");
        for (const current of buttons) {
          current.classList.toggle("is-active", current === button);
        }
      });
    }

    const relatedRoot = byId("relatedGrid");
    if (relatedRoot) {
      const items = product.related
        .map((id) => store.map[id])
        .filter(Boolean)
        .map(createProductCard);
      relatedRoot.innerHTML = items.join("");
    }
  }

  function setupYear() {
    const year = byId("footerYear");
    if (year) {
      year.textContent = String(new Date().getFullYear());
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupNavigation();
    renderFeaturedProducts();
    renderShop();
    renderProduct();
    setupReveal();
    setupYear();
  });
})();
