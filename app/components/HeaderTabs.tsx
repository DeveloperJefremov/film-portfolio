'use client';

import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MoonIcon, SunIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { paths } from '../shared/config/auth/routes';

// const tabs = ['Главная', 'Галерея', 'Цены', 'Обо мне', 'Важно', 'Отзывы'];
export const landingTabLabels: Record<keyof typeof paths.landing, string> = {
	home: 'Главная',
	gallery: 'Галерея',
	prices: 'Цены',
	about: 'Обо мне',
	important: 'Важно',
	reviews: 'Отзывы',
};
// Генерируем массив вкладок из paths.landing
const tabs = Object.entries(paths.landing).map(([key, path]) => ({
	name: landingTabLabels[key as keyof typeof landingTabLabels],
	path,
}));

export default function HeaderTabs() {
	const pathname = usePathname();

	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [hoverStyle, setHoverStyle] = useState({});
	const [activeStyle, setActiveStyle] = useState({ left: '0px', width: '0px' });
	const [isDarkMode, setIsDarkMode] = useState(false);
	const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

	// ✅ Определяем активный таб при загрузке и смене маршрута
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
			const overviewElement = tabRefs.current[0];
			if (overviewElement) {
				const { offsetLeft, offsetWidth } = overviewElement;
				setActiveStyle({
					left: `${offsetLeft}px`,
					width: `${offsetWidth}px`,
				});
			}
		});
	}, []);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		document.documentElement.classList.toggle('dark');
	};

	return (
		<header
			className={`flex justify-center items-center w-full ${
				isDarkMode ? 'dark bg-background' : ''
			}`}
		>
			<Card
				className={`w-full max-w-[1200px] h-[100px] border-none shadow-none relative flex items-center justify-center ${
					isDarkMode ? 'bg-background' : ''
				}`}
			>
				<Button
					variant='ghost'
					size='icon'
					className='absolute top-8 right-8'
					onClick={toggleDarkMode}
				>
					{isDarkMode ? (
						<SunIcon className='h-[1.2rem] w-[1.2rem]' />
					) : (
						<MoonIcon className='h-[1.2rem] w-[1.2rem]' />
					)}
				</Button>

				<CardContent className='p-0'>
					<div className='relative'>
						{/* Hover фон */}
						<div
							className='absolute h-[30px] transition-all duration-300 ease-out bg-[#0e0f1114] dark:bg-[#ffffff1a] rounded-[6px]'
							style={{
								...hoverStyle,
								opacity: hoveredIndex !== null ? 1 : 0,
							}}
						/>

						{/* Активная линия */}
						<div
							className='absolute bottom-[-6px] h-[2px] bg-[#0e0f11] dark:bg-white transition-all duration-300 ease-out'
							style={activeStyle}
						/>

						{/* Вкладки */}
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

// 'use client';

// import { useEffect, useRef, useState } from 'react';

// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { MoonIcon, SunIcon } from 'lucide-react';
// import { paths } from '../shared/config/auth/routes'

// // const tabs = ['Главная', 'Галерея', 'Цены', 'Обо мне', 'Важно', 'Отзывы'];
// export const landingTabLabels: Record<keyof typeof paths.landing, string> = {
// 	home: 'Главная',
// 	gallery: 'Галерея',
// 	prices: 'Цены',
// 	about: 'Обо мне',
// 	important: 'Важно',
// 	reviews: 'Отзывы',
// };
// // Генерируем массив вкладок из paths.landing
// const tabs = Object.entries(paths.landing).map(([key, path]) => ({
// 	name: landingTabLabels[key as keyof typeof landingTabLabels],
// 	path,
// }));

// export default function HeaderTabs() {
// 	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
// 	const [activeIndex, setActiveIndex] = useState(0);
// 	const [hoverStyle, setHoverStyle] = useState({});
// 	const [activeStyle, setActiveStyle] = useState({ left: '0px', width: '0px' });
// 	const [isDarkMode, setIsDarkMode] = useState(false);
// 	const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

// 	useEffect(() => {
// 		if (hoveredIndex !== null) {
// 			const hoveredElement = tabRefs.current[hoveredIndex];
// 			if (hoveredElement) {
// 				const { offsetLeft, offsetWidth } = hoveredElement;
// 				setHoverStyle({
// 					left: `${offsetLeft}px`,
// 					width: `${offsetWidth}px`,
// 				});
// 			}
// 		}
// 	}, [hoveredIndex]);

// 	useEffect(() => {
// 		const activeElement = tabRefs.current[activeIndex];
// 		if (activeElement) {
// 			const { offsetLeft, offsetWidth } = activeElement;
// 			setActiveStyle({
// 				left: `${offsetLeft}px`,
// 				width: `${offsetWidth}px`,
// 			});
// 		}
// 	}, [activeIndex]);

// 	useEffect(() => {
// 		requestAnimationFrame(() => {
// 			const overviewElement = tabRefs.current[0];
// 			if (overviewElement) {
// 				const { offsetLeft, offsetWidth } = overviewElement;
// 				setActiveStyle({
// 					left: `${offsetLeft}px`,
// 					width: `${offsetWidth}px`,
// 				});
// 			}
// 		});
// 	}, []);

// 	const toggleDarkMode = () => {
// 		setIsDarkMode(!isDarkMode);
// 		document.documentElement.classList.toggle('dark');
// 	};

// 	return (
// 		<header
// 			className={`flex justify-center items-center w-full  ${
// 				isDarkMode ? 'dark bg-background' : ''
// 			}`}
// 		>
// 			<Card
// 				className={`w-full max-w-[1200px] h-[100px] border-none shadow-none relative flex items-center justify-center ${
// 					isDarkMode ? 'bg-background' : ''
// 				}`}
// 			>
// 				<Button
// 					variant='ghost'
// 					size='icon'
// 					className='absolute top-8 right-8'
// 					onClick={toggleDarkMode}
// 				>
// 					{isDarkMode ? (
// 						<SunIcon className='h-[1.2rem] w-[1.2rem]' />
// 					) : (
// 						<MoonIcon className='h-[1.2rem] w-[1.2rem]' />
// 					)}
// 				</Button>
// 				<CardContent className='p-0'>
// 					<div className='relative'>
// 						{/* Hover Highlight */}
// 						<div
// 							className='absolute h-[30px] transition-all duration-300 ease-out bg-[#0e0f1114] dark:bg-[#ffffff1a] rounded-[6px] flex items-center'
// 							style={{
// 								...hoverStyle,
// 								opacity: hoveredIndex !== null ? 1 : 0,
// 							}}
// 						/>

// 						{/* Active Indicator */}
// 						<div
// 							className='absolute bottom-[-6px] h-[2px] bg-[#0e0f11] dark:bg-white transition-all duration-300 ease-out'
// 							style={activeStyle}
// 						/>

// 						{/* Tabs */}
// 						<div className='relative flex space-x-[6px] items-center'>
// 							{tabs.map((tab, index) => (
// 								<div
// 									key={index}
// 									ref={el => {
// 										tabRefs.current[index] = el;
// 									}}
// 									className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
// 										index === activeIndex
// 											? 'text-[#0e0e10] dark:text-white'
// 											: 'text-[#0e0f1199] dark:text-[#ffffff99]'
// 									}`}
// 									onMouseEnter={() => setHoveredIndex(index)}
// 									onMouseLeave={() => setHoveredIndex(null)}
// 									onClick={() => setActiveIndex(index)}
// 								>
// 									<div className='text-sm font-[var(--www-mattmannucci-me-geist-regular-font-family)] leading-5 whitespace-nowrap flex items-center justify-center h-full'>
// 										{tab}
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</CardContent>
// 			</Card>
// 		</header>
// 	);
// }
