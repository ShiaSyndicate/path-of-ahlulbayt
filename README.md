# path-of-ahlulbayt
Educational platform for Shia Muslims — Path of AhlulBayt

## Security

This repo includes some basic security hardening and automated checks:

- CSP and Referrer-Policy meta tags in HTML, and sample `netlify.toml` and `nginx.conf` headers for deployment.
- URL validation for event source links in `script.js` to prevent `javascript:`/`data:` URLs.
- A GitHub Action `security-scan` that runs a static grep-based scanner and ESLint checks on push/prs.
- See `SECURITY.md` for more details and reporting information.

### Strict CSP / Local fonts
If you want to enforce a strict Content-Security-Policy without `style-src 'unsafe-inline'` (recommended), move all runtime `style.*` property assignments in JS into CSS classes and precomputed positions or use server-side nonces. To host fonts locally:

1. Download font files for Inter, Cinzel, and Amiri into `assets/fonts/`.
2. Edit `assets/fonts/fonts.css` to match file names and font-family names.
3. In `index.html` and `timeline.html`, uncomment the `assets/fonts/fonts.css` styles link.
4. Update `netlify.toml` or `nginx.conf` to remove `unsafe-inline` from `style-src` if you refactored JS to avoid inline styles.

This repository includes a default fallback where CSP allows inline styles to maintain layout while we complete refactors.

