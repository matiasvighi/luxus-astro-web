/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        colors: {
            ...colors,
            luxus: '#ff135a',
            luxusBackground: '#343a40',
        },
		extend: {},
	},
	plugins: [],
}
