'use client';

import Image from 'next/image';
interface TestimonialsCardProps {
	name: string;
	text: string;
	avatar: string;
	title?: string;
}

const TestimonialsCard = ({
	name,
	text,
	avatar,
	title,
}: TestimonialsCardProps) => {
	return (
		<div className='border border-black p-8 w-80 flex flex-col h-full'>
			<p className='text-base leading-relaxed mb-6 flex-grow'>"{text}"</p>

			<div className='flex items-center gap-3 mt-4'>
				<Image
					src={avatar || '/placeholder.svg'}
					alt={name}
					width={40}
					height={40}
					className='rounded-full object-cover flex-shrink-0'
				/>
				<div>
					<p className='font-semibold text-sm'>{name},</p>
					{title && <p className='text-xs text-gray-600'>{title}</p>}
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard;
