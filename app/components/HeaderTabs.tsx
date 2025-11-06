'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { paths } from '../shared/config/auth/routes';

export const landingTabLabels: Record<keyof typeof paths.landing, string> = {
	home: 'Главная',
	gallery: 'Галерея',
	prices: 'Цены',
	about: 'Обо мне',
	important: 'Важно',
	reviews: 'Отзывы',
};

const tabs = Object.entries(paths.landing).map(([key, path]) => ({
	name: landingTabLabels[key as keyof typeof landingTabLabels],
	path,
}));

export default function HeaderTabs() {
	const pathname = usePathname();
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [hoverStyle, setHoverStyle] = useState({});
	const [activeStyle, setActiveStyle] = useState({ left: '0px', width: '0px' });
	const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const foundIndex = tabs.findIndex(tab => tab.path === pathname);
		setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
	}, [pathname]);

	useEffect(() => {
		if (hoveredIndex !== null) {
			const hoveredElement = tabRefs.current[hoveredIndex];
			if (hoveredElement) {
				const { offsetLeft, offsetWidth } = hoveredElement;
				setHoverStyle({
					left: `${offsetLeft}px`,
					width: `${offsetWidth}px`,
				});
			}
		}
	}, [hoveredIndex]);

	useEffect(() => {
		const activeElement = tabRefs.current[activeIndex];
		if (activeElement) {
			const { offsetLeft, offsetWidth } = activeElement;
			setActiveStyle({
				left: `${offsetLeft}px`,
				width: `${offsetWidth}px`,
			});
		}
	}, [activeIndex]);

	useEffect(() => {
		requestAnimationFrame(() => {
			const firstTab = tabRefs.current[0];
			if (firstTab) {
				const { offsetLeft, offsetWidth } = firstTab;
				setActiveStyle({
					left: `${offsetLeft}px`,
					width: `${offsetWidth}px`,
				});
			}
		});
	}, []);

	const toggleDarkMode = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<header className='flex justify-center items-center w-full'>
			<Card className='w-full max-w-[1200px] h-[100px] border-none shadow-none relative flex items-center justify-center bg-background'>
				{/* 🌙 Тема — рендерим только после монтирования */}
				{mounted && (
					<Button
						variant='ghost'
						size='icon'
						className='absolute top-8 right-8'
						onClick={toggleDarkMode}
					>
						{theme === 'dark' ? (
							<SunIcon className='h-[1.2rem] w-[1.2rem]' />
						) : (
							<MoonIcon className='h-[1.2rem] w-[1.2rem]' />
						)}
					</Button>
				)}

				<CardContent className='p-0'>
					<div className='relative'>
						<div
							className='absolute h-[30px] transition-all duration-300 ease-out bg-[#0e0f1114] dark:bg-[#ffffff1a] rounded-[6px]'
							style={{
								...hoverStyle,
								opacity: hoveredIndex !== null ? 1 : 0,
							}}
						/>
						<div
							className='absolute bottom-[-6px] h-[2px] bg-[#0e0f11] dark:bg-white transition-all duration-300 ease-out'
							style={activeStyle}
						/>
						<div className='relative flex space-x-[6px] items-center'>
							{tabs.map((tab, index) => (
								<Link
									key={tab.path}
									href={tab.path}
									prefetch={true}
									className='block'
								>
									<div
										ref={el => {
											tabRefs.current[index] = el;
										}}
										className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
											index === activeIndex
												? 'text-[#0e0e10] dark:text-white'
												: 'text-[#0e0f1199] dark:text-[#ffffff99]'
										}`}
										onMouseEnter={() => setHoveredIndex(index)}
										onMouseLeave={() => setHoveredIndex(null)}
										onClick={() => setActiveIndex(index)}
									>
										<div className='text-sm font-[var(--www-mattmannucci-me-geist-regular-font-family)] leading-5 whitespace-nowrap flex items-center justify-center h-full'>
											{tab.name}
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</header>
	);
}
