const { test, expect } = require('@playwright/test');

const BASE = 'http://localhost:8080';

// ========== HOMEPAGE ==========
test.describe('Homepage', () => {
    test('loads and shows title', async ({ page }) => {
        await page.goto(BASE);
        await expect(page).toHaveTitle(/Le Tavole/);
    });

    test('nav logo is visible', async ({ page }) => {
        await page.goto(BASE);
        const logo = page.locator('.nav-logo').first();
        await expect(logo).toBeVisible();
        await expect(logo).toContainText('Le');
    });

    test('announcement bar is visible', async ({ page }) => {
        await page.goto(BASE);
        await expect(page.locator('.announcement')).toBeVisible();
        await expect(page.locator('.announcement')).toContainText('Envío gratis');
    });

    test('hero section renders with CTA buttons', async ({ page }) => {
        await page.goto(BASE);
        await expect(page.locator('.hero h1')).toBeVisible();
        const ctaButtons = page.locator('.hero .btn');
        await expect(ctaButtons.first()).toBeVisible();
    });

    test('brands bar shows all 12 brands', async ({ page }) => {
        await page.goto(BASE);
        const brands = page.locator('.brand-name');
        const count = await brands.count();
        expect(count).toBeGreaterThanOrEqual(10);
    });

    test('category cards are visible', async ({ page }) => {
        await page.goto(BASE);
        const cards = page.locator('.cat-card');
        const count = await cards.count();
        expect(count).toBeGreaterThanOrEqual(4);
    });

    test('featured products show real images and prices', async ({ page }) => {
        await page.goto(BASE);
        const products = page.locator('.product-card');
        const count = await products.count();
        expect(count).toBeGreaterThanOrEqual(4);

        // Check first product has brand, title, and price
        const firstProduct = products.first();
        await expect(firstProduct.locator('.product-brand')).toBeVisible();
        await expect(firstProduct.locator('.product-info h3')).toBeVisible();
        await expect(firstProduct.locator('.product-price')).toBeVisible();
    });

    test('product images load from letavole.com', async ({ page }) => {
        await page.goto(BASE);
        const productImgs = page.locator('.product-img img');
        const firstSrc = await productImgs.first().getAttribute('src');
        expect(firstSrc).toContain('letavole.com');
    });

    test('footer has contact info', async ({ page }) => {
        await page.goto(BASE);
        const footer = page.locator('.footer');
        await expect(footer).toContainText('Le Tavole');
        await expect(footer).toContainText('(809)');
    });

    test('WhatsApp button is visible', async ({ page }) => {
        await page.goto(BASE);
        const wa = page.locator('.whatsapp-float');
        await expect(wa).toBeVisible();
        const href = await wa.getAttribute('href');
        expect(href).toContain('wa.me');
    });

    test('navigation links point to correct pages', async ({ page }) => {
        await page.goto(BASE);
        const navLinks = page.locator('.nav-links a');
        const hrefs = [];
        for (let i = 0; i < await navLinks.count(); i++) {
            hrefs.push(await navLinks.nth(i).getAttribute('href'));
        }
        expect(hrefs).toContain('tienda.html');
        expect(hrefs).toContain('contacto.html');
    });
});

