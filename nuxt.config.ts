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
			Inter: [400, 600, 700],
		},
	},
	pwa: {
		manifest: {
			name: 'Nuxt App',
			short_name: 'Nuxt App',
			lang: 'en',
		},
	},
	router: {
		trailingSlash: true,
	},
	srcDir: 'src',
	target: 'static',
}

export default config
