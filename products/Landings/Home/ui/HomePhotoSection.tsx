'use client';

import Image from 'next/image';

export default function HomePhotoSection() {
	return (
		<div className='w-full p-4'>
			<div className='grid grid-cols-3 gap-2'>
				{/* Первый столбик */}
				<div className='w-full relative' style={{ aspectRatio: '448 / 560' }}>
					<Image
						src='/assets/photos/homepage/homepage5.png'
						alt='Photo 1'
						fill
						className='object-cover rounded-lg'
					/>
				</div>

				{/* Второй столбик */}
				<div className='w-full relative' style={{ aspectRatio: '448 / 560' }}>
					<Image
						src='/assets/photos/homepage/homepage1.png'
						alt='Photo 2'
						fill
						className='object-cover rounded-lg'
					/>
				</div>

				{/* Третий столбик (два фото в столбик) */}
				<div className='flex flex-col gap-2'>
					<div className='w-full relative' style={{ aspectRatio: '448 / 240' }}>
						<Image
							src='/assets/photos/homepage/homepage2.png'
							alt='Photo 3'
							fill
							className='object-cover rounded-lg'
						/>
					</div>
					<div className='w-full relative' style={{ aspectRatio: '448 / 315' }}>
						<Image
							src='/assets/photos/homepage/homepage3.png'
							alt='Photo 4'
							fill
							className='object-cover rounded-lg'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
