# Security Policy

Thank you for your interest in the security of the Path of AhlulBayt repository.

This document provides a short summary of security precautions implemented in this repository and guidance for responsible disclosure.

## Reporting a Vulnerability
If you find a security vulnerability, please email security@your-domain.example (replace with project contact) or open a private issue on the repository.

## Implemented protections
- Basic runtime URL validation for external hyperlinks in `script.js` to block `javascript:` and `data:` URIs.
- Added Content-Security-Policy and Referrer-Policy meta tags to `index.html` and `timeline.html` as a defense-in-depth control.
- Removed inline scripts where possible and moved inline styles to `style.css` to allow more restrictive CSP policies.
- Removed console logs that may cause information leakage in production.
- Removed console logs that may cause information leakage in production.

## Recommended deployment configuration
Set security headers via your hosting provider or reverse proxy:

Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data: https://www.al-islam.org; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none';

Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
X-Frame-Options: DENY
Permissions-Policy: geolocation=(), microphone=()

Make sure to host fonts locally if privacy or integrity is important, and add SRI for third-party scripts when feasible.

### Full 'unsafe-inline' removal guidance
If you want to enforce a strict Content-Security-Policy without `style-src 'unsafe-inline'` (recommended), move all runtime `style.*` property assignments in JS into CSS classes and precomputed positions or use server-side nonces. The included `assets/fonts/fonts.css` file contains sample @font-face entries; add your own font files to `assets/fonts`, uncomment the `<link>` tags in the HTML, and switch `font-src` to 'self' in server headers.

## Security Scanning
A GitHub Action `security-scan.yml` is included that runs a static grep-based scan and ESLint on PRs to catch common issues.

## Limitations
This is a static site repository. Server-side headers must be configured in your host or CDN for best effect. CSP meta tags in the HTML are a fallback and are less powerful than server headers.

## License
All security fixes should follow the repository's license and contribution guidelines.

---
_This document is maintained automatically by the repository maintainers; please open PRs for improvements._