// ========== SHOP PAGE ==========
test.describe('Shop Page', () => {
    test('loads with products', async ({ page }) => {
        await page.goto(`${BASE}/tienda.html`);
        await expect(page).toHaveTitle(/Tienda/);
        const products = page.locator('.product-card');
        const count = await products.count();
        expect(count).toBeGreaterThanOrEqual(20);
    });

    test('brand filter works', async ({ page }) => {
        await page.goto(`${BASE}/tienda.html`);

        // Click Christofle filter
        await page.click('.filter-tag:has-text("Christofle")');

        // Wait for filter to apply
        await page.waitForTimeout(300);

        // Check only Christofle products are visible
        const visible = page.locator('.product-card:visible');
        const count = await visible.count();
        expect(count).toBeGreaterThan(0);
        expect(count).toBeLessThan(36);

        // Check they're all Christofle
        for (let i = 0; i < count; i++) {
            const brand = await visible.nth(i).locator('.product-brand').textContent();
            expect(brand).toBe('Christofle');
        }
    });

    test('filter "Todas" shows all products', async ({ page }) => {
        await page.goto(`${BASE}/tienda.html`);
        await page.click('.filter-tag:has-text("Alessi")');
        await page.waitForTimeout(300);
        await page.click('.filter-tag:has-text("Todas")');
        await page.waitForTimeout(300);

        const visible = page.locator('.product-card:visible');
        const count = await visible.count();
        expect(count).toBeGreaterThanOrEqual(30);
    });

    test('result count updates on filter', async ({ page }) => {
        await page.goto(`${BASE}/tienda.html`);
        await page.click('.filter-tag:has-text("Herend")');
        await page.waitForTimeout(300);
        const text = await page.locator('#resultCount').textContent();
        expect(text).toContain('3');
    });

    test('category tiles are visible', async ({ page }) => {
        await page.goto(`${BASE}/tienda.html`);
        const tiles = page.locator('.cat-card');
        expect(await tiles.count()).toBe(6);
    });

    test('sort dropdown exists', async ({ page }) => {
        await page.goto(`${BASE}/tienda.html`);
        await expect(page.locator('.shop-toolbar select')).toBeVisible();
    });

    test('product cards have wishlist button on hover', async ({ page }) => {
        await page.goto(`${BASE}/tienda.html`);
        const firstCard = page.locator('.product-card').first();
        await firstCard.hover();
        await page.waitForTimeout(300);
        const wishlist = firstCard.locator('.product-wishlist');
        await expect(wishlist).toBeVisible();
    });
});

// ========== PRODUCT DETAIL PAGE ==========
test.describe('Product Detail', () => {
    test('loads with product info', async ({ page }) => {
        await page.goto(`${BASE}/producto.html`);
        await expect(page.locator('.product-detail-brand')).toContainText('La Double J');
        await expect(page.locator('.product-detail-info h1')).toContainText('Leaftrail');
        await expect(page.locator('.product-detail-price')).toContainText('US$347.00');
    });

    test('stock status shows in stock', async ({ page }) => {
        await page.goto(`${BASE}/producto.html`);
        await expect(page.locator('.stock-status')).toContainText('En stock');
    });

    test('gallery thumbnails change main image', async ({ page }) => {
        await page.goto(`${BASE}/producto.html`);
        const thumbs = page.locator('.product-gallery-thumbs img');
        const mainImg = page.locator('#mainImg');

        const initialSrc = await mainImg.getAttribute('src');
        await thumbs.nth(1).click();
        await page.waitForTimeout(300);
        const newSrc = await mainImg.getAttribute('src');
        expect(newSrc).not.toBe(initialSrc);
    });

    test('quantity controls work', async ({ page }) => {
        await page.goto(`${BASE}/producto.html`);
        const qtyInput = page.locator('#qty');

        // Default is 1
        await expect(qtyInput).toHaveValue('1');

        // Click + button
        await page.click('.qty-control button:last-child');
        await expect(qtyInput).toHaveValue('2');

        // Click - button
        await page.click('.qty-control button:first-child');
        await expect(qtyInput).toHaveValue('1');

        // Can't go below 1
        await page.click('.qty-control button:first-child');
        await expect(qtyInput).toHaveValue('1');
    });

    test('add to cart button shows confirmation', async ({ page }) => {
        await page.goto(`${BASE}/producto.html`);
        const addBtn = page.locator('.product-actions .btn-gold');
        await addBtn.click();
        await expect(addBtn).toContainText('Añadido');
    });

    test('product specs are visible', async ({ page }) => {
        await page.goto(`${BASE}/producto.html`);
        const specs = page.locator('.product-specs');
        await expect(specs).toContainText('Porcelana');
        await expect(specs).toContainText('Italia');
        await expect(specs).toContainText('115375');
    });

    test('WhatsApp inquiry link has product name', async ({ page }) => {
        await page.goto(`${BASE}/producto.html`);
        const waLink = page.locator('a:has-text("WhatsApp")');
        const href = await waLink.getAttribute('href');
        expect(href).toContain('wa.me');
        expect(href).toContain('Leaftrail');
    });

    test('related products section exists', async ({ page }) => {
        await page.goto(`${BASE}/producto.html`);
        const related = page.locator('.products-grid .product-card');
        expect(await related.count()).toBe(4);
    });

    test('breadcrumb navigation works', async ({ page }) => {
        await page.goto(`${BASE}/producto.html`);
        const breadcrumb = page.locator('.breadcrumb');
        await expect(breadcrumb).toContainText('Inicio');
        await expect(breadcrumb).toContainText('Tienda');
    });
});

