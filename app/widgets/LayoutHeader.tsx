'use client';

import ContactMeButton from '../components/ContactMeButton';
import HeaderTabs from '../components/HeaderTabs';
import Logo from '../components/Logo';
import ToggleThemeButton from '../components/ToggleThemeButton';

export default function LayoutHeader() {
	return (
		<header className='w-full bg-background'>
			<div className='grid grid-cols-3 items-center h-20 px-6 md:px-12'>
				{/* ЛОГО */}
				<div className='flex justify-start'>
					<Logo />
				</div>

				{/* ЦЕНТР */}
				<div className='flex justify-center'>
					<HeaderTabs />
				</div>

				{/* КНОПКИ */}
				<div className='flex justify-end items-center gap-3'>
					<ToggleThemeButton />
					<ContactMeButton />
				</div>
			</div>
		</header>
	);
}
