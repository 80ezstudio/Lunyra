# Lunyra — Landing Page

Static landing page for Lunyra, deployed on GitHub Pages.

## Stack

- Pure HTML, CSS, JavaScript — no build step, no framework
- Google Fonts: DM Sans + Instrument Serif
- Mobile-first responsive design

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete landing page — hero, benefits, features, screenshots, trust, FAQ, CTA |
| `styles.css` | All styles — dark calm theme, responsive breakpoints |
| `script.js` | Mobile nav, FAQ accordion, smooth scroll, scroll animations |
| `robots.txt` | Crawl directives for search engines |
| `sitemap.xml` | Sitemap for Google indexing |
| `site.webmanifest` | Web app manifest for PWA/add-to-homescreen |
| `privacy-policy.html` | Privacy policy page (required before launch) |
| `CONFIG.js` | **Single source of truth** for all unverified/assumption values — domain, Play URL, email, images, rating |
| `README.md` | This file |

## Before First Deployment — Required

1. **Replace all `[SCREENSHOT REQUIRED]` placeholders** in `index.html` with real app screenshots (3 feature screenshots + 3 gallery screenshots). Use PNG or WebP, ~16:9 or 9:16 aspect ratio.
2. **Create an OG image** (`og-image.png`, 1200×630px) — a branded hero card image for social sharing.
3. **Choose and configure a domain** — see Deployment below.
4. **Update the Play Store URL** if `com.lunyra.app` changes.
5. **Publish the Privacy Policy** at `/privacy-policy.html` (a template is included).
6. **Create a favicon** (`favicon.png`) — 512×512px, transparent background.

## Deployment — GitHub Pages

### Option A: Deploy from a `docs/` folder (recommended for clean repo structure)

1. Create a new public GitHub repository for the site (e.g. `lunyra/site`)
2. Copy all files from this directory into the repo
3. Go to **Settings → Pages → Source**
4. Select `main` branch and `/ (root)` → **Save**
5. Wait 2–3 minutes — site will be live at `https://YOUR-USERNAME.github.io/repository-name/`

### Option B: Deploy from a `lunyra` branch

```bash
cd /path/to/lunyra
git init
git checkout -b gh-pages
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/lunyra-site.git
git push -u origin gh-pages
```

Enable GitHub Pages in repo **Settings → Pages → Source: gh-pages branch**.

### Custom Domain (lunyra.app)

1. In GitHub Pages settings, enter your custom domain (`lunyra.app`)
2. Add a `CNAME` file to the repo root with content: `lunyra.app`
3. Configure `lunyra.app` DNS to point to GitHub Pages:
   - **A records:** `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME:** `www` → `YOUR-USERNAME.github.io.`
4. Update `sitemap.xml` and `index.html` canonical URL to use `https://80ezstudio.github.io/lunyra/`
5. Enable HTTPS in GitHub Pages settings

## Google Search Console — Post-Deploy Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your domain or URL prefix property
3. Verify ownership (DNS TXT record or HTML file upload)
4. Submit `sitemap.xml` at `https://80ezstudio.github.io/lunyra/sitemap.xml`
5. Request crawling of your homepage
6. Check Coverage report after ~1–2 weeks for indexing status

## Google Indexing Checklist

- [ ] Site live at your domain
- [ ] `sitemap.xml` reachable at `/sitemap.xml`
- [ ] `robots.txt` reachable at `/robots.txt`
- [ ] Page source contains `<title>`, `<meta description>`, canonical, OG, Twitter Card tags
- [ ] Schema.org JSON-LD present in `index.html`
- [ ] Privacy policy page published at `/privacy-policy.html`
- [ ] Google Search Console property added and verified
- [ ] Sitemap submitted in Search Console
- [ ] Homepage requested for indexing in Search Console
- [ ] App store listing links to the landing page domain
- [ ] Google Play Store listing links in footer of landing page

## Local Preview

Open `index.html` directly in a browser — no server needed.

Or serve locally:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Performance Notes

- No JavaScript frameworks — minimal load time
- CSS custom properties for theming — no runtime CSS-in-JS
- Fonts loaded with `preconnect` and `display=swap`
- All animations use `prefers-reduced-motion` media query (respects system setting)
- Images should be WebP/AVIF for best compression before upload

## Needed From the Human

- [ ] Real Play Store URL (`com.lunyra.app` assumed — confirm)
- [ ] 3–6 app screenshots (feature screenshots + gallery)
- [ ] OG image (1200×630px branded image)
- [ ] App icon / favicon (512×512px PNG)
- [ ] Privacy policy text (template provided, review and publish)
- [ ] Domain choice (github.io subdomain vs custom `lunyra.app`)
- [ ] Email contact address (`hello@lunyra.app` used as placeholder)
