'use client';

import { Card, CardContent } from '@/components/ui/card';
import ContactMeButton from '../components/ContactMeButton';
import HeaderTabs from '../components/HeaderTabs';
import ToggleThemeButton from '../components/ToggleThemeButton';

export default function LayoutHeader() {
	return (
		<header className='flex justify-center items-center w-full'>
			<Card className='w-full max-w-[1200px] h-[100px] border-none shadow-none bg-background'>
				<div className='flex items-center justify-between w-full px-8'>
					{/* Левая часть — переключатель темы */}
					<ToggleThemeButton />

					{/* Центральная часть — вкладки */}
					<CardContent className='p-0'>
						<HeaderTabs />
					</CardContent>

					{/* Правая часть — кнопка контакта */}
					<ContactMeButton />
				</div>
			</Card>
		</header>
	);
}
