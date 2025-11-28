# path-of-ahlulbayt
Educational platform for Shia Muslims — Path of AhlulBayt

## Security

This repo includes some basic security hardening and automated checks:

- CSP and Referrer-Policy meta tags in HTML, and sample `netlify.toml` and `nginx.conf` headers for deployment.
- URL validation for event source links in `script.js` to prevent `javascript:`/`data:` URLs.
- A GitHub Action `security-scan` that runs a static grep-based scanner and ESLint checks on push/prs.
- See `SECURITY.md` for more details and reporting information.

