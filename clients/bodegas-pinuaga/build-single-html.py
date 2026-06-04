#!/usr/bin/env python3
"""Single-file multi-page Pinuaga site with wine detail modal."""
import base64
import json
import pathlib

ROOT = pathlib.Path.home() / "WebAgency/clients/bodegas-pinuaga"
ASSETS = ROOT / "assets"
OUT = pathlib.Path.home() / "Downloads/bodegas-pinuaga.html"

def data_url(filename, mime="image/jpeg"):
    raw = (ASSETS / filename).read_bytes()
    b64 = base64.b64encode(raw).decode()
    return f"data:{mime};base64,{b64}"

IMAGES = {
    "logo": data_url("logo.png", "image/png"),
    "hero": data_url("hero-vineyard.jpeg"),
    "grapes": data_url("grapes-harvest.jpeg"),
    "woman": data_url("woman-with-wine.jpeg"),
    "bottles": data_url("wine-bottles.jpeg"),
    "vat": data_url("wine-vat.jpeg"),
    "rows": data_url("vineyard-rows.jpeg"),
    "workers": data_url("harvest-workers.jpeg"),
    "bottle": data_url("woman-with-bottle.jpeg"),
    # Individual bottle photos for the modal
    "b_coleccion": data_url("bottle-coleccion.jpg"),
    "b_nature": data_url("bottle-nature.jpg"),
    "b_lasenda": data_url("bottle-lasenda.jpg"),
    "b_rose": data_url("bottle-rose.jpg"),
    "b_tinto": data_url("bottle-tinto.jpg"),
    "b_blanco": data_url("bottle-blanco.jpg"),
    "b_cepas200": data_url("bottle-200cepas.jpg"),
}

# Wine catalogue for the modal
WINES = {
    "coleccion": {
        "tag": "Red · Crianza",
        "name": "Colección",
        "vintage": "2020 · Tempranillo",
        "image": "b_coleccion",
        "labelLine": "Pintada a mano · Muñoz Zamora",
        "lede": "The family's table red. Round, elegant, ready for any plate.",
        "notes": "Black cherry, sweet tobacco, a whisper of vanilla from the oak. Soft, integrated tannins and a long, savoury finish.",
        "pair": "Slow-roasted lamb, aged Manchego, grilled red meats, mushroom rice.",
        "specs": [
            ["Grape", "100% Tempranillo"],
            ["Aging", "12 months · French oak"],
            ["Alcohol", "14% vol."],
            ["Production", "~8,000 bottles"],
        ]
    },
    "nature": {
        "tag": "Red · Natural",
        "name": "Nature",
        "vintage": "2022 · Tempranillo",
        "image": "b_nature",
        "labelLine": "Sin sulfitos añadidos",
        "lede": "Zero added sulfites. Pure fruit, alive in the glass.",
        "notes": "Wild blackberry, violet and a touch of white pepper. Vibrant acidity, light tannin — drink slightly chilled.",
        "pair": "Charcuterie boards, lentil stew, hard mountain cheeses, mushroom dishes.",
        "specs": [
            ["Grape", "100% Tempranillo"],
            ["Aging", "Concrete vat · 6 months"],
            ["Sulfites", "None added"],
            ["Production", "~4,000 bottles"],
        ]
    },
    "lasenda": {
        "tag": "Red · Young",
        "name": "La Senda",
        "vintage": "2021 · Tempranillo + Merlot",
        "image": "b_lasenda",
        "labelLine": "El camino de la viña",
        "lede": "Soft and generous. For nights that turn into stories.",
        "notes": "Ripe plum, fresh herb, a hint of cocoa. Medium body, smooth tannin — the kind of wine that disappears too fast.",
        "pair": "Pizza, burgers, weeknight pastas, sharing plates.",
        "specs": [
            ["Grape", "70% Tempranillo · 30% Merlot"],
            ["Aging", "6 months · French oak"],
            ["Alcohol", "13.5% vol."],
            ["Production", "~12,000 bottles"],
        ]
    },
    "rose": {
        "tag": "Rosé",
        "name": "Rosé",
        "vintage": "2023 · Garnacha + Tempranillo",
        "image": "b_rose",
        "labelLine": "Acuarela · Muñoz Zamora",
        "lede": "Petal pink. Built for summer afternoons.",
        "notes": "Wild strawberry, white peach and citrus zest. Crisp, dry finish — drink the year of the vintage.",
        "pair": "Grilled prawns, summer salads, ceviche, terrace afternoons with friends.",
        "specs": [
            ["Grape", "60% Garnacha · 40% Tempranillo"],
            ["Vinification", "Stainless steel · cool ferment"],
            ["Alcohol", "12.5% vol."],
            ["Production", "~6,000 bottles"],
        ]
    },
    "tinto": {
        "tag": "Red · Young",
        "name": "Tinto",
        "vintage": "2023 · Tempranillo",
        "image": "b_tinto",
        "labelLine": "El joven de la casa",
        "lede": "The most approachable Pinuaga. Easy, joyful, no pretension.",
        "notes": "Raspberry, red plum and a gentle spice in the finish. Smooth and bright — open it, pour it, enjoy it.",
        "pair": "Tapas, pizza, pasta, casual weeknight dinners.",
        "specs": [
            ["Grape", "100% Tempranillo"],
            ["Aging", "3 months · French oak"],
            ["Alcohol", "13% vol."],
            ["Production", "~15,000 bottles"],
        ]
    },
    "blanco": {
        "tag": "White",
        "name": "Blanco",
        "vintage": "2023 · Verdejo",
        "image": "b_blanco",
        "labelLine": "Frescura del campo",
        "lede": "Cool, citrus-led. The white of long lunches.",
        "notes": "Lime peel, fresh fennel, white blossom. Bright acidity carries through to a clean, mineral finish.",
        "pair": "Oysters, white fish, fresh manchego, light pasta, asparagus.",
        "specs": [
            ["Grape", "100% Verdejo"],
            ["Vinification", "Stainless steel + 2 months on lees"],
            ["Alcohol", "12.5% vol."],
            ["Production", "~5,000 bottles"],
        ]
    },
    "cepas200": {
        "tag": "Flagship",
        "name": "200 Cepas",
        "vintage": "2018 · Tempranillo",
        "image": "b_cepas200",
        "labelLine": "200 cepas centenarias",
        "lede": "From 200 century-old vines planted by our grandparents. The wine for big occasions.",
        "notes": "Black cherry, sweet spice, leather and the unmistakable mineral edge of La Mancha earth. Dense structure, profound length — built to age another decade.",
        "pair": "Aged Manchego, slow-cooked oxtail, game, dark chocolate at the end of the night.",
        "specs": [
            ["Grape", "100% Tempranillo · 100-yr vines"],
            ["Aging", "14 months · French oak"],
            ["Alcohol", "14.5% vol."],
            ["Production", "~1,500 bottles · numbered"],
        ],
        "award": "★ Silver · Organic Wine Masters 2024"
    }
}

