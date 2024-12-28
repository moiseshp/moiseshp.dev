import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [
    tailwind(),
    partytown({ config: { forward: ['dataLayer.push'] } }),
  ],
  output: 'server',
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
    },
  }),
});
