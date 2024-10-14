/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Open Sans", "sans-serif"],
		},
		extend: {
			colors: {
				background: "#0E0F11",
				white: "#FFFFFF",
				text: "#CDCDCD",
			},
		},
	},
	plugins: [],
};
