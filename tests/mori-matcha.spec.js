const { test, expect } = require("@playwright/test");

const BASE = "http://localhost:8080";

test.describe("Mori Matcha homepage", () => {
  test("loads with hero and featured products", async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveTitle(/Mori Matcha/);
    await expect(page.locator("h1")).toContainText("A softer way to wake up.");
    await expect(page.locator("#featuredProducts .product-card")).toHaveCount(4);
  });

  test("navigation links exist", async ({ page }) => {
    await page.goto(BASE);
    const links = page.locator("#navLinks a");
    await expect(links).toHaveCount(4);
  });
});

test.describe("Mori Matcha shop", () => {
  test("renders products and filters", async ({ page }) => {
    await page.goto(`${BASE}/shop.html`);
    await expect(page.locator("#shopGrid .product-card")).toHaveCount(8);
    await page.click('.filter-chip:has-text("Ceremonial")');
    await expect(page.locator("#shopGrid .product-card")).toHaveCount(2);
  });
});

test.describe("Mori Matcha product detail", () => {
  test("loads the selected product", async ({ page }) => {
    await page.goto(`${BASE}/product.html?id=dawn-ceremonial`);
    await expect(page.locator("#productName")).toContainText("Dawn Ceremonial");
    await expect(page.locator("#productPrice")).toContainText("32");
    await expect(page.locator("#productThumbs button")).toHaveCount(3);
  });
});

test.describe("Mori Matcha contact", () => {
  test("shows hours and reservation form", async ({ page }) => {
    await page.goto(`${BASE}/contact.html`);
    await expect(page.locator("text=Tuesday to Friday")).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });
});

test.describe("Mori Matcha mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("mobile nav toggles open", async ({ page }) => {
    await page.goto(BASE);
    await page.click("#navToggle");
    await expect(page.locator("#navLinks")).toHaveClass(/open/);
  });
});