CSS = (ROOT / "styles.css").read_text()

SPA_CSS = """
.page { display: none; animation: fadePage 0.45s ease; }
.page.active { display: block; }
@keyframes fadePage {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
}
"""

NAV = """
<nav class="nav" id="nav">
    <div class="nav-inner">
        <a href="#" data-page="home" class="nav-logo" aria-label="Pinuaga Bodegas y Viñedos">
            <img data-img="logo" alt="Pinuaga Bodegas y Viñedos">
        </a>
        <ul class="nav-links" id="navLinks">
            <li><a href="#about" data-page="about">About</a></li>
            <li><a href="#wines" data-page="wines">Wines</a></li>
            <li><a href="#visits" data-page="visits">Visits</a></li>
            <li><a href="#contact" data-page="contact">Contact</a></li>
            <li><a href="#visits" data-page="visits" class="nav-cta">Book a Visit</a></li>
        </ul>
        <button class="nav-toggle" id="navToggle" aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
        </button>
    </div>
</nav>
"""

FOOTER = """
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <div class="nav-logo"><img data-img="logo" alt="Pinuaga"></div>
                <p>Family-run organic winery in Corral de Almaguer, Toledo. Sixty years crafting wines from native La Mancha grapes.</p>
            </div>
            <div><h4>Navigate</h4><ul>
                <li><a href="#about" data-page="about">About</a></li>
                <li><a href="#wines" data-page="wines">Wines</a></li>
                <li><a href="#visits" data-page="visits">Visits & tastings</a></li>
                <li><a href="#contact" data-page="contact">Contact</a></li>
            </ul></div>
            <div><h4>Visit us</h4><ul>
                <li>Carretera N-301 Km 95.500</li>
                <li>45880 Corral de Almaguer</li>
                <li>Toledo · Spain</li>
                <li>Fri–Sun · 11am – 6pm</li>
            </ul></div>
            <div><h4>Contact</h4><ul>
                <li><a href="tel:+34629058900">+34 629 05 89 00</a></li>
                <li><a href="tel:+34662161276">+34 662 16 12 76</a></li>
                <li><a href="mailto:info@bodegaspinuaga.com">info@bodegaspinuaga.com</a></li>
            </ul></div>
        </div>
        <div class="footer-bottom">
            <span>© 2026 Bodegas Pinuaga · All rights reserved</span>
            <div class="footer-social">
                <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1" fill="currentColor"/></svg></a>
                <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.4c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5v1.8h2.6L15.5 14h-2.2v7A10 10 0 0 0 22 12z"/></svg></a>
            </div>
        </div>
    </div>
</footer>

<a href="https://wa.me/34629058900?text=Hello%2C%20I%27d%20like%20to%20book%20a%20visit" class="whatsapp-float" target="_blank" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7 1 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4zM12 22c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.3-.4A9.9 9.9 0 0 1 2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5.5-7.5l-2.1-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.3-.7.1-.8-.3-1.6-.7-2.2-1.4-.6-.6-1-1.3-1.3-2.1-.1-.2 0-.4.1-.5.4-.4.6-.7.8-1 .1-.2.1-.4 0-.5l-1-2.2c-.2-.5-.4-.4-.6-.4-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 .9-1 2.3 0 1.4 1 2.7 1.2 2.9.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/></svg>
</a>

<div class="wine-modal" id="wineModal" aria-hidden="true">
    <div class="wine-modal-backdrop" data-close></div>
    <div class="wine-modal-content">
        <button class="wine-modal-close" data-close aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
        </button>
        <div class="wine-modal-grid">
            <div class="wine-modal-image">
                <img id="modalImg" alt="">
                <div class="wine-modal-label">
                    <span class="label-line"></span>
                    <span id="modalLabelLine"></span>
                </div>
            </div>
            <div class="wine-modal-body">
                <span class="wine-modal-tag" id="modalTag"></span>
                <h2 id="modalName"></h2>
                <p class="wine-modal-vintage" id="modalVintage"></p>
                <p class="wine-modal-lede" id="modalLede"></p>
                <div class="wine-modal-section">
                    <h4>Tasting notes</h4>
                    <p id="modalNotes"></p>
                </div>
                <div class="wine-modal-section">
                    <h4>Pair with</h4>
                    <p id="modalPair"></p>
                </div>
                <div class="wine-modal-specs" id="modalSpecs"></div>
                <div id="modalAward"></div>
                <div class="wine-modal-cta">
                    <a href="#visits" data-page="visits" data-close class="btn btn-primary">Taste it at the winery <span class="arrow">→</span></a>
                    <a href="#contact" data-page="contact" data-close class="btn btn-secondary">Order online</a>
                </div>
            </div>
        </div>
    </div>
</div>
"""

