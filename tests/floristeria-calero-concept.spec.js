const { test, expect } = require("@playwright/test");

const BASE = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:8124";

test.describe("Floristeria Calero premium concept", () => {
  test("homepage loads with premium hero and featured products", async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveTitle(/Floristería Calero/);
    await expect(page.locator("h1")).toContainText("Flores para regalar hoy en Madrid.");
    await expect(page.locator(".hero-proof div")).toHaveCount(3);
    await expect(page.locator(".occasion-grid .occasion-media")).toHaveCount(3);
    await expect(page.locator("#featuredGrid .product-card")).toHaveCount(4);
    await expect(page.locator("#spotlightGrid .product-card")).toHaveCount(2);
  });

  test("catalog filters by occasion", async ({ page }) => {
    await page.goto(`${BASE}/colecciones.html`);
    await expect(page.locator("#catalogGrid .product-card")).toHaveCount(7);
    await page.click('.filter-chip:has-text("Amor")');
    await expect(page.locator("#catalogGrid .product-card")).toHaveCount(1);
    await expect(page.locator("#catalogGrid")).toContainText("Ramo de 6 rosas");
  });

  test("product page loads order actions", async ({ page }) => {
    await page.goto(`${BASE}/producto.html?id=ramo-grecia`);
    await expect(page.locator("#productName")).toContainText("Ramo Grecia");
    await expect(page.locator("#productPrice")).toContainText("36,30");
    await expect(page.locator("#thumbGrid button")).toHaveCount(3);
    await expect(page.locator("#productCallLink")).toHaveAttribute("href", /tel:/);
    await expect(page.locator("#productEmailLink")).toHaveAttribute("href", /mailto:/);
  });

  test("service pages expose operational forms", async ({ page }) => {
    await page.goto(`${BASE}/bodas-eventos.html`);
    await expect(page.locator("h1")).toContainText("Flores para bodas y celebraciones");
    await expect(page.locator('form[data-mail-form] button[type="submit"]')).toContainText("Enviar solicitud");

    await page.goto(`${BASE}/funerario.html`);
    await expect(page.locator("h1")).toContainText("Atención rápida y cuidada");
    await expect(page.locator('input[name="tanatorio"]')).toBeVisible();

    await page.goto(`${BASE}/contacto.html`);
    await expect(page.locator('form[data-mail-form] button[type="submit"]')).toContainText("Preparar email");
  });

  test("admin can create a product and storefront reflects it", async ({ page }) => {
    await page.goto(`${BASE}/admin.html`);
    await page.fill("#authPasscode", "calero2026");
    await page.click('#authForm button[type="submit"]');
    await page.click("#newProduct");

    await page.fill("#productName", "Ramo Jade");
    await page.selectOption("#productCategory", "amor");
    await page.fill("#productPrice", "52");
    await page.selectOption("#productPlacement", "spotlight");
    await page.fill("#productSortOrder", "1");
    await page.fill("#productBadge", "Nuevo");
    await page.fill("#productSubtitle", "Aniversarios y detalle especial");
    await page.fill("#productIntro", "Un ramo elegante para regalar con una lectura romántica clara.");
    await page.fill("#productDescription", "Flores seleccionadas en tonos rosados y verdes con una presencia serena.");
    await page.fill("#productDetail", "Ideal para aniversarios, sorpresas y cenas especiales.");
    await page.fill("#productIncludes", "Flor variada, verdes suaves y presentación cuidada.");
    await page.fill("#productDelivery", "Entrega en Madrid con reparto propio.");
    await page.fill("#productCare", "Agua fresca y tallos recortados cada 48 horas.");
    await page.fill(
      "#productImages",
      "https://floristeriacalero.madrid/wp-content/uploads/2021/12/ramo-trabajo-calero.jpg"
    );
    await page.click("#saveProduct");

    await expect(page.locator("#adminStatus")).toContainText("Producto guardado: Ramo Jade.");
    await expect(page.locator("#productList")).toContainText("Ramo Jade");

    await page.goto(BASE);
    await expect(page.locator("#spotlightGrid")).toContainText("Ramo Jade");
  });
});

test.describe("Floristeria Calero concept mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("mobile nav opens", async ({ page }) => {
    await page.goto(BASE);
    await page.click("#navToggle");
    await expect(page.locator("#navLinks")).toHaveClass(/open/);
  });
});