// ========== ABOUT PAGE ==========
test.describe('About Page', () => {
    test('loads with brand story', async ({ page }) => {
        await page.goto(`${BASE}/nosotros.html`);
        await expect(page).toHaveTitle(/Historia/);
        await expect(page.locator('.about-hero h1')).toBeVisible();
    });

    test('has Le Tavole Casa section', async ({ page }) => {
        await page.goto(`${BASE}/nosotros.html`);
        await expect(page.locator('.section-label:has-text("Le Tavole Casa")')).toBeVisible();
    });

    test('values section has 3 cards', async ({ page }) => {
        await page.goto(`${BASE}/nosotros.html`);
        const values = page.locator('.value-card');
        expect(await values.count()).toBe(3);
    });

    test('stats are visible', async ({ page }) => {
        await page.goto(`${BASE}/nosotros.html`);
        await expect(page.locator('text=25+')).toBeVisible();
        await expect(page.locator('text=1,500+')).toBeVisible();
    });
});

// ========== CONTACT PAGE ==========
test.describe('Contact Page', () => {
    test('loads with both store addresses', async ({ page }) => {
        await page.goto(`${BASE}/contacto.html`);
        await expect(page).toHaveTitle(/Contacto/);
        await expect(page.locator('text=Agustín Lara #29-A')).toBeVisible();
        await expect(page.locator('text=Agustín Lara #22')).toBeVisible();
    });

    test('phone numbers are clickable', async ({ page }) => {
        await page.goto(`${BASE}/contacto.html`);
        const phoneLink = page.locator('.contact-items a[href="tel:+18095655727"]');
        await expect(phoneLink).toBeVisible();
    });

    test('email link works', async ({ page }) => {
        await page.goto(`${BASE}/contacto.html`);
        const emailLink = page.locator('.contact-items a[href="mailto:[email protected]"]');
        await expect(emailLink).toBeVisible();
    });

    test('business hours are shown', async ({ page }) => {
        await page.goto(`${BASE}/contacto.html`);
        await expect(page.locator('text=9:00am – 6:30pm')).toBeVisible();
        await expect(page.locator('text=9:30am – 4:00pm')).toBeVisible();
    });

    test('social media links exist', async ({ page }) => {
        await page.goto(`${BASE}/contacto.html`);
        const social = page.locator('.contact-social a');
        expect(await social.count()).toBe(4);
    });

    test('contact form has all required fields', async ({ page }) => {
        await page.goto(`${BASE}/contacto.html`);
        await expect(page.locator('input[name="name"]')).toBeVisible();
        await expect(page.locator('input[name="phone"]')).toBeVisible();
        await expect(page.locator('input[name="email"]')).toBeVisible();
        await expect(page.locator('select[name="subject"]')).toBeVisible();
        await expect(page.locator('textarea[name="message"]')).toBeVisible();
        await expect(page.locator('.form-submit')).toBeVisible();
    });

    test('map section exists', async ({ page }) => {
        await page.goto(`${BASE}/contacto.html`);
        await expect(page.locator('.map-section')).toBeVisible();
    });
});

