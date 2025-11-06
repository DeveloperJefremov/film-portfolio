'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ToggleThemeButton() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	const toggleDarkMode = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<Button variant='ghost' size='icon' onClick={toggleDarkMode}>
			{theme === 'dark' ? (
				<SunIcon className='h-[1.2rem] w-[1.2rem]' />
			) : (
				<MoonIcon className='h-[1.2rem] w-[1.2rem]' />
			)}
		</Button>
	);
}