# Wine cards now have data-wine attribute
def wine_card(key, is_flagship=False, coming=False):
    if coming:
        return '<article class="wine-card" style="background: transparent; border: 1px dashed var(--line); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: default;"><div class="tag" style="color: var(--olive-deep);">Coming soon</div><h3 style="font-size: 1.2rem; margin-top: 8px;">Limited edition<br>autumn 2026</h3></article>'
    w = WINES[key]
    if is_flagship:
        return f'<article class="wine-card" data-wine="{key}" style="background: var(--wine); color: var(--cream); border: none;"><div class="tag" style="color: var(--gold);">Flagship</div><h3 style="color: var(--cream);">{w["name"]}</h3><div class="vintage" style="color: rgba(247,243,236,0.7);">{w["vintage"]}</div><div class="grape" style="color: rgba(247,243,236,0.85);">From century-old vines. The wine for big occasions.</div><div class="award" style="color: var(--gold); border-color: rgba(247,243,236,0.15);">★ Silver · Organic Wine Masters</div></article>'
    short = {
        "coleccion": "Oak-aged, rounded and elegant. The family's table red.",
        "nature": "Zero added sulfites. Fresh, fruity, alive.",
        "lasenda": "Soft and generous. For any night with friends.",
        "rose": "Petal pink, wild strawberry aromas. Built for summer.",
        "tinto": "Our most approachable red. Fruity, easy, joyful.",
        "blanco": "Citrus and herb-driven, white-fruit signature.",
    }
    return f'<article class="wine-card" data-wine="{key}"><div class="tag">{w["tag"]}</div><h3>{w["name"]}</h3><div class="vintage">{w["vintage"]}</div><div class="grape">{short[key]}</div></article>'

WINES_GRID_HOME = "".join([
    wine_card("coleccion"), wine_card("nature"), wine_card("lasenda"),
    wine_card("rose"), wine_card("tinto"), wine_card("blanco"),
    wine_card("cepas200", is_flagship=True), wine_card("", coming=True),
])

