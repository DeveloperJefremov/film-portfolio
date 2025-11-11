'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
// import { useEffect } from 'react';

export default function HomePhotoSection() {
	// Создаём плагины
	const plugin1 = Autoplay({ delay: 19000, stopOnInteraction: false });
	const plugin2 = Autoplay({ delay: 8000, stopOnInteraction: false });
	const plugin3 = Autoplay({ delay: 13000, stopOnInteraction: false });
	const plugin4 = Autoplay({ delay: 25000, stopOnInteraction: false });

	// РАССИНХРОНИЗАЦИЯ
	// useEffect(() => {
	// 	// Останавливаем все сразу
	// 	plugin1.stop();
	// 	plugin2.stop();
	// 	plugin3.stop();
	// 	plugin4.stop();

	// 	// Запускаем с шагом 3 сек
	// 	setTimeout(() => plugin1.play(), 0); // 0 сек
	// 	setTimeout(() => plugin2.play(), 6000); // 3 сек
	// 	setTimeout(() => plugin3.play(), 3000); // 6 сек
	// 	setTimeout(() => plugin4.play(), 9000); // 9 сек
	// }, []);

	return (
		<div className='w-full p-4'>
			<div className='grid grid-cols-3 gap-2'>
				{/* === 1-й СТОЛБЕЦ === */}
				<Carousel plugins={[plugin1]} className='w-full' opts={{ loop: true }}>
					<CarouselContent>
						<CarouselItem>
							<div
								className='relative w-full'
								style={{ aspectRatio: '448 / 560' }}
							>
								<Image
									src='/assets/photos/homepage/homepage5.png'
									alt='Photo 1'
									fill
									className='object-cover rounded-lg'
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div
								className='relative w-full'
								style={{ aspectRatio: '448 / 560' }}
							>
								<Image
									src='/assets/photos/homepage/homepage2.png'
									alt='Photo 1b'
									fill
									className='object-cover rounded-lg'
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div
								className='relative w-full'
								style={{ aspectRatio: '448 / 560' }}
							>
								<Image
									src='/assets/photos/homepage/homepage1.png'
									alt='Photo 1c'
									fill
									className='object-cover rounded-lg'
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>

				{/* === 2-й СТОЛБЕЦ === */}
				<Carousel plugins={[plugin2]} className='w-full' opts={{ loop: true }}>
					<CarouselContent>
						<CarouselItem>
							<div
								className='relative w-full'
								style={{ aspectRatio: '448 / 560' }}
							>
								<Image
									src='/assets/photos/homepage/homepage1.png'
									alt='Photo 2'
									fill
									className='object-cover rounded-lg'
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div
								className='relative w-full'
								style={{ aspectRatio: '448 / 560' }}
							>
								<Image
									src='/assets/photos/homepage/homepage2.png'
									alt='Photo 2b'
									fill
									className='object-cover rounded-lg'
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div
								className='relative w-full'
								style={{ aspectRatio: '448 / 560' }}
							>
								<Image
									src='/assets/photos/homepage/homepage3.png'
									alt='Photo 2c'
									fill
									className='object-cover rounded-lg'
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div
								className='relative w-full'
								style={{ aspectRatio: '448 / 560' }}
							>
								<Image
									src='/assets/photos/homepage/homepage4.png'
									alt='Photo 2d'
									fill
									className='object-cover rounded-lg'
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>

				{/* === 3-й СТОЛБЕЦ === */}
				<div className='flex flex-col gap-2'>
					{/* ВЕРХНЯЯ */}
					<Carousel
						plugins={[plugin3]}
						className='w-full'
						opts={{ loop: true }}
					>
						<CarouselContent>
							<CarouselItem>
								<div
									className='relative w-full'
									style={{ aspectRatio: '448 / 240' }}
								>
									<Image
										src='/assets/photos/homepage/homepage2.png'
										alt='Photo 3'
										fill
										className='object-cover rounded-lg'
									/>
								</div>
							</CarouselItem>
							<CarouselItem>
								<div
									className='relative w-full'
									style={{ aspectRatio: '448 / 240' }}
								>
									<Image
										src='/assets/photos/homepage/homepage4.png'
										alt='Photo 3b'
										fill
										className='object-cover rounded-lg'
									/>
								</div>
							</CarouselItem>
						</CarouselContent>
					</Carousel>

					{/* НИЖНЯЯ */}
					<Carousel
						plugins={[plugin4]}
						className='w-full'
						opts={{ loop: true }}
					>
						<CarouselContent>
							<CarouselItem>
								<div
									className='relative w-full'
									style={{ aspectRatio: '448 / 315' }}
								>
									<Image
										src='/assets/photos/homepage/homepage3.png'
										alt='Photo 4'
										fill
										className='object-cover rounded-lg'
									/>
								</div>
							</CarouselItem>
							<CarouselItem>
								<div
									className='relative w-full'
									style={{ aspectRatio: '448 / 315' }}
								>
									<Image
										src='/assets/photos/homepage/homepage5.png'
										alt='Photo 4b'
										fill
										className='object-cover rounded-lg'
									/>
								</div>
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</div>
	);
}
