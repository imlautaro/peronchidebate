import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api/module',
		'nuxt-windicss',
		'unplugin-icons/nuxt',
		'@nuxtjs/google-fonts',
		'@nuxtjs/pwa',
	],
	components: true,
	googleFonts: {
		display: 'swap',
		families: {
			'Encode+Sans': [400, 600, 700],
		},
	},
	pwa: {
		manifest: {
			name: 'Peronchidebate',
			short_name: 'Peronchidebate',
			lang: 'es',
		},
	},
	router: {
		trailingSlash: true,
	},
	srcDir: 'src',
	target: 'static',
}

export default config
