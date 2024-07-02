/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                luxus: '#ff135a',
                luxusBackground: '#343a40',
            },
            boxShadow: {
                'up-down': '26px -4px 26px rgba(0, 0, 0, 0.1)',
            }
        },
	},
	plugins: [],
}