# ---------------- HOME ----------------
PAGE_HOME = """
<main class="page" id="page-home">

<section class="hero">
    <img data-img="hero" alt="Pinuaga vineyards in La Mancha" class="hero-img">
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <span class="eyebrow hero-eyebrow">Toledo · La Mancha · Since 1965</span>
        <h1>Organic wine,<br><em>land that remembers.</em></h1>
        <p>A family winery among century-old vineyards. Walk the estate, taste wines from native grapes and stay for lunch surrounded by nature.</p>
        <div class="hero-buttons">
            <a href="#visits" data-page="visits" class="btn btn-light">Book a visit <span class="arrow">→</span></a>
            <a href="#about" data-page="about" class="btn btn-ghost-light">Our story</a>
        </div>
    </div>
    <div class="hero-scroll-indicator">Scroll</div>
</section>

<section>
    <div class="container">
        <div class="split">
            <div class="split-text">
                <span class="eyebrow">Family tradition</span>
                <h2>Sixty years making wine the way it used to be made.</h2>
                <p>Pinuaga is a family winery in La Mancha where three generations have looked after the same vines. We farm organically, we recover old Cencibel clones and we craft with minimal intervention.</p>
                <p>What you taste in a glass started decades ago — in the soil, in the vine, and in the hands that worked them.</p>
                <a href="#about" data-page="about" class="btn btn-secondary">Read our story <span class="arrow">→</span></a>
            </div>
            <div class="split-image">
                <img data-img="workers" alt="The crew during harvest">
                <span class="caption">The crew · Harvest 2024</span>
            </div>
        </div>
    </div>
</section>

<section class="section-tight section-bone">
    <div class="container">
        <div class="stats">
            <div class="stat"><strong>60</strong><span>Years of tradition</span></div>
            <div class="stat"><strong>100%</strong><span>Organic farming</span></div>
            <div class="stat"><strong>7</strong><span>Wines crafted</span></div>
            <div class="stat"><strong>1h</strong><span>From Madrid</span></div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="section-header">
            <span class="eyebrow">Experiences at the winery</span>
            <h2>A visit that stays with you.</h2>
            <p>Designed for couples and small groups. You're welcomed by someone from the family, we walk the estate, we taste, and we eat very well.</p>
        </div>
        <div class="experiences-grid">

            <article class="experience-card">
                <div class="experience-img"><img data-img="woman" alt="Wine tasting on the terrace"></div>
                <div class="experience-body">
                    <div class="experience-meta"><span>90 min</span><span>2 — 8 guests</span></div>
                    <h3>Classic Visit &amp; Tasting</h3>
                    <p>A walk through the vineyard and cellar, followed by a guided tasting of four wines from the collection, paired with local cheese and olive oil.</p>
                    <div class="experience-foot">
                        <div class="experience-price">€25 <small>/ person</small></div>
                        <a href="#visits" data-page="visits" class="btn btn-primary">Book</a>
                    </div>
                </div>
            </article>

            <article class="experience-card">
                <div class="experience-img"><img data-img="rows" alt="Lush vineyard rows"></div>
                <div class="experience-body">
                    <div class="experience-meta"><span>3 hours</span><span>2 — 12 guests</span></div>
                    <h3>Lunch Among the Vines</h3>
                    <p>The full experience: tour, tasting and a three-course lunch made with local produce, served at the estate.</p>
                    <div class="experience-foot">
                        <div class="experience-price">€65 <small>/ person</small></div>
                        <a href="#visits" data-page="visits" class="btn btn-primary">Book</a>
                    </div>
                </div>
            </article>

            <article class="experience-card">
                <div class="experience-img"><img data-img="grapes" alt="Hand-picked grapes"></div>
                <div class="experience-body">
                    <div class="experience-meta"><span>September only</span><span>Limited spots</span></div>
                    <h3>Harvest with the Family</h3>
                    <p>Three weekends a year. Pick with us in the morning, see the grapes come in, taste the fresh-pressed must.</p>
                    <div class="experience-foot">
                        <div class="experience-price">€85 <small>/ person</small></div>
                        <a href="#visits" data-page="visits" class="btn btn-primary">Book</a>
                    </div>
                </div>
            </article>

        </div>
    </div>
</section>

<section class="section-cream-deep">
    <div class="container">
        <div class="philosophy-feature">
            <figure class="philosophy-figure">
                <img data-img="vat" alt="Hand-stirring the fermenting wine">
                <figcaption class="figure-caption">
                    <span class="quote-mark">&ldquo;</span>
                    Good wine begins in the soil. Our job is to get out of its way.
                </figcaption>
            </figure>
            <div class="philosophy-body">
                <span class="eyebrow">Philosophy</span>
                <h2>Three ideas behind every bottle.</h2>
                <p class="intro">No formulas, no shortcuts. Just three principles we've held onto since the first generation planted these vines.</p>
                <div class="philosophy-list">
                    <article class="philosophy-item"><div class="philosophy-num">01</div><div><h3>Truly organic</h3><p>No synthetic chemicals, no shortcuts. We work the land and the vine respecting natural cycles, and we certify every vintage. What goes into the bottle is what happens in the field.</p></div></article>
                    <article class="philosophy-item"><div class="philosophy-num">02</div><div><h3>Native grapes</h3><p>We've recovered old Cencibel clones — La Mancha's historic variety — and we still farm plots most growers have given up on.</p></div></article>
                    <article class="philosophy-item"><div class="philosophy-num">03</div><div><h3>Minimal intervention</h3><p>We craft with patience and we don't force anything. Spontaneous fermentations, slow aging, and as little as possible between the grape and your glass.</p></div></article>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="split split-reverse">
            <div class="split-text">
                <span class="eyebrow">The collection</span>
                <h2>Seven wines, one land.</h2>
                <p>From 200 Cepas — our old-vine Tempranillo, Silver at the Organic Wine Masters — to Pinuaga Rosé, fresh and fruit-driven. Labels hand-painted by the artist Miguel Ángel Muñoz Zamora.</p>
                <p>Reds, rosé and white. All organic. All made here.</p>
                <a href="#wines" data-page="wines" class="btn btn-secondary">See the collection <span class="arrow">→</span></a>
            </div>
            <div class="split-image">
                <img data-img="bottles" alt="The Pinuaga wine collection">
                <span class="caption">Pinuaga collection · 2024</span>
            </div>
        </div>
    </div>
</section>

<section class="lifestyle-feature">
    <div class="container">
        <div class="lifestyle-grid">
            <div class="lifestyle-image">
                <img data-img="bottle" alt="A bottle of Pinuaga and two glasses">
            </div>
            <div class="lifestyle-text">
                <span class="eyebrow">For unforgettable moments</span>
                <h2>A bottle, two glasses, a memory.</h2>
                <p>The best Pinuaga moments don't happen in tasting rooms. They happen on terraces at sunset, on long Sunday lunches, on weekends that turn into stories.</p>
                <a href="#visits" data-page="visits" class="btn btn-secondary">Plan your visit <span class="arrow">→</span></a>
            </div>
        </div>
    </div>
</section>

<section class="section-bone section-tight">
    <div class="quote-block">
        <blockquote>Good wine is made in the field. In the cellar we only look after it until it reaches your glass.</blockquote>
        <cite>— The Pinuaga family</cite>
    </div>
</section>

<section class="cta-banner">
    <img data-img="hero" alt="" class="cta-banner-img">
    <div class="container">
        <span class="eyebrow">Come see us</span>
        <h2>An hour from Madrid. A world away.</h2>
        <p>Book a guided visit, a tasting or lunch at the winery. Small groups, personal attention.</p>
        <div class="cta-banner-buttons">
            <a href="#visits" data-page="visits" class="btn btn-light">Book a visit <span class="arrow">→</span></a>
            <a href="https://wa.me/34629058900?text=Hello%2C%20I%27d%20like%20to%20book%20a%20visit%20at%20Bodegas%20Pinuaga" target="_blank" class="btn btn-ghost-light">WhatsApp</a>
        </div>
    </div>
</section>

</main>
"""

