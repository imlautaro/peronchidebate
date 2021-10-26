import { defineConfig } from 'windicss/helpers'
import native from 'windi-native'

const config = defineConfig({
	plugins: [native],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#0072bb',
					dark: '#00478a',
				},
			},
		},
		fontFamily: {
			sans: ['"Encode Sans"', 'sans-serif'],
		},
	},
})

export default config
