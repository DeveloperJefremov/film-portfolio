// app/fonts.ts
import localFont from 'next/font/local';

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

export { montserrat, playfair };
