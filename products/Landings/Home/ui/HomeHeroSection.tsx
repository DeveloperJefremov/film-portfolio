'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomeHeroSection() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Чтобы избежать расхождений на сервере
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = theme === 'dark';

	return (
		<div className='w-full flex items-center justify-center py-12 px-4'>
			<div className='rounded-lg p-12 max-w-2xl w-full'>
				{/* Main Title */}
				<div className='mb-8'>
					<h1
						className={`text-5xl font-serif font-bold text-center leading-tight ${
							isDark ? 'text-white' : 'text-black'
						}`}
					>
						Городские сюжеты
						<br />
						<span className='relative inline-block'>
							через объектив
							<div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full flex justify-center'>
								<Image
									src={
										isDark
											? '/assets/photos/WhiteUnderline.png'
											: '/assets/photos/BlackUnderline.png'
									}
									alt='decorative underline'
									width={200}
									height={40}
									className='h-auto w-auto'
									priority
								/>
							</div>
						</span>
					</h1>
				</div>

				{/* Subtitle */}
				<p
					className={`text-center text-base mb-8 font-light ${
						isDark ? 'text-white/80' : 'text-gray-600'
					}`}
				>
					Ловя невидимые ритмы города
					{/* Capturing the unseen rhythms of the city. */}
				</p>

				{/* CTA Button */}
				<div className='flex justify-center'>
					<Button className='bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-2 rounded-full'>
						{/* Discover my Journey */}
						Начать мое Приключение
					</Button>
				</div>
			</div>
		</div>
	);
}
