/*
  Lightweight font downloader for Google Fonts CSS.
  NOTE: This script simplifies extraction and downloads woff2 fonts into assets/fonts.
  It does not cover every Google Fonts edge case. Run it manually to pull fonts for local hosting.
  Usage: node scripts/download-fonts.js
*/
const https = require('https');
const fs = require('fs');
const path = require('path');

const families = [
  'Amiri:ital,wght@0,400;0,700;1,400',
  'Cinzel:wght@400;700',
  'Inter:wght@300;400;600'
];

const outputDir = path.join(__dirname, '..', 'assets', 'fonts');
const fontsCssPath = path.join(outputDir, 'fonts.css');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

function download(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const options = { headers };
    https.get(url, options, (res) => {
      if (res.statusCode !== 200) return reject(new Error('Bad status ' + res.statusCode));
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading Google Fonts CSS and assets');
  const familyQuery = families.map(encodeURIComponent).join('&family=');
  const cssUrl = `https://fonts.googleapis.com/css2?family=${familyQuery}&display=swap`;
  try {
    // Google Fonts requires a browser-like User-Agent; set it to avoid 403 or non-browser content
    const cssBuffer = await download(cssUrl, { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64)' });
    const cssText = cssBuffer.toString('utf8');
    // parse CSS for woff2 urls
    const matches = Array.from(cssText.matchAll(/url\((https:\/\/[^)]+\.(woff2|ttf))\)/g));
    const fontUrls = matches.map(m => m[1]);
    const fonts = [];
    for (const url of fontUrls) {
      const fileName = url.split('/').pop().split('?')[0];
      const outpath = path.join(outputDir, fileName);
      if (!fs.existsSync(outpath)) {
        console.log(`Downloading ${url} -> ${fileName}`);
        const buff = await download(url);
        fs.writeFileSync(outpath, buff);
      } else {
        console.log(`Already exists: ${fileName}`);
      }
      fonts.push({ url, fileName });
    }

    // Replace remote URLs in the CSS with local filenames and save
    let localCss = cssText;
    for (const f of fonts) {
      const regex = new RegExp(f.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      localCss = localCss.replace(regex, `${f.fileName}`);
    }
    fs.writeFileSync(fontsCssPath, '/* Auto-generated fonts.css (local) */\n' + localCss);
    console.log('Fonts downloaded, update `assets/fonts/fonts.css` and uncomment link in HTML to use local fonts.');
  } catch (err) {
    console.error('Failed to download fonts:', err.message);
    process.exitCode = 1;
  }
}

run();
