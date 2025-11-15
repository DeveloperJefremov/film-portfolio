'use client';

import {
	Marquee,
	MarqueeContent,
	MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import TestimonialsCard from './TestimonialsCard';

const testimonials = [
	{
		name: 'Алексей П.',
		text: 'Отличная работа! Очень доволен результатом.',
		// avatar: '/avatars/avatar1.jpg',

		avatar: '/assets/photos/Photo.png',
	},
	{
		name: 'Мария С.',
		text: 'Очень профессионально и быстро. Рекомендую!',
		avatar: '/assets/photos/Photo.png',
	},
	{
		name: 'Игорь К.',
		text: 'Все супер, буду обращаться снова.',
		avatar: '/assets/photos/Photo.png',
	},
	{
		name: 'Елена Л.',
		text: 'Приятно работать с таким специалистом!',
		avatar: '/assets/photos/Photo.png',
	},
	{
		name: 'Дмитрий М.',
		text: 'Отличное взаимодействие и результат.',
		avatar: '/assets/photos/Photo.png',
	},
	{
		name: 'Светлана В.',
		text: 'Очень доволен качеством работы!',
		avatar: '/assets/photos/Photo.png',
	},
	{
		name: 'Николай Т.',
		text: 'Супер отзывчивый и компетентный специалист.',
		avatar: '/assets/photos/Photo.png',
	},
];

const HomepageTestimonials = () => {
	const { theme } = useTheme();
	const isDark = theme === 'dark';

	return (
		<section className='py-16'>
			<div className='flex justify-center items-center mb-8 gap-2'>
				<h2 className='text-3xl font-bold text-center'>Отзывы клиентов</h2>
				<Image
					src={
						isDark
							? '/assets/photos/SmileyFaceWhite.png'
							: '/assets/photos/SmileyFaceBlack.png'
					}
					alt='Smiley Face'
					width={32}
					height={32}
				/>
			</div>

			<Marquee>
				<MarqueeContent pauseOnHover speed={50} gradient={false}>
					{testimonials.map((t, index) => (
						<MarqueeItem key={index} className='px-4'>
							<TestimonialsCard {...t} />
						</MarqueeItem>
					))}
				</MarqueeContent>
			</Marquee>
		</section>
	);
};

export default HomepageTestimonials;
