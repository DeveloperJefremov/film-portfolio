'use client';

import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/ui/shadcn-io/magnetic';
import { AnimatePresence, motion } from 'framer-motion';
import { GithubIcon, InstagramIcon, MailIcon, SendIcon } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { useClickAway } from '../shared/hooks/use-click-away';

interface SocialLink {
	id: string;
	icon: React.ElementType;
	href: string;
	color: string;
	label: string;
}
const socials: SocialLink[] = [
	{
		id: 'email',
		icon: MailIcon,
		href: 'mailto:your@email.com',
		color: '#6B7280',
		label: 'Email',
	},
	{
		id: 'github',
		icon: GithubIcon,
		href: 'https://github.com',
		color: '#333',
		label: 'GitHub',
	},
	{
		id: 'telegram',
		icon: SendIcon,
		href: 'https://t.me/yourusername',
		color: '#229ED9',
		label: 'Telegram',
	},
	{
		id: 'instagram',
		icon: InstagramIcon,
		href: 'https://instagram.com',
		color: '#E4405F',
		label: 'Instagram',
	},
];

const itemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.05,
			duration: 0.3,
			ease: 'easeOut',
		},
	}),
	hover: { scale: 1.05 },
	tap: { scale: 0.95 },
};

export default function ContactMeButton() {
	const [isOpen, setIsOpen] = React.useState(false);
	const dropdownRef = React.useRef<HTMLDivElement>(null);

	useClickAway(dropdownRef, () => setIsOpen(false));

	return (
		<div className='relative' ref={dropdownRef}>
			{/* Кнопка без Magnetic */}
			{/* <Magnetic> */}
			<Button
				variant='outline'
				size='sm'
				onClick={() => setIsOpen(!isOpen)}
				className='rounded-full px-4 py-2 flex items-center gap-2 bg-background hover:bg-accent/10'
				aria-expanded={isOpen}
				aria-haspopup='true'
			>
				<span>Мои контакты</span>
				<MailIcon className='w-4 h-4' />
			</Button>
			{/* </Magnetic> */}
			{/* Дропдаун — вертикальный список */}
			{/* Дропдаун — ровно под кнопкой, отцентрирован */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: -8 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: -8 }}
						transition={{ duration: 0.2, ease: 'easeOut' }}
						className='absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-card rounded-xl shadow-xl border border-border z-50 overflow-hidden'
						style={{ transformOrigin: 'top center' }}
					>
						<div className='py-2'>
							{socials.map((social, index) => (
								<motion.div
									key={social.id}
									custom={index}
									initial='hidden'
									animate='visible'
									whileHover='hover'
									whileTap='tap'
									// variants={itemVariants}
								>
									<Link
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 transition-colors group'
										onClick={() => setIsOpen(false)}
									>
										<social.icon
											className='w-5 h-5 transition-transform group-hover:scale-110'
											style={{ color: social.color }}
										/>
										<span>{social.label}</span>
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
// 'use client';

// import { Button } from '@/components/ui/button';
// import { Magnetic } from '@/components/ui/shadcn-io/magnetic';
// import { MailIcon } from 'lucide-react';
// import Link from 'next/link';

// export default function ContactMeButton() {
// 	return (
// 		<Magnetic>
// 			<Link href='/contact'>
// 				<Button
// 					variant='outline'
// 					size='sm'
// 					className='rounded-full px-4 py-2 flex items-center gap-2'
// 				>
// 					<span>Мои контакты</span>
// 					<MailIcon className='w-4 h-4' />
// 				</Button>
// 			</Link>
// 		</Magnetic>
// 	);
// }
