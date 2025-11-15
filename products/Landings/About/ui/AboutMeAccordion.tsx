'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export default function AboutMeAccordion() {
	return (
		<main className='min-h-screen bg-background'>
			<div className='mx-auto max-w-4xl px-8 py-12'>
				{/* Заголовок */}
				<div className='mb-8'>
					<h1 className='mb-6 font-serif text-5xl font-normal leading-tight tracking-tight text-foreground'>
						Привет!
						<br /> меня зовут Артем
					</h1>
					<p className='mb-6 font-sans text-lg leading-relaxed text-foreground/90'>
						Любитель городских пейзажей и рассказчик историй через объектив,
						живу в ярком сердце Риги.
					</p>
					<p className='mb-8 font-sans text-lg leading-relaxed text-foreground/90'>
						С более чем десятилетним опытом я запечатлеваю суть городской жизни,
						кадр за кадром.
					</p>
				</div>

				{/* Разделитель */}
				<div className='mb-6 border-t border-border' />

				{/* Аккордеон */}
				<Accordion
					type='single'
					collapsible
					defaultValue='my-journey'
					className='w-full'
				>
					<AccordionItem value='my-journey' className='border-b border-border'>
						<AccordionTrigger className='group py-6 hover:no-underline'>
							<div className='flex items-center justify-between w-full'>
								<h3 className='font-sans text-lg font-semibold text-foreground'>
									Моё путешествие
								</h3>
							</div>
						</AccordionTrigger>
						<AccordionContent className='pb-6 font-sans text-base text-foreground/90 leading-relaxed'>
							Моё увлечение фотографией началось на оживлённых улицах Риги,
							сначала как хобби, которое быстро превратилось в страсть. То, что
							начиналось как исследования по выходным, переросло в
							профессиональную деятельность, документируя детали городских
							пейзажей и истории людей, которые они хранят.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						value='my-philosophy'
						className='border-b border-border'
					>
						<AccordionTrigger className='py-6 hover:no-underline'>
							<h3 className='font-sans text-lg font-semibold text-foreground'>
								Моя философия
							</h3>
						</AccordionTrigger>
						<AccordionContent className='pb-6 font-sans text-base text-foreground/90 leading-relaxed'>
							Фотография — это умение запечатлеть моменты, которые раскрывают
							душу места. Каждый кадр рассказывает историю, и я верю в
							использование света, композиции и времени, чтобы создавать
							изображения, которые эмоционально откликаются у зрителей. Моя
							философия строится на аутентичности и поиске красоты в обыденном.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='accolades' className='border-b border-border'>
						<AccordionTrigger className='py-6 hover:no-underline'>
							<h3 className='font-sans text-lg font-semibold text-foreground'>
								Достижения и опыт
							</h3>
						</AccordionTrigger>
						<AccordionContent className='pb-6 font-sans text-base text-foreground/90 leading-relaxed'>
							За эти годы мои работы публиковались в престижных фотографических
							журналах и выставках по всей Европе. Я сотрудничал с ведущими
							брендами и туристическими изданиями, создавая знаковые кадры,
							которые нашли отклик у миллионов. Моё портфолио включает задания
							для крупных международных изданий и признание на нескольких
							фотографических конкурсах.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='beyond-lens' className='border-b-0'>
						<AccordionTrigger className='py-6 hover:no-underline'>
							<h3 className='font-sans text-lg font-semibold text-foreground'>
								За пределами объектива
							</h3>
						</AccordionTrigger>
						<AccordionContent className='pb-6 font-sans text-base text-foreground/90 leading-relaxed'>
							Помимо фотографии, я увлечён наставничеством начинающих фотографов
							и обменом знаниями о визуальном повествовании. Я провожу
							мастер-классы и воркшопы, помогая другим найти свой уникальный
							взгляд. Когда я не за камерой, меня можно найти исследующим новые
							районы, открывающим скрытые жемчужины или готовящим следующую
							выставку.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</main>
	);
}
