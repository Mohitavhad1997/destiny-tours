# Destiny Tours — Premium Digital Business Card Website

**Journey Today, Memories Forever**

A luxury, mobile-first static website for Destiny Tours, a holiday-planning business based in Anjurphata, Bhiwandi, Maharashtra. Built as a premium digital business card — perfect for an Instagram bio link, WhatsApp status, or QR code on a printed visiting card.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript only
- No frameworks, no build step, no Node.js required
- Fully responsive (mobile-first)
- GitHub Pages ready — just push and enable Pages

## Folder Structure

```
destiny-tours/
├── assets/
│   ├── logo/          → logo.svg, favicon.svg
│   ├── icons/          → reserved for extra icon assets
│   ├── backgrounds/     → reserved for hero background images
│   ├── gallery/         → reserved for local gallery images
│   └── destinations/    → reserved for local destination images
├── css/
│   ├── style.css        → design tokens, typography, components
│   ├── responsive.css   → mobile-first breakpoints
│   └── animations.css   → keyframes & motion
├── js/
│   ├── app.js           → navbar, hero slider, counters, reveal, back-to-top, FAQ
│   ├── gallery.js       → gallery filter + lightbox
│   └── enquiry.js       → form validation + WhatsApp message generator
├── index.html
├── about.html
├── packages.html
├── gallery.html
├── contact.html
├── faq.html
├── robots.txt
├── sitemap.xml
├── manifest.json
└── README.md
```

## Notes on Images

Destination and gallery photography uses reliable placeholder CDNs (`picsum.photos` for destinations/gallery, `images.unsplash.com` for the hero slider) so the site works immediately without any image uploads. To finalize the brand, replace these `<img src="...">` URLs with your own licensed, high-resolution travel photography — ideally stored inside `assets/gallery/` and `assets/destinations/` and referenced with relative paths (e.g. `assets/destinations/goa.jpg`).

The QR code on the homepage and contact page is generated live via the free `api.qrserver.com` service and always points to the domain in the `data=` parameter — update that URL once the site is live on its final domain.

## Editing Business Details

All contact details (phone, WhatsApp, email, Instagram, Facebook, address) are hard-coded in the header, quick-actions, contact section and footer of every page. Use find-and-replace across the HTML files if any detail changes:

- Phone / WhatsApp: `+91 8856962959`
- Email: `info.destinytours26@gmail.com`
- Instagram: `@Destinytours2026`
- Facebook: `facebook.com/destinytours26`
- Address: `Anjurphata, Bhiwandi, Maharashtra, India`

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this entire folder to the `main` branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. Save — your site will be live at `https://<username>.github.io/<repo-name>/` within a few minutes.
4. Update `sitemap.xml`, `robots.txt`, and all `og:url` / `canonical` meta tags to your real GitHub Pages (or custom domain) URL.

## Features

- Sticky, glassmorphic navbar with mobile menu
- Auto-rotating hero image slider (every 5 seconds)
- Floating WhatsApp button + animated back-to-top button
- Animated stat counters and scroll-reveal animations
- Filterable destination packages (Domestic / International / Family / Honeymoon / Group)
- 30-photo filterable masonry gallery with keyboard-accessible lightbox
- Holiday enquiry form that validates required fields and opens a pre-filled WhatsApp message
- 10-question FAQ accordion (home preview + dedicated FAQ page)
- Embedded Google Map, SEO meta tags, Open Graph/Twitter cards, sitemap.xml, robots.txt, and manifest.json for PWA/mobile-bio use
