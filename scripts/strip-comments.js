#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const root = process.cwd();

const patterns = [
  '**/*.{js,jsx,ts,tsx,css,html,conf,nginx,toml,yml,yaml,sh,env}'
];

const exclude = ['**/node_modules/**', '**/.git/**', '**/assets/fonts/**', '**/*.md', '**/LICENSE*', '**/package-lock.json'];

function stripComments(content, ext) {
  if (ext === '.html') {
    return content.replace(/<!--([\s\S]*?)-->/g, '');
  }
  if (ext === '.css') {
    return content.replace(/\/\*([\s\S]*?)\*\//g, '');
  }
  if (ext.match(/\.ya?ml|\.toml|\.conf$|nginx/)) {
    return content.split(/\r?\n/).map(line => line.replace(/^\s*#.*$/g, '')).join('\n');
  }
  
  if (ext.match(/\.jsx?$|\.tsx?$|\.sh|\.env/)) {
    
    let c = content.replace(/\/\*([\s\S]*?)\*\//g, '');
    
    c = c.replace(/(^|\s)\/\/.*$/gm, '$1');
    return c;
  }
  return content;
}

patterns.forEach(pattern => {
  glob(pattern, { cwd: root, nodir: true, ignore: exclude }, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      const p = path.join(root, file);
      try {
        const stat = fs.statSync(p);
        if (!stat.isFile()) return;
        const ext = path.extname(p);
        const orig = fs.readFileSync(p, 'utf8');
        const stripped = stripComments(orig, ext);
        if (stripped !== orig) {
          fs.writeFileSync(p, stripped, 'utf8');
          console.log('Stripped comments:', file);
        }
      } catch (e) {
        console.error('Failed to strip', file, e.message);
      }
    });
  });
});

console.log('strip-comments finished.');
