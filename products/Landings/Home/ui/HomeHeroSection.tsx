'use client';

import { Button } from '@/components/ui/button';
import { ShimmeringText } from '@/components/ui/shadcn-io/shimmering-text';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function HomeHeroSection() {
	const { theme } = useTheme();

	const isDark = theme === 'dark';

	return (
		<div className='w-full flex items-center justify-center py-12 px-4'>
			<div className='rounded-lg p-12 max-w-5xl w-full'>
				{/* Main Title */}
				<div className='mb-8'>
					<h1
						className={` font-lora-bold text-7xl font-serif font-bold text-center leading-tight ${
							isDark ? 'text-white' : 'text-black'
						} [text-shadow:_0_6px_4px_rgba(0,0,0,0.2)] dark:[text-shadow:_0_6px_4px_rgba(255,255,255,0.15)]]
`}
					>
						Городские сюжеты
						<br />
						<span className='relative inline-block'>
							через{' '}
							<ShimmeringText
								text='объектив'
								color={isDark ? 'white' : 'black'}
								wave
								transition={{
									repeat: Infinity,
									repeatType: 'loop',
									repeatDelay: 10,
									ease: 'easeInOut',
								}}
							/>
							<div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full flex justify-center'>
								<Image
									src={
										isDark
											? '/assets/photos/WhiteUnderline.png'
											: '/assets/photos/BlackUnderline.png'
									}
									alt='decorative underline'
									width={800}
									height={40}
									className='h-auto w-auto translate-x-29' // <--- сдвиг вправо
									priority
								/>
							</div>
						</span>
					</h1>
				</div>

				{/* Subtitle */}
				<p
					className={`text-center  text-2xl  mb-8  ${
						isDark ? 'text-white/80' : 'text-gray-600'
					}`}
				>
					Ловя невидимые ритмы города
				</p>

				{/* CTA Button */}
				<div className='flex justify-center'>
					<Button className='bg-yellow-400 hover:bg-yellow-500  text-black font-semibold px-8 py-2 rounded-full'>
						{/* color #facc15 */}
						Начать мое Приключение
					</Button>
				</div>
			</div>
		</div>
	);
}