# ---------------- ABOUT ----------------
PAGE_ABOUT = """
<main class="page" id="page-about">

<header class="page-header">
    <div class="container-narrow">
        <span class="eyebrow">Our story</span>
        <h1>Three generations tending the same vines.</h1>
        <p>Pinuaga began with one grandfather, one plot of land, and the idea that wine is made in the field. Sixty years on, we still believe it.</p>
    </div>
</header>

<section>
    <div class="container">
        <div class="split">
            <div class="split-image">
                <img data-img="workers" alt="The crew working the vines at harvest">
                <span class="caption">The crew · Harvest 2024</span>
            </div>
            <div class="split-text">
                <span class="eyebrow">The beginning</span>
                <h2>1965 · A plot of land in La Mancha.</h2>
                <p>Our grandfather planted the first vines thinking his children wouldn't want to take over. He was wrong — twice. His grandchildren also stayed.</p>
                <p>Those first Tempranillo vines are still alive. They're the ones that give us 200 Cepas, our most personal wine. Planted on red-clay soil, unirrigated, at 700 metres altitude.</p>
            </div>
        </div>
    </div>
</section>

<section class="section-bone">
    <div class="container">
        <div class="split split-reverse">
            <div class="split-image">
                <img data-img="rows" alt="Pinuaga organic vineyards">
                <span class="caption">The estate · Lower plot</span>
            </div>
            <div class="split-text">
                <span class="eyebrow">Going organic</span>
                <h2>Back to the field of before.</h2>
                <p>In the early 2000s we made a decision: drop everything that wasn't necessary. No synthetic chemicals, no industrial yeasts, no shortcuts. We started recovering old Cencibel clones — La Mancha's historic variety — that had almost disappeared.</p>
                <p>It wasn't a marketing call. It was going back to the field our grandfather worked. We certified it years later, when we could see the land was grateful — and so were the wines.</p>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="philosophy-feature">
            <figure class="philosophy-figure">
                <img data-img="vat" alt="Hand-stirring fermenting wine in the cellar">
                <figcaption class="figure-caption">
                    <span class="quote-mark">&ldquo;</span>
                    We don't make the wines we want. We make the wines the land gives us each year.
                </figcaption>
            </figure>
            <div class="philosophy-body">
                <span class="eyebrow">How we make wine</span>
                <h2>Minimal intervention. Full attention.</h2>
                <p class="intro">We're not chasing the perfect wine. We're chasing the wine that tells this year, this plot, this moment.</p>
                <div class="philosophy-list">
                    <article class="philosophy-item"><div class="philosophy-num">01</div><div><h3>In the vineyard</h3><p>Certified organic farming. No synthetic chemicals, no forced irrigation. Cover crops between rows so the soil breathes. Hand-harvested, vine by vine.</p></div></article>
                    <article class="philosophy-item"><div class="philosophy-num">02</div><div><h3>In the cellar</h3><p>Spontaneous fermentation with the yeasts native to the grape. No aggressive fining agents. Slow aging in French oak and concrete vats. Time, mostly.</p></div></article>
                    <article class="philosophy-item"><div class="philosophy-num">03</div><div><h3>In the bottle</h3><p>Bottled with minimal filtration. Sulfites kept low — and zero in our Nature wine. The bottle keeps evolving for years after it leaves the cellar.</p></div></article>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-wine">
    <div class="container">
        <div class="quote-block">
            <blockquote style="color: var(--cream);">A vineyard is the only inheritance that gets better the more carefully you pass it on.</blockquote>
            <cite style="color: var(--gold);">— The Pinuaga family</cite>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="split">
            <div class="split-text">
                <span class="eyebrow">Where we are</span>
                <h2>Corral de Almaguer, Toledo.</h2>
                <p>In the heart of La Mancha, an hour from Madrid by car. 700 metres of altitude, red-clay-over-limestone soils, long days and cool nights — the conditions that make this Tempranillo singular.</p>
                <p>Our estate is surrounded by vines, olive groves and holm-oak forest. If you visit, expect silence, horizon, and light that changes by the hour.</p>
                <a href="#contact" data-page="contact" class="btn btn-secondary">How to get here <span class="arrow">→</span></a>
            </div>
            <div class="split-image">
                <img data-img="bottle" alt="A Pinuaga afternoon">
                <span class="caption">A Pinuaga afternoon</span>
            </div>
        </div>
    </div>
</section>

<section class="cta-banner">
    <img data-img="hero" alt="" class="cta-banner-img">
    <div class="container">
        <span class="eyebrow">Come see it</span>
        <h2>It's best experienced in person.</h2>
        <p>Book a visit and walk the vines we've cared for across three generations.</p>
        <div class="cta-banner-buttons">
            <a href="#visits" data-page="visits" class="btn btn-light">Book a visit <span class="arrow">→</span></a>
            <a href="#wines" data-page="wines" class="btn btn-ghost-light">See the wines</a>
        </div>
    </div>
</section>

</main>
"""

# ---------------- WINES ----------------
PAGE_WINES = f"""
<main class="page" id="page-wines">

<header class="page-header">
    <div class="container-narrow">
        <span class="eyebrow">The collection</span>
        <h1>Seven wines. One land.</h1>
        <p>Each bottle tells a plot, a year, a way of working. All organic, all native grapes, all made here. <strong style="color: var(--terracotta); font-weight: 500;">Click any wine to see its full story.</strong></p>
    </div>
</header>

<section>
    <div class="container">
        <div class="wine-feature">
            <div class="wine-feature-img"><img data-img="bottles" alt="The Pinuaga collection"></div>
            <div>
                <span class="eyebrow">The flagship</span>
                <h2 style="margin: 16px 0 18px;">200 Cepas</h2>
                <p style="font-size: 1.08rem; margin-bottom: 18px;"><em style="font-style: italic; color: var(--terracotta);">Tempranillo · Old vines</em></p>
                <p>The wine that defines us. From 200 century-old vines planted by our grandparents on red clay soil. Spontaneous fermentation and slow aging in French oak.</p>
                <p style="margin-top: 16px;">Deep notes of ripe fruit, sweet spice and that unmistakable mineral edge of La Mancha earth.</p>
                <div style="margin-top: 28px; padding-top: 24px; border-top: 1px solid var(--line); font-size: 0.88rem;">
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;"><span style="color: var(--muted);">Variety</span><span style="font-weight: 500;">100% Tempranillo</span></div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;"><span style="color: var(--muted);">Aging</span><span style="font-weight: 500;">14 months · French oak</span></div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;"><span style="color: var(--muted);">Award</span><span style="font-weight: 500;">Silver · Organic Wine Masters</span></div>
                </div>
                <a href="#" data-wine="cepas200" class="btn btn-primary" style="margin-top: 28px;">See full details <span class="arrow">→</span></a>
            </div>
        </div>
    </div>
</section>

<section class="section-bone">
    <div class="container">
        <div class="section-header">
            <span class="eyebrow">The rest of the family</span>
            <h2>The Pinuaga collection.</h2>
            <p>Labels hand-painted by Miguel Ángel Muñoz Zamora. <strong style="color: var(--terracotta); font-weight: 500;">Click any wine for the full tasting notes.</strong></p>
        </div>
        <div class="wines-grid">
            {WINES_GRID_HOME}
        </div>
    </div>
</section>

<section>
    <div class="container-narrow" style="text-align: center;">
        <span class="eyebrow">Art on the bottle</span>
        <h2 style="margin: 18px 0 24px;">Hand-painted labels.</h2>
        <p class="lede" style="margin: 0 auto;">Every wine carries an original piece by the artist Miguel Ángel Muñoz Zamora. A painting collection that travels with each bottle, which many of our clients collect as small works in their own right.</p>
    </div>
</section>

<section class="cta-banner">
    <img data-img="bottle" alt="" class="cta-banner-img">
    <div class="container">
        <span class="eyebrow">Try before you buy</span>
        <h2>The best way to know these wines is to taste them.</h2>
        <p>Book a tasting at the winery and try as many as you like, told by the people who made them.</p>
        <div class="cta-banner-buttons">
            <a href="#visits" data-page="visits" class="btn btn-light">Book a tasting <span class="arrow">→</span></a>
            <a href="#contact" data-page="contact" class="btn btn-ghost-light">Buy online</a>
        </div>
    </div>
</section>

</main>
"""

