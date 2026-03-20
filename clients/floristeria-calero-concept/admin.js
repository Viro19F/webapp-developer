(function () {
  const store = window.CALERO_STORE;
  if (!store) {
    return;
  }

  const AUTH_SESSION_KEY = "calero-admin-session-v1";

  function byId(id) {
    return document.getElementById(id);
  }

  let products = store.readProducts();
  let siteContent = store.readSiteContent();
  let selectedId = products[0] ? products[0].id : null;
  let currentPanel = "products";

  function categoryLabel(id) {
    const match = store.categories.find((item) => item.id === id);
    return match ? match.label : id;
  }

  function placementLabel(id) {
    const match = store.placements.find((item) => item.id === id);
    return match ? match.label : id;
  }

  function setMessage(id, message, isError) {
    const root = byId(id);
    if (!root) {
      return;
    }
    root.textContent = message || "";
    root.classList.toggle("is-error", Boolean(isError));
  }

  function setStatus(message, isError) {
    setMessage("adminStatus", message, isError);
  }

  function blankProduct() {
    return {
      id: "",
      name: "",
      category: "cumpleanos",
      price: "",
      badge: "",
      subtitle: "",
      intro: "",
      description: "",
      detail: "",
      includes: "",
      delivery: "",
      care: "",
      placement: "catalogo",
      sortOrder: products.length + 1,
      featured: false,
      images: [store.assets.hero],
    };
  }

  function currentProduct() {
    return products.find((item) => item.id === selectedId) || blankProduct();
  }

  function imagesToText(images) {
    return (images || []).join("\n");
  }

  function productFormData() {
    return {
      id: byId("productId").value.trim(),
      name: byId("productName").value.trim(),
      category: byId("productCategory").value,
      price: byId("productPrice").value.trim(),
      badge: byId("productBadge").value.trim(),
      subtitle: byId("productSubtitle").value.trim(),
      intro: byId("productIntro").value.trim(),
      description: byId("productDescription").value.trim(),
      detail: byId("productDetail").value.trim(),
      includes: byId("productIncludes").value.trim(),
      delivery: byId("productDelivery").value.trim(),
      care: byId("productCare").value.trim(),
      placement: byId("productPlacement").value,
      sortOrder: byId("productSortOrder").value.trim(),
      featured: byId("productPlacement").value === "featured",
      images: byId("productImages")
        .value.split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
    };
  }

  function populateProductForm(product) {
    byId("productId").value = product.id || "";
    byId("productName").value = product.name || "";
    byId("productCategory").value = product.category || "cumpleanos";
    byId("productPrice").value = product.price === "" ? "" : product.price;
    byId("productBadge").value = product.badge || "";
    byId("productSubtitle").value = product.subtitle || "";
    byId("productIntro").value = product.intro || "";
    byId("productDescription").value = product.description || "";
    byId("productDetail").value = product.detail || "";
    byId("productIncludes").value = product.includes || "";
    byId("productDelivery").value = product.delivery || "";
    byId("productCare").value = product.care || "";
    byId("productPlacement").value = product.placement || "catalogo";
    byId("productSortOrder").value = product.sortOrder || products.length + 1;
    byId("productImages").value = imagesToText(product.images);
    renderPreview(product);
  }

  function renderPreview(product) {
    const image = (product.images && product.images[0]) || store.assets.hero;
    byId("previewImage").src = image;
    byId("previewImage").alt = product.name || "Vista previa";
    byId("previewName").textContent = product.name || "Nuevo producto";
    byId("previewMeta").textContent = `${categoryLabel(product.category || "cumpleanos")} · ${product.subtitle || "Sin subtítulo"}`;
    byId("previewPrice").textContent = product.price === "" ? "Precio pendiente" : store.formatPrice(product.price);
    byId("previewPlacement").textContent = placementLabel(product.placement || "catalogo");
  }

  function sortProducts(list) {
    return list.slice().sort((left, right) => {
      const orderDelta = Number(left.sortOrder || 0) - Number(right.sortOrder || 0);
      if (orderDelta !== 0) {
        return orderDelta;
      }
      return String(left.name || "").localeCompare(String(right.name || ""), "es");
    });
  }

  function renderList() {
    const root = byId("productList");
    const stats = byId("adminStats");
    const placementStats = byId("adminPlacementCount");
    if (!root) {
      return;
    }

    root.innerHTML = sortProducts(products)
      .map(
        (product) => `
          <button type="button" class="admin-list-item${
            product.id === selectedId ? " is-active" : ""
          }" data-id="${product.id}">
            <img src="${product.images[0]}" alt="${product.name}">
            <div>
              <strong>${product.name}</strong>
              <span>${store.formatPrice(product.price)} · ${placementLabel(product.placement)}</span>
            </div>
          </button>
        `
      )
      .join("");

    if (stats) {
      const featured = products.filter((item) => item.placement === "featured").length;
      stats.textContent = `${products.length} productos · ${featured} destacados`;
    }

    if (placementStats) {
      const spotlight = products.filter((item) => item.placement === "spotlight").length;
      placementStats.textContent = `${products.filter((item) => item.placement === "featured").length} destacados · ${spotlight} editoriales`;
    }
  }

  function syncStorefrontCount() {
    const count = byId("adminProductCount");
    if (count) {
      count.textContent = String(products.length);
    }
  }

  function persistProducts(message) {
    products = store.saveProducts(products);
    renderList();
    syncStorefrontCount();
    if (message) {
      setStatus(message);
    }
  }

  function selectProduct(id) {
    selectedId = id;
    populateProductForm(currentProduct());
    renderList();
  }

  function importCatalog(file) {
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", function () {
      try {
        const parsed = JSON.parse(String(reader.result || "[]"));
        if (!Array.isArray(parsed)) {
          throw new Error("Formato inválido");
        }
        products = store.saveProducts(parsed);
        selectedId = products[0] ? products[0].id : "__new__";
        renderList();
        syncStorefrontCount();
        populateProductForm(currentProduct());
        setStatus("Catálogo importado correctamente.");
      } catch (error) {
        setStatus("No se pudo importar el JSON del catálogo.", true);
      }
    });
    reader.readAsText(file);
  }

  function handleImageUpload(file) {
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", function () {
      const dataUrl = String(reader.result || "").trim();
      if (!dataUrl) {
        setStatus("No se pudo leer la imagen seleccionada.", true);
        return;
      }
      const field = byId("productImages");
      const lines = field.value
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);
      lines.unshift(dataUrl);
      field.value = Array.from(new Set(lines)).join("\n");
      renderPreview(productFormData());
      setStatus("Imagen añadida al producto. Guárdalo para publicarla.");
    });
    reader.readAsDataURL(file);
  }

  function populateHomepageForm() {
    const homepage = siteContent.homepage || {};
    byId("heroTitleInput").value = homepage.heroTitle || "";
    byId("heroTextInput").value = homepage.heroText || "";
    byId("featuredTitleInput").value = homepage.featuredTitle || "";
    byId("featuredIntroInput").value = homepage.featuredIntro || "";
    byId("spotlightTitleInput").value = homepage.spotlightTitle || "";
    byId("spotlightIntroInput").value = homepage.spotlightIntro || "";
  }

  function saveHomepageForm() {
    siteContent = store.saveSiteContent({
      ...siteContent,
      homepage: {
        heroTitle: byId("heroTitleInput").value.trim(),
        heroText: byId("heroTextInput").value.trim(),
        featuredTitle: byId("featuredTitleInput").value.trim(),
        featuredIntro: byId("featuredIntroInput").value.trim(),
        spotlightTitle: byId("spotlightTitleInput").value.trim(),
        spotlightIntro: byId("spotlightIntroInput").value.trim(),
      },
    });
    setMessage("homepageStatus", "Textos de portada guardados. La home ya leerá esta versión.", false);
    setStatus("La portada quedó actualizada desde el panel.");
  }

  function resetHomepageForm() {
    const defaults = store.defaultSiteContent.homepage || {};
    siteContent = store.saveSiteContent({
      ...siteContent,
      homepage: defaults,
    });
    populateHomepageForm();
    setMessage("homepageStatus", "Textos de portada restablecidos a la versión base.", false);
  }

  function isAuthenticated() {
    return localStorage.getItem(AUTH_SESSION_KEY) === (siteContent.settings.adminPasscode || "");
  }

  function setAuthenticated(passcode) {
    if (!passcode) {
      localStorage.removeItem(AUTH_SESSION_KEY);
      return;
    }
    localStorage.setItem(AUTH_SESSION_KEY, passcode);
  }

  function showAdmin() {
    byId("adminAuth").classList.add("is-hidden");
    byId("adminApp").classList.remove("is-hidden");
  }

  function showLogin() {
    byId("adminAuth").classList.remove("is-hidden");
    byId("adminApp").classList.add("is-hidden");
    byId("authPasscode").value = "";
    setMessage("authStatus", "Introduce la clave del panel.", false);
  }

  function switchPanel(panel) {
    currentPanel = panel;
    document.querySelectorAll("[data-admin-tab]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.adminTab === panel);
    });
    document.querySelectorAll("[data-admin-panel]").forEach((section) => {
      section.classList.toggle("is-hidden", section.dataset.adminPanel !== panel);
    });
    const sidebar = byId("adminSidebar");
    if (sidebar) {
      sidebar.classList.toggle("is-hidden", panel !== "products");
    }
  }

  function bindAccessForm() {
    byId("authForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const passcode = byId("authPasscode").value.trim();
      if (!passcode) {
        setMessage("authStatus", "Añade una clave para entrar.", true);
        return;
      }
      if (passcode !== siteContent.settings.adminPasscode) {
        setMessage("authStatus", "La clave no coincide.", true);
        return;
      }
      setAuthenticated(passcode);
      showAdmin();
      setMessage("authStatus", "", false);
      setStatus("Panel abierto correctamente.");
    });

    byId("logoutAdmin").addEventListener("click", function () {
      setAuthenticated("");
      showLogin();
    });

    byId("accessForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const current = byId("currentPasscode").value.trim();
      const next = byId("newPasscode").value.trim();
      const confirm = byId("confirmPasscode").value.trim();

      if (current !== siteContent.settings.adminPasscode) {
        setMessage("accessStatus", "La clave actual no coincide.", true);
        return;
      }
      if (!next || next.length < 4) {
        setMessage("accessStatus", "Usa una clave de al menos 4 caracteres.", true);
        return;
      }
      if (next !== confirm) {
        setMessage("accessStatus", "La nueva clave y la confirmación no coinciden.", true);
        return;
      }

      siteContent = store.saveSiteContent({
        ...siteContent,
        settings: {
          ...siteContent.settings,
          adminPasscode: next,
        },
      });
      setAuthenticated(next);
      byId("currentPasscode").value = "";
      byId("newPasscode").value = "";
      byId("confirmPasscode").value = "";
      setMessage("accessStatus", "Clave actualizada. El panel seguirá abierto con la nueva.", false);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const categorySelect = byId("productCategory");
    if (categorySelect) {
      categorySelect.innerHTML = store.categories
        .filter((item) => item.id !== "all")
        .map((item) => `<option value="${item.id}">${item.label}</option>`)
        .join("");
    }

    const placementSelect = byId("productPlacement");
    if (placementSelect) {
      placementSelect.innerHTML = store.placements
        .map((item) => `<option value="${item.id}">${item.label}</option>`)
        .join("");
    }

    renderList();
    syncStorefrontCount();
    populateProductForm(currentProduct());
    populateHomepageForm();
    bindAccessForm();
    setStatus("Catálogo listo para editar.");

    document.querySelectorAll("[data-admin-tab]").forEach((button) => {
      button.addEventListener("click", function () {
        switchPanel(button.dataset.adminTab);
      });
    });

    byId("productList").addEventListener("click", function (event) {
      const target = event.target.closest("button[data-id]");
      if (!target) {
        return;
      }
      selectProduct(target.dataset.id);
    });

    byId("productForm").addEventListener("input", function () {
      renderPreview(productFormData());
    });

    byId("newProduct").addEventListener("click", function () {
      selectedId = "__new__";
      populateProductForm(blankProduct());
      renderList();
      switchPanel("products");
      setStatus("Creando un nuevo producto.");
    });

    byId("saveProduct").addEventListener("click", function (event) {
      event.preventDefault();
      const raw = productFormData();
      if (!raw.name) {
        setStatus("Añade al menos un nombre de producto antes de guardar.", true);
        return;
      }
      const normalized = store.normalizeProduct(raw, products.length);
      const existingIndex = products.findIndex((item) => item.id === selectedId || item.id === normalized.id);
      if (existingIndex >= 0) {
        products.splice(existingIndex, 1, normalized);
      } else {
        products.unshift(normalized);
      }
      selectedId = normalized.id;
      persistProducts(`Producto guardado: ${normalized.name}.`);
      populateProductForm(normalized);
    });

    byId("deleteProduct").addEventListener("click", function () {
      if (!selectedId || selectedId === "__new__") {
        populateProductForm(blankProduct());
        return;
      }
      const removed = currentProduct();
      products = products.filter((item) => item.id !== selectedId);
      persistProducts(`Producto eliminado: ${removed.name}.`);
      selectedId = products[0] ? products[0].id : "__new__";
      populateProductForm(currentProduct());
    });

    byId("resetCatalog").addEventListener("click", function () {
      products = store.resetProducts();
      selectedId = products[0] ? products[0].id : "__new__";
      renderList();
      syncStorefrontCount();
      populateProductForm(currentProduct());
      setStatus("Catálogo restablecido al estado inicial.");
    });

    byId("exportCatalog").addEventListener("click", function () {
      const blob = new Blob([JSON.stringify(products, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "calero-catalogo.json";
      link.click();
      URL.revokeObjectURL(link.href);
      setStatus("Catálogo exportado en JSON.");
    });

    byId("importCatalog").addEventListener("click", function () {
      byId("importCatalogFile").click();
    });

    byId("importCatalogFile").addEventListener("change", function (event) {
      importCatalog(event.target.files && event.target.files[0]);
      event.target.value = "";
    });

    byId("uploadProductImage").addEventListener("click", function () {
      byId("productImageUpload").click();
    });

    byId("productImageUpload").addEventListener("change", function (event) {
      handleImageUpload(event.target.files && event.target.files[0]);
      event.target.value = "";
    });

    byId("homepageForm").addEventListener("submit", function (event) {
      event.preventDefault();
      saveHomepageForm();
    });

    byId("restoreHomepage").addEventListener("click", function () {
      resetHomepageForm();
    });

    switchPanel("products");

    if (isAuthenticated()) {
      showAdmin();
    } else {
      showLogin();
    }
  });
})();
