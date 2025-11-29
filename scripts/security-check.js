

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

const patterns = [
  { key: 'javascript-href', re: /href\s*=\s*["']javascript:/i, severity: 'high', reason: 'javascript: hrefs can execute code' },
  { key: 'eval', re: /\beval\s*\(/i, severity: 'high', reason: 'eval() could execute arbitrary code' },
  { key: 'new-function', re: /new\s+Function\s*\(/i, severity: 'high', reason: 'new Function() executes code' },
  { key: 'document.write', re: /document\.write\s*\(/i, severity: 'high', reason: 'document.write can cause XSS' },
  { key: 'innerHTML', re: /innerHTML\s*=\s*/i, severity: 'medium', reason: 'innerHTML assignment may inject HTML' },
    { key: 'inline-event-handlers', re: /(\s|<)on[a-zA-Z]+\s*=\s*['"]/i, severity: 'medium', reason: 'inline event handlers can be abused for XSS' },
  { key: 'csp-meta', re: /<meta\s+http-equiv=["']Content-Security-Policy["']/i, severity: 'low', reason: 'CSP Meta tag found' }
];

const filesToCheck = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    if (ent.name === 'node_modules' || ent.name === '.git' || ent.name === 'scripts') continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full);
    else if (/\.(js|html|css)$/i.test(ent.name)) filesToCheck.push(full);
  }
}


walk(projectRoot);

let issues = [];

for (const file of filesToCheck) {
  const content = fs.readFileSync(file, 'utf8');
  patterns.forEach(p => {
    if (p.key === 'csp-meta') {
      
      return;
    }
    const match = content.match(p.re);
    if (match) issues.push({ file, key: p.key, reason: p.reason, severity: p.severity, excerpt: match[0] });
  });
}


const htmlFiles = filesToCheck.filter(f => f.endsWith('.html'));
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (!/<meta\s+http-equiv=["']Content-Security-Policy["']/i.test(content)) {
    issues.push({ file, key: 'missing-csp-meta', reason: 'Missing CSP meta tag in HTML file', severity: 'low' });
  }
});

if (issues.length > 0) {
  console.log('\nSecurity scan results:');
  issues.forEach((i, idx) => {
    console.log(`\n${idx + 1}) [${i.severity.toUpperCase()}] ${i.reason}: ${i.file}`);
    if (i.excerpt) console.log(`   snippet: ${i.excerpt}`);
  });
} else {
  console.log('No issues found by security-check script.');
}


if (issues.some(i => i.severity === 'high')) process.exit(1);
process.exit(0);