# ---------------- VISITS ----------------
PAGE_VISITS = """
<main class="page" id="page-visits">

<header class="page-header">
    <div class="container-narrow">
        <span class="eyebrow">Wine tourism · La Mancha</span>
        <h1>Visits and experiences at the winery.</h1>
        <p>Spend a morning or an afternoon at Pinuaga. Designed for couples and small groups looking for something memorable.</p>
    </div>
</header>

<section>
    <div class="container">
        <div class="split">
            <div class="split-image">
                <img data-img="woman" alt="Tasting on the terrace">
                <span class="caption">Tasting · Terrace with vineyard views</span>
            </div>
            <div class="split-text">
                <span class="eyebrow">Experience · €25 per person</span>
                <h2>Classic Visit &amp; Tasting</h2>
                <p>The perfect way to discover Pinuaga. We walk the old vines, visit the cellar and the barrel room, and finish with a guided tasting on the terrace.</p>
                <p style="margin-top: 24px;"><strong style="color: var(--wine); font-weight: 600;">Includes:</strong></p>
                <ul style="list-style: none; margin-top: 12px;">
                    <li style="padding: 6px 0; color: var(--wine-soft); border-bottom: 1px solid var(--line-soft);">— Guided tour of the vineyard and cellar (60 min)</li>
                    <li style="padding: 6px 0; color: var(--wine-soft); border-bottom: 1px solid var(--line-soft);">— Tasting of 4 wines from the collection</li>
                    <li style="padding: 6px 0; color: var(--wine-soft); border-bottom: 1px solid var(--line-soft);">— Manchego cheese and local olive oil pairing</li>
                    <li style="padding: 6px 0; color: var(--wine-soft);">— Hosted by a member of the family</li>
                </ul>
                <p style="margin-top: 24px; font-size: 0.88rem;"><strong style="color: var(--wine); font-weight: 600;">Duration:</strong> 90 min · <strong style="color: var(--wine); font-weight: 600;">Group:</strong> 2 to 8 · <strong style="color: var(--wine); font-weight: 600;">Languages:</strong> EN · ES</p>
                <a href="#book-form" class="btn btn-primary">Book this visit <span class="arrow">→</span></a>
            </div>
        </div>
    </div>
</section>

<section class="section-bone">
    <div class="container">
        <div class="split split-reverse">
            <div class="split-image">
                <img data-img="rows" alt="Lunch among the vines">
                <span class="caption">Lunch · Beside the vineyard</span>
            </div>
            <div class="split-text">
                <span class="eyebrow">Experience · €65 per person</span>
                <h2>Lunch Among the Vines</h2>
                <p>The full experience. After the tour and tasting, a three-course lunch made with local produce, served outside on a table facing the vineyard.</p>
                <p style="margin-top: 24px;"><strong style="color: var(--wine); font-weight: 600;">Includes:</strong></p>
                <ul style="list-style: none; margin-top: 12px;">
                    <li style="padding: 6px 0; color: var(--wine-soft); border-bottom: 1px solid var(--line-soft);">— Guided tour of the vineyard and cellar</li>
                    <li style="padding: 6px 0; color: var(--wine-soft); border-bottom: 1px solid var(--line-soft);">— Tasting of 5 wines from the collection</li>
                    <li style="padding: 6px 0; color: var(--wine-soft); border-bottom: 1px solid var(--line-soft);">— Three-course menu with local produce</li>
                    <li style="padding: 6px 0; color: var(--wine-soft);">— Coffee and homemade dessert</li>
                </ul>
                <p style="margin-top: 24px; font-size: 0.88rem;"><strong style="color: var(--wine); font-weight: 600;">Duration:</strong> 3 hours · <strong style="color: var(--wine); font-weight: 600;">Group:</strong> 2 to 12 · <strong style="color: var(--wine); font-weight: 600;">Options:</strong> Vegetarian / GF</p>
                <a href="#book-form" class="btn btn-primary">Book this visit <span class="arrow">→</span></a>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="split">
            <div class="split-image">
                <img data-img="workers" alt="Harvest with the family">
                <span class="caption">Harvest · September only</span>
            </div>
            <div class="split-text">
                <span class="eyebrow">Seasonal · €85 per person</span>
                <h2>Harvest with the Family</h2>
                <p>Three weekends a year. Pick with us from first light, see the grapes come into the cellar, taste the fresh-pressed must and stay for lunch on the estate.</p>
                <p style="margin-top: 24px;"><strong style="color: var(--wine); font-weight: 600;">Includes:</strong></p>
                <ul style="list-style: none; margin-top: 12px;">
                    <li style="padding: 6px 0; color: var(--wine-soft); border-bottom: 1px solid var(--line-soft);">— Hand-harvest with the crew</li>
                    <li style="padding: 6px 0; color: var(--wine-soft); border-bottom: 1px solid var(--line-soft);">— Tour of the press and tanks</li>
                    <li style="padding: 6px 0; color: var(--wine-soft); border-bottom: 1px solid var(--line-soft);">— Lunch with the team at the cellar</li>
                    <li style="padding: 6px 0; color: var(--wine-soft);">— Vertical tasting of 3 vintages + the day's must</li>
                </ul>
                <p style="margin-top: 24px; font-size: 0.88rem;"><strong style="color: var(--wine); font-weight: 600;">When:</strong> September · <strong style="color: var(--wine); font-weight: 600;">Group:</strong> Max 10 · <strong style="color: var(--wine); font-weight: 600;">Spots:</strong> Limited</p>
                <a href="#book-form" class="btn btn-primary">Reserve a spot <span class="arrow">→</span></a>
            </div>
        </div>
    </div>
</section>

<section class="section-wine">
    <div class="container-narrow" style="text-align: center;">
        <span class="eyebrow">Private groups &amp; events</span>
        <h2 style="margin: 18px 0 24px;">Birthdays, hen parties, company events.</h2>
        <p style="font-size: 1.08rem; max-width: 56ch; margin: 0 auto 36px;">Reserve the winery for your group. We design the experience with you: vertical tasting, extended pairing, live music, photography. Minimum 12 guests.</p>
        <a href="#contact" data-page="contact" class="btn btn-light">Request a quote <span class="arrow">→</span></a>
    </div>
</section>

<section id="book-form">
    <div class="container">
        <div class="section-header">
            <span class="eyebrow">Reserve</span>
            <h2>Book your visit.</h2>
            <p>We'll confirm by email or WhatsApp in under 24 hours.</p>
        </div>
        <div style="max-width: 720px; margin: 0 auto;">
            <form class="contact-form" id="bookingForm">
                <div class="form-row">
                    <div class="form-group"><label>Name</label><input type="text" name="name" placeholder="Your name" required></div>
                    <div class="form-group"><label>Email</label><input type="email" name="email" placeholder="you@email.com" required></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>Phone / WhatsApp</label><input type="tel" name="phone" placeholder="+34 ..."></div>
                    <div class="form-group"><label>Number of guests</label><input type="number" name="people" min="2" max="20" placeholder="2" required></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>Experience</label><select name="experience" required>
                        <option value="">Select...</option>
                        <option>Classic Visit &amp; Tasting — €25</option>
                        <option>Lunch Among the Vines — €65</option>
                        <option>Harvest with the Family — €85</option>
                        <option>Private group / event</option>
                    </select></div>
                    <div class="form-group"><label>Preferred date</label><input type="date" name="date" required></div>
                </div>
                <div class="form-group"><label>Message (optional)</label><textarea name="message" placeholder="Anything we should know? Allergies, special occasion, language..."></textarea></div>
                <button type="submit" class="form-submit">Request Booking</button>
                <p class="form-note">We respond personally within 24h.</p>
            </form>
        </div>
    </div>
</section>

</main>
"""

