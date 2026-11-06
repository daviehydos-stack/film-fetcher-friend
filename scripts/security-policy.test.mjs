import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
const policy = config.headers.find(entry => entry.source === '/(.*)')?.headers
  .find(header => header.key === 'Content-Security-Policy')?.value;
const directives = new Map(policy?.split(';').map(part => {
  const [name, ...sources] = part.trim().split(/\s+/);
  return [name, sources];
}));

test('Vimeo SDK source-map connections allow the exact jsDelivr origin', () => {
  assert.ok(directives.get('connect-src')?.includes('https://cdn.jsdelivr.net'));
  assert.ok(directives.get('script-src')?.includes('https://cdn.jsdelivr.net'));
});

test('connection access remains restricted and existing player/payment origins remain allowed', () => {
  const sources = directives.get('connect-src') ?? [];
  assert.ok(!sources.includes('*'));
  assert.ok(!sources.includes('https:'));
  for (const origin of ["'self'", 'https://api.vimeo.com', 'https://*.supabase.co', 'https://api-m.paypal.com', 'https://api-m.sandbox.paypal.com']) {
    assert.ok(sources.includes(origin), `Missing existing origin: ${origin}`);
  }
  assert.deepEqual(directives.get('object-src'), ["'none'"]);
});