/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'fgb-blue': {
					'light': '#42BFEB',
					DEFAULT: '#2B4272',
					'dark': '#111A3B'
				}
			}
		}
	},
	plugins: [],
}
