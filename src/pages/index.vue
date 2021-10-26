<template>
	<container
		class="flex flex-col items-center px-8 py-16 space-y-16 text-center"
	>
		<div v-if="!phrase.length" class="flex flex-col items-center space-y-4">
			<img class="max-w-48 md:max-w-64" src="/icon.png" />
			<span class="font-semibold text-3xl md:text-4xl">
				¡Generá frases para debatir como un buen peroncho!
			</span>
			<span class="text-lg md:text-xl text-gray-600">
				Hacé clic en el botón de abajo para obtener tu frase.
			</span>
			<button
				@click="generate"
				class="bg-primary px-5 py-3 font-bold text-lg md:text-xl rounded-full text-white hover:bg-primary-dark"
			>
				Generar
			</button>
		</div>
		<div
			v-else
			class="bg-gray-100 flex flex-col p-8 rounded-3xl space-y-4 w-full max-w-sm"
		>
			<span class="text-2xl font-semibold">Tu frase es: </span>
			<p>
				{{ phrase }}
			</p>
			<button
				@click="generate"
				class="bg-primary px-4 py-1.5 font-bold rounded-full text-white hover:bg-primary-dark"
			>
				Generar otra
			</button>
			<button
				v-if="shareSupport"
				@click="share"
				class="border-[3px] px-4 py-1.5 font-bold rounded-full hover:bg-black/5"
			>
				Compartir
			</button>
		</div>
	</container>
</template>

<script setup>
import { onMounted, ref } from '@nuxtjs/composition-api'

const data = [
	[
		'La inflación',
		'La corrupción',
		'La inseguridad',
		'La desocupación',
		'La devaluación',
		'El narcotráfico',
	],
	[
		'es un invento',
		'es un montaje',
		'es una maniobra',
		'es una mentira',
		'es una falsedad',
		'es un ardid',
	],
	[
		'de los golpistas',
		'de la oposición',
		'del Grupo Clarín',
		'de los fascistas',
		'del capitalismo',
		'de una minoría',
	],
	[
		'para sabotear',
		'para destruir',
		'para perjudicar',
		'para debilitar',
		'para desgastar',
		'para anular',
	],
	[
		'al Pueblo.',
		'al Modelo.',
		'al Gobierno.',
		'la Democracia.',
		'a La Patria.',
		'el crecimiento.',
	],
]

const phrase = ref('')

const generate = () => {
	phrase.value = data
		.map(i => {
			const random = Math.floor(Math.random() * i.length)
			return i[random]
		})
		.join(' ')
}

const shareSupport = ref(false)

onMounted(() => {
	if (navigator.share) {
		shareSupport.value = true
	}
})

const share = () => {
	navigator.share({
		title: 'Peronchidebate',
		text: phrase.value,
		url: 'https://peronchidebate.vercel.app/',
	})
}
</script>
