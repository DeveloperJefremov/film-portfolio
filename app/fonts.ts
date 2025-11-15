// app/fonts.ts
import localFont from 'next/font/local';

// === ТВОЙ СТАРЫЙ КОД (ЛОГО) — ОСТАЁТСЯ ===
const playfair = localFont({
	src: [
		{
			path: '../public/fonts/PlayfairDisplay-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/PlayfairDisplay-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-playfair',
	display: 'swap',
});

const montserrat = localFont({
	src: [
		{
			path: '../public/fonts/Montserrat-Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/fonts/Montserrat-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Montserrat-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
	],
	variable: '--font-montserrat',
	display: 'swap',
});

// === НОВОЕ: ДЛЯ HERO (из скрина) ===
const lora = localFont({
	src: [
		{
			path: '../public/fonts/Lora-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Lora-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-lora',
	display: 'swap',
});

const playfairItalic = localFont({
	src: [
		{
			path: '../public/fonts/PlayfairDisplay-Italic.ttf',
			weight: '400',
			style: 'italic',
		},
	],
	variable: '--font-playfair-italic',
	display: 'swap',
});

export { lora, montserrat, playfair, playfairItalic };
