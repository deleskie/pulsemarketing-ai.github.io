const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const source = path.join(distDir, 'index.html');
const target = path.join(distDir, '404.html');

if (!fs.existsSync(distDir)) {
  console.error('[postbuild] dist/ directory not found. Did you run `npm run build`?');
  process.exit(0);
}

if (!fs.existsSync(source)) {
  console.error('[postbuild] dist/index.html not found. Unable to create 404.html fallback.');
  process.exit(0);
}

try {
  fs.copyFileSync(source, target);
  console.log('[postbuild] 404.html fallback created for GitHub Pages.');
} catch (err) {
  console.error('[postbuild] Failed to copy index.html to 404.html:', err);
  process.exit(1);
}