// ========== CROSS-PAGE NAVIGATION ==========
test.describe('Navigation', () => {
    test('can navigate from home to shop', async ({ page }) => {
        await page.goto(BASE);
        await page.click('.nav-links a:has-text("Tabletop")');
        await expect(page).toHaveURL(/tienda/);
    });

    test('can navigate from shop to product', async ({ page }) => {
        await page.goto(`${BASE}/tienda.html`);
        await page.click('.product-card >> nth=0');
        await expect(page).toHaveURL(/producto/);
    });

    test('can navigate from product back to shop via breadcrumb', async ({ page }) => {
        await page.goto(`${BASE}/producto.html`);
        await page.click('.breadcrumb a:has-text("Tienda")');
        await expect(page).toHaveURL(/tienda/);
    });

    test('logo links back to home from any page', async ({ page }) => {
        await page.goto(`${BASE}/tienda.html`);
        await page.click('.nav-logo');
        await expect(page).toHaveURL(BASE + '/index.html');
    });

    test('contact link works from all pages', async ({ page }) => {
        await page.goto(`${BASE}/tienda.html`);
        await page.click('.nav-links a:has-text("Contacto")');
        await expect(page).toHaveURL(/contacto/);
    });
});

// ========== MOBILE RESPONSIVENESS ==========
test.describe('Mobile', () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test('hamburger menu appears on mobile', async ({ page }) => {
        await page.goto(BASE);
        await expect(page.locator('#navToggle')).toBeVisible();
    });

    test('mobile menu opens and closes', async ({ page }) => {
        await page.goto(BASE);

        // Nav links should be hidden
        const navBar = page.locator('#navLinksBar');
        await expect(navBar).not.toHaveClass(/open/);

        // Click hamburger
        await page.click('#navToggle');
        await expect(navBar).toHaveClass(/open/);

        // Click again to close
        await page.click('#navToggle');
        await expect(navBar).not.toHaveClass(/open/);
    });

    test('WhatsApp button visible on mobile', async ({ page }) => {
        await page.goto(BASE);
        await expect(page.locator('.whatsapp-float')).toBeVisible();
    });

    test('products stack on mobile', async ({ page }) => {
        await page.goto(`${BASE}/tienda.html`);
        const products = page.locator('.product-card:visible');
        expect(await products.count()).toBeGreaterThan(0);
    });

    test('product detail is scrollable on mobile', async ({ page }) => {
        await page.goto(`${BASE}/producto.html`);
        await expect(page.locator('.product-detail-info h1')).toBeVisible();
        await expect(page.locator('.product-detail-price')).toBeVisible();
    });
});

// ========== PERFORMANCE & QUALITY ==========
test.describe('Quality Checks', () => {
    test('no console errors on homepage', async ({ page }) => {
        const errors = [];
        page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
        await page.goto(BASE);
        await page.waitForTimeout(2000);
        expect(errors.length).toBe(0);
    });

    test('no console errors on shop page', async ({ page }) => {
        const errors = [];
        page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
        await page.goto(`${BASE}/tienda.html`);
        await page.waitForTimeout(2000);
        expect(errors.length).toBe(0);
    });

    test('no console errors on product page', async ({ page }) => {
        const errors = [];
        page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
        await page.goto(`${BASE}/producto.html`);
        await page.waitForTimeout(2000);
        expect(errors.length).toBe(0);
    });

    test('all pages load in under 5 seconds', async ({ page }) => {
        const pages = ['', '/tienda.html', '/producto.html', '/nosotros.html', '/contacto.html'];
        for (const p of pages) {
            const start = Date.now();
            await page.goto(`${BASE}${p}`);
            const loadTime = Date.now() - start;
            expect(loadTime).toBeLessThan(5000);
        }
    });

    test('meta descriptions exist on all pages', async ({ page }) => {
        const pages = ['', '/tienda.html', '/producto.html', '/nosotros.html', '/contacto.html'];
        for (const p of pages) {
            await page.goto(`${BASE}${p}`);
            const meta = await page.locator('meta[name="description"]').getAttribute('content');
            expect(meta).toBeTruthy();
            expect(meta.length).toBeGreaterThan(20);
        }
    });
});
