import { defineConfig } from 'windicss/helpers'
import native from 'windi-native'

const config = defineConfig({
	plugins: [native],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
	},
})

export default config
