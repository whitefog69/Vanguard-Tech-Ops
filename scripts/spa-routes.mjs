// GitHub Pages only serves real files, so /privacy would 404 on a direct visit.
// After the build, copy index.html into a folder for every route in src/App.tsx,
// and to 404.html as a fallback for anything else.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const app = readFileSync('src/App.tsx', 'utf8');
const routes = [...app.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((p) => p !== '/' && !p.includes(':') && !p.includes('*'));

const index = join(dist, 'index.html');
for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(index, join(dir, 'index.html'));
}
writeFileSync(join(dist, '404.html'), readFileSync(index));

console.log(`spa-routes: created ${routes.length} route pages + 404.html`);
