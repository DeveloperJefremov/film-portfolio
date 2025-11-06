'use client';

import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/ui/shadcn-io/magnetic';
import { MailIcon } from 'lucide-react';
import Link from 'next/link';

export default function ContactMeButton() {
	return (
		<Magnetic>
			<Link href='/contact'>
				<Button
					variant='outline'
					size='sm'
					className='rounded-full px-4 py-2 flex items-center gap-2'
				>
					<span>Contact Me</span>
					<MailIcon className='w-4 h-4' />
				</Button>
			</Link>
		</Magnetic>
	);
}
