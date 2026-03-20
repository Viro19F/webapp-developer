/**
 * REUSABLE TEST TEMPLATE
 * Copy this file for each new client: tests/<client-name>.spec.js
 * Update BASE, PAGES, and client-specific tests
 */

const { test, expect } = require('@playwright/test');

// ===== CONFIG — UPDATE PER CLIENT =====
const BASE = 'http://localhost:8080';
const CLIENT = 'Client Name';
const PAGES = {
    home: '',
    // shop: '/tienda.html',
    // product: '/producto.html',
    about: '/nosotros.html',
    contact: '/contacto.html',
};
const PHONE = '+1234567890'; // client phone for tel: links
const EMAIL = '[email protected]';
const WHATSAPP = '1234567890';
// =======================================

// ========== ALL PAGES: CORE CHECKS ==========
test.describe(`${CLIENT} — Core`, () => {
    for (const [name, path] of Object.entries(PAGES)) {
        test(`${name} page loads`, async ({ page }) => {
            await page.goto(`${BASE}${path}`);
            await expect(page).toHaveTitle(/.+/);
        });

        test(`${name} has meta description`, async ({ page }) => {
            await page.goto(`${BASE}${path}`);
            const meta = await page.locator('meta[name="description"]').getAttribute('content');
            expect(meta).toBeTruthy();
            expect(meta.length).toBeGreaterThan(20);
        });

        test(`${name} has no console errors`, async ({ page }) => {
            const errors = [];
            page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
            await page.goto(`${BASE}${path}`);
            await page.waitForTimeout(2000);
            expect(errors.length).toBe(0);
        });

        test(`${name} loads under 5 seconds`, async ({ page }) => {
            const start = Date.now();
            await page.goto(`${BASE}${path}`);
            expect(Date.now() - start).toBeLessThan(5000);
        });

        test(`${name} has nav logo`, async ({ page }) => {
            await page.goto(`${BASE}${path}`);
            await expect(page.locator('.nav-logo').first()).toBeVisible();
        });

        test(`${name} has footer`, async ({ page }) => {
            await page.goto(`${BASE}${path}`);
            await expect(page.locator('.footer')).toBeVisible();
        });

        test(`${name} has WhatsApp button`, async ({ page }) => {
            await page.goto(`${BASE}${path}`);
            const wa = page.locator('.whatsapp-float');
            await expect(wa).toBeVisible();
            const href = await wa.getAttribute('href');
            expect(href).toContain('wa.me');
        });
    }
});

// ========== MOBILE ==========
test.describe(`${CLIENT} — Mobile`, () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test('hamburger menu appears', async ({ page }) => {
        await page.goto(BASE);
        await expect(page.locator('#navToggle')).toBeVisible();
    });

    test('mobile menu toggles', async ({ page }) => {
        await page.goto(BASE);
        const navBar = page.locator('#navLinksBar');
        await page.click('#navToggle');
        await expect(navBar).toHaveClass(/open/);
        await page.click('#navToggle');
        await expect(navBar).not.toHaveClass(/open/);
    });

    test('WhatsApp visible on mobile', async ({ page }) => {
        await page.goto(BASE);
        await expect(page.locator('.whatsapp-float')).toBeVisible();
    });
});

// ========== NAVIGATION ==========
test.describe(`${CLIENT} — Navigation`, () => {
    test('logo links to home', async ({ page }) => {
        if (!PAGES.contact) return;
        await page.goto(`${BASE}${PAGES.contact}`);
        await page.click('.nav-logo');
        await expect(page).toHaveURL(/index/);
    });

    test('all nav links work', async ({ page }) => {
        await page.goto(BASE);
        const links = page.locator('.nav-links a');
        const count = await links.count();
        expect(count).toBeGreaterThan(0);
        for (let i = 0; i < count; i++) {
            const href = await links.nth(i).getAttribute('href');
            expect(href).toBeTruthy();
            expect(href).not.toBe('#');
        }
    });
});

// ========== CONTACT ==========
test.describe(`${CLIENT} — Contact`, () => {
    test('contact form has required fields', async ({ page }) => {
        if (!PAGES.contact) return;
        await page.goto(`${BASE}${PAGES.contact}`);
        await expect(page.locator('input[name="name"]')).toBeVisible();
        await expect(page.locator('input[name="email"]')).toBeVisible();
        await expect(page.locator('textarea[name="message"]')).toBeVisible();
    });

    test('business hours are shown', async ({ page }) => {
        if (!PAGES.contact) return;
        await page.goto(`${BASE}${PAGES.contact}`);
        // Check for time patterns like "9:00" or "am" or "pm"
        const content = await page.locator('.contact-items, .contact-info').textContent();
        expect(content).toMatch(/\d{1,2}:\d{2}|am|pm|AM|PM/);
    });
});