# ---------------- CONTACT ----------------
PAGE_CONTACT = """
<main class="page" id="page-contact">

<header class="page-header">
    <div class="container-narrow">
        <span class="eyebrow">Contact</span>
        <h1>We're waiting for you.</h1>
        <p>Write, call, or come directly. The fastest way to reach us is WhatsApp.</p>
    </div>
</header>

<section style="padding-top: 60px;">
    <div class="container">
        <div class="contact-grid">
            <div class="contact-info">
                <span class="eyebrow">Find us</span>
                <h2>The winery.</h2>
                <p>We're 100 km from Madrid via the A-3 or N-301. Free parking on the estate.</p>
                <div class="contact-list">
                    <div class="contact-item">
                        <div class="contact-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                        <div><strong>Address</strong><span>Carretera N-301 Km 95.500<br>45880 Corral de Almaguer<br>Toledo · Spain</span></div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                        <div><strong>Phone</strong><a href="tel:+34629058900">+34 629 05 89 00</a><a href="tel:+34662161276">+34 662 16 12 76 (cellar)</a></div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                        <div><strong>Email</strong><a href="mailto:info@bodegaspinuaga.com">info@bodegaspinuaga.com</a></div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                        <div><strong>Hours</strong><span>Friday to Sunday · 11am – 6pm<br>Other days by appointment</span></div>
                    </div>
                </div>
                <a href="https://wa.me/34629058900?text=Hello%2C%20I%27d%20like%20to%20book%20a%20visit%20at%20Bodegas%20Pinuaga" target="_blank" class="btn btn-primary" style="background: #25D366;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7 1 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4z"/></svg>
                    Message us on WhatsApp
                </a>
            </div>

            <form class="contact-form" id="contactForm">
                <h3>Send us a message.</h3>
                <div class="form-row">
                    <div class="form-group"><label>Name</label><input type="text" name="name" placeholder="Your name" required></div>
                    <div class="form-group"><label>Email</label><input type="email" name="email" placeholder="you@email.com" required></div>
                </div>
                <div class="form-group"><label>Phone</label><input type="tel" name="phone" placeholder="+34 ..."></div>
                <div class="form-group"><label>Subject</label><select name="subject">
                    <option>Book a visit</option>
                    <option>Order wines / online shop</option>
                    <option>Private group / event</option>
                    <option>Press / collaborations</option>
                    <option>Other</option>
                </select></div>
                <div class="form-group"><label>Message</label><textarea name="message" placeholder="Tell us how we can help..." required></textarea></div>
                <button type="submit" class="form-submit">Send Message</button>
                <p class="form-note">We'll reply within 24 hours.</p>
            </form>
        </div>

        <div class="map-wrap">
            <iframe loading="lazy" allowfullscreen src="https://www.google.com/maps?q=Corral+de+Almaguer,+45880+Toledo&output=embed"></iframe>
        </div>
    </div>
</section>

</main>
"""

