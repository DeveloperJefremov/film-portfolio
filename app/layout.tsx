import type { Metadata } from 'next';
import { RulerFooter } from './components/RulerFooter';
import { lora, montserrat, playfair, playfairItalic } from './fonts';
import './globals.css';
import { ThemeProvider } from './shared/providers/ThemeProvider';
import LayoutHeader from './widgets/LayoutHeader';

export const metadata: Metadata = {
	title: 'Artem Jefremov Photography',
	description: 'Street Photography | Riga, Latvia',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`
          min-h-screen flex flex-col bg-background text-foreground
       ${montserrat.variable} ${playfair.variable} ${lora.variable} ${playfairItalic.variable}
        `}
			>
				{/* === Оборачиваем всё приложение в ThemeProvider === */}
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{/* <HeaderTabs /> */}
					<LayoutHeader />
					{/* Основной контент страницы */}
					<main className='flex-1'>{children}</main>
					{/* Футер */}
					<RulerFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
