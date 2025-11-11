'use client';

import ContactMeButton from '../components/ContactMeButton';
import HeaderTabs from '../components/HeaderTabs';
import Logo from '../components/Logo';
import ToggleThemeButton from '../components/ToggleThemeButton';

export default function LayoutHeader() {
	return (
		<header className='w-full bg-background '>
			<div className='flex items-center justify-between h-20 px-6 md:px-12'>
				{/* ЛОГО — К ЛЕВОМУ КРАЮ */}
				<div>
					<Logo />
				</div>

				{/* ЦЕНТР — HeaderTabs */}
				<div className='flex-1 flex justify-center'>
					<HeaderTabs />
				</div>

				{/* КНОПКИ — К ПРАВОМУ КРАЮ */}
				<div className='flex items-center gap-3 '>
					<ToggleThemeButton />
					<ContactMeButton />
				</div>
			</div>
		</header>
	);
}
