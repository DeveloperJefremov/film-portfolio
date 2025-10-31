'use client';

const MIN = -30;
const MAX = 30;
const RANGE = MAX - MIN; // 60

// Отступы: 0.5% слева + 0.5% справа = 1% всего
const EDGE_PADDING_PERCENT = 0.5;

export function RulerFooter() {
	const elements = [];
	for (let i = MIN; i <= MAX; i++) {
		const isMajor = i % 5 === 0;
		elements.push({
			pos: i,
			isMajor,
			label: isMajor ? i.toString() : null,
		});
	}

	return (
		<footer className='w-full bg-white text-black dark:bg-background dark:text-white'>
			{/* Убираем почти все отступы */}
			<div className='relative h-16 px-1'>
				<div className='relative h-full w-full'>
					{elements.map(({ pos, isMajor, label }) => {
						// Смещение от нуля: -30 → -50%, +30 → +50%
						const percentFromZero = (pos / RANGE) * 100;

						// Центрируем 0 → 50%
						const baseLeft = 50 + percentFromZero;

						// Сжимаем масштаб: оставляем 1% на отступы (по 0.5% с каждой стороны)
						const scale = 100 - EDGE_PADDING_PERCENT * 2; // 99%
						const finalLeft = EDGE_PADDING_PERCENT + (baseLeft / 100) * scale;

						return (
							<div
								key={pos}
								className='absolute flex flex-col items-center justify-end h-full'
								style={{
									left: `${finalLeft}%`,
									transform: 'translateX(-50%)',
								}}
							>
								{/* Деление */}
								<div
									className={
										isMajor
											? 'w-px h-8 bg-black dark:bg-white'
											: 'w-0.5 h-4 bg-gray-400 dark:bg-gray-500'
									}
								/>

								{/* Число (немного выше, чтобы не налезало) */}
								{label && (
									<div className='absolute top-0 left-1/2 -translate-x-1/2 -mt-1'>
										<span className='text-xs font-mono font-bold whitespace-nowrap'>
											{label}
										</span>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</footer>
	);
}
// 'use client';

// export function RulerFooter() {
// 	const elements = [];
// 	for (let i = -30; i <= 25; i++) {
// 		const isMajor = i % 5 === 0;
// 		elements.push({
// 			position: i,
// 			isMajor,
// 			label: isMajor ? i.toString() : null,
// 		});
// 	}

// 	return (
// 		<footer
// 			className={`
// 				w-full overflow-x-hidden
// 				bg-white text-black
// 				dark:bg-background dark:text-white

// 			`}
// 		>
// 			{/* Контейнер футера */}
// 			<div className='relative w-full h-16 px-12'>
// 				{/* Внутренний контейнер, где рисуются деления и числа */}
// 				<div className='relative w-full h-full'>
// 					{elements.map((element, index) => {
// 						const percentage = ((element.position + 30) / 55) * 100;

// 						return (
// 							<div
// 								key={index}
// 								className='absolute flex flex-col items-center justify-end h-full'
// 								style={{
// 									left: `${percentage}%`,
// 									transform: 'translateX(-50%)',
// 								}}
// 							>
// 								{/* Линия деления */}
// 								<div
// 									className={`

// 										${
// 											element.isMajor
// 												? 'w-[2px] h-8 bg-black dark:bg-white' // длинная линия
// 												: 'w-[1.5px] h-4 bg-gray-400 dark:bg-gray-500' // короткая линия
// 										}
// 									`}
// 								/>

// 								{/* Метка (число) */}
// 								{element.label && (
// 									<div className='absolute -top-1 left-1/2 transform -translate-x-1/2'>
// 										<span className='text-xs font-mono font-bold text-black dark:text-white whitespace-nowrap'>
// 											{element.label}
// 										</span>
// 									</div>
// 								)}
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }
