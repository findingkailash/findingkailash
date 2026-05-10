// build.js — compiles JSX → JS and generates dist/ for GitHub Pages
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dist = path.join(__dirname, 'dist');
fs.mkdirSync(dist, { recursive: true });

// Compile each JSX file with Babel
const jsxFiles = [
  'tweaks-panel.jsx',
  'components.jsx',
  'sections.jsx',
  'sections-2.jsx',
  'sections-3.jsx',
  'app.jsx',
];

for (const file of jsxFiles) {
  const out = path.join(dist, file.replace('.jsx', '.js'));
  execSync(`npx babel "${file}" -o "${out}"`, { stdio: 'inherit' });
}

// Copy static assets
for (const file of ['styles.css', 'image-slot.js']) {
  fs.copyFileSync(file, path.join(dist, file));
}

// Copy public folder recursively
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}
copyDir(path.join(__dirname, 'public'), path.join(dist, 'public'));

// Generate dist/index.html — remove Babel standalone, point to compiled JS
let html = fs.readFileSync('index.html', 'utf8');

// Remove the @babel/standalone script tag (the whole line)
html = html.replace(
  /\n?<script src="https:\/\/unpkg\.com\/@babel\/standalone[^"]*"[^>]*><\/script>/g,
  ''
);

// Convert type="text/babel" script tags → plain JS pointing at compiled files
html = html.replace(
  /<script type="text\/babel" src="([^"]+)\.jsx"><\/script>/g,
  '<script src="$1.js"></script>'
);

fs.writeFileSync(path.join(dist, 'index.html'), html);
console.log('Build complete → dist/');
