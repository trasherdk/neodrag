import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), mdx(), prefetch()],
});
