// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import vercel from '@astrojs/vercel';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	server: { port: 80 },
	adapter: vercel(),
	devToolbar: { enabled: false },
	image: {
		service: passthroughImageService()
  	},
	integrations: [
		starlight({
			title: 'mymind.care',
			customCss: [
				'./src/fonts/font-face.css',
				'./src/styles/custom.css'
			],
			logo: { 
				dark: './public/favicon.svg',
				light: './public/favicon-light.svg',
				alt: 'mymind.care'
			},
			editLink: {
				baseUrl: 'https://github.com/bayrock/mymind.care/edit/main/'
			},
			social: [
				// { icon: 'discord', label: 'Discord', href: 'https://#' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/bayrock/mymind.care' }
			],
			sidebar: [
				{
					label: 'Community',
					items: [
						{ label: 'About Us', slug: 'about' }
					],
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' }
				}
			],
			plugins: [
				catppuccin({
					dark: { flavor: "macchiato", accent: "lavender" },
					light: { flavor: "latte", accent: "lavender" }
				})
			]
		}),
	]
});
