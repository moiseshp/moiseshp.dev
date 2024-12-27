import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [tailwind(), partytown()],
  output: 'server',
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
    },
  }),
});
