# RezLive About Page — Glass SEO Experiment

This is a static, GitHub Pages-ready redesign concept for the RezLive About page.

## Files

- `index.html` — SEO-ready page markup, meta tags, schema, and GA4 placeholder
- `styles.css` — responsive glass design, no heavy libraries
- `app.js` — mobile menu, reveal animation, GA4/dataLayer event tracking
- `robots.txt` — crawler rule for static experiment
- `sitemap.xml` — example sitemap
- `assets/` — placeholder SVG assets

## Before publishing

### 1. Replace URLs

In `index.html`, replace:

```html
<link rel="canonical" href="https://www.rezlive.com/about-us/">
<meta property="og:url" content="https://www.rezlive.com/about-us/">
```

For a GitHub traffic experiment, use your GitHub Pages URL:

```html
https://YOUR_USERNAME.github.io/rezlive-about-glass/
```

For final production on RezLive, keep:

```html
https://www.rezlive.com/about-us/
```

If the production URL changes from `/staticpagesrezlive/aboutus.html` to `/about-us/`, ask the developer to add a 301 redirect.

### 2. Replace GA4 ID

In `index.html`, replace every `G-XXXXXXXXXX` with your GA4 Measurement ID.

Tracked events are already included:

- `nav_signup_click`
- `hero_signup_click`
- `hero_xml_api_click`
- `body_signup_click`
- `accolades_click`
- `why_rezlive_click`
- `reztez_cta_click`
- `final_signup_click`
- `final_xml_api_click`
- `about_scroll_depth`
- `newsletter_submit_attempt`

### 3. Upload images

Put images inside `/assets/` and update `src` paths in `index.html`.

Recommended image names:

- `assets/rezlive-logo.svg` or `assets/rezlive-logo.png`
- `assets/rezlive-logo-white.svg`
- `assets/hero-network.webp`
- `assets/reztez-logo.svg`
- `assets/designer-voyages.webp`
- `assets/designer-packages.webp`
- `assets/og-rezlive-about.png`

Recommended image rules:

- Use WebP for large visuals.
- Keep hero image under 200 KB where possible.
- Add descriptive `alt` text.
- Use lowercase file names with hyphens.

### 4. Publish on GitHub Pages

1. Create a new GitHub repo, for example `rezlive-about-glass`.
2. Upload all files to the repo root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/root`.
6. Save and wait for GitHub to show your live URL.

### 5. Test

Run the live page through:

- Google Lighthouse
- PageSpeed Insights
- Rich Results Test
- Schema Markup Validator
- GA4 Realtime report

## Important note

This code can improve presentation, technical SEO readiness, and tracking quality, but it cannot guarantee ranking or traffic. Organic traffic depends on indexing, authority, backlinks, search demand, internal linking, official domain deployment, and content trust.