images_js = "const IMAGES = " + json.dumps(IMAGES) + ";"
wines_js = "const WINES = " + json.dumps(WINES) + ";"

SCRIPT = """
<script>
""" + images_js + "\n" + wines_js + """

// Assign data-img images
document.querySelectorAll('img[data-img]').forEach(img => {
    const key = img.dataset.img;
    if (IMAGES[key]) img.src = IMAGES[key];
});

// Nav scroll style
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 24));

// Mobile menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Page switching
function showPage(name, opts = {}) {
    name = name || 'home';
    const target = document.getElementById('page-' + name);
    if (!target) return showPage('home', opts);
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    target.classList.add('active');
    document.querySelectorAll('[data-page]').forEach(a => a.classList.toggle('active', a.dataset.page === name));
    if (!opts.skipScroll) window.scrollTo({ top: 0, behavior: 'instant' });
    navLinks.classList.remove('open');
    initFadeUp();
}

// Wine modal
const modal = document.getElementById('wineModal');
function openWine(key) {
    const w = WINES[key];
    if (!w) return;
    document.getElementById('modalTag').textContent = w.tag;
    document.getElementById('modalName').textContent = w.name;
    document.getElementById('modalVintage').textContent = w.vintage;
    document.getElementById('modalLede').textContent = w.lede;
    document.getElementById('modalNotes').textContent = w.notes;
    document.getElementById('modalPair').textContent = w.pair;
    document.getElementById('modalImg').src = IMAGES[w.image] || IMAGES.bottles;
    document.getElementById('modalLabelLine').textContent = w.labelLine || '';
    const specsEl = document.getElementById('modalSpecs');
    specsEl.innerHTML = w.specs.map(s => '<div class="wine-modal-specs-row"><span>' + s[0] + '</span><span>' + s[1] + '</span></div>').join('');
    const awardEl = document.getElementById('modalAward');
    awardEl.innerHTML = w.award ? '<div class="wine-modal-award">' + w.award + '</div>' : '';
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    modal.scrollTop = 0;
    const body = modal.querySelector('.wine-modal-body');
    if (body) body.scrollTop = 0;
}

function closeWine() {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
}

document.addEventListener('click', e => {
    // Close modal triggers
    if (e.target.closest('[data-close]')) {
        closeWine();
        // Continue if it's also a nav link
        const navLink = e.target.closest('[data-page]');
        if (navLink) {
            e.preventDefault();
            const page = navLink.dataset.page;
            history.pushState({ page }, '', '#' + page);
            showPage(page);
        }
        return;
    }
    // Wine card / link triggers
    const wineEl = e.target.closest('[data-wine]');
    if (wineEl) {
        e.preventDefault();
        openWine(wineEl.dataset.wine);
        return;
    }
    // Page links
    const link = e.target.closest('[data-page]');
    if (link) {
        e.preventDefault();
        const page = link.dataset.page;
        history.pushState({ page }, '', '#' + page);
        showPage(page);
    }
});

// Close modal on Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeWine();
});

window.addEventListener('popstate', () => {
    const page = location.hash.replace('#', '') || 'home';
    closeWine();
    showPage(page);
});

// Initial page from hash
const initial = location.hash.replace('#', '') || 'home';
showPage(initial, { skipScroll: true });

// Forms
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(this));
    const subject = encodeURIComponent('Pinuaga Booking — ' + d.experience);
    const body = encodeURIComponent('Name: ' + d.name + '\\nEmail: ' + d.email + '\\nPhone: ' + (d.phone || '—') + '\\nGuests: ' + (d.people || '—') + '\\nExperience: ' + d.experience + '\\nDate: ' + (d.date || '—') + '\\n\\n' + (d.message || ''));
    window.location.href = 'mailto:info@bodegaspinuaga.com?subject=' + subject + '&body=' + body;
});
const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(this));
    const subject = encodeURIComponent('Pinuaga — ' + d.subject);
    const body = encodeURIComponent('Name: ' + d.name + '\\nEmail: ' + d.email + '\\nPhone: ' + (d.phone || '—') + '\\nSubject: ' + d.subject + '\\n\\n' + d.message);
    window.location.href = 'mailto:info@bodegaspinuaga.com?subject=' + subject + '&body=' + body;
});

// Fade-up
let observer;
function initFadeUp() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.page.active .split-text, .page.active .split-image, .page.active .experience-card, .page.active .wine-card, .page.active .stat, .page.active .quote-block, .page.active .philosophy-figure, .page.active .philosophy-item, .page.active .lifestyle-image, .page.active .lifestyle-text').forEach(el => {
        if (!el.classList.contains('in')) {
            el.classList.add('fade-up');
            observer.observe(el);
        }
    });
}
</script>
"""

HTML = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bodegas Pinuaga — Organic Wines & Wine Tourism in La Mancha</title>
<meta name="description" content="Family-run organic winery in Corral de Almaguer, Toledo. Guided visits, tastings and wine experiences among century-old vineyards. Book your visit.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Maharlika&family=Livvic:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<style>
{CSS}
{SPA_CSS}
</style>
</head>
<body>

{NAV}

{PAGE_HOME}
{PAGE_ABOUT}
{PAGE_WINES}
{PAGE_VISITS}
{PAGE_CONTACT}

{FOOTER}

{SCRIPT}

</body>
</html>
"""

OUT.write_text(HTML)
print(f"Wrote {OUT}")
print(f"Size: {OUT.stat().st_size / 1024:.1f} KB")
