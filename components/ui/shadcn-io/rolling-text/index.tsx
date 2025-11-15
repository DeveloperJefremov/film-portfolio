'use client';

import { motion } from 'motion/react';
import * as React from 'react';

const format = (c: string) => (c === ' ' ? '\u00A0' : c);

export function RollingText({
	text,
	trigger,
	onStateChange,
	...props
}: {
	text: string;
	trigger: boolean;
	onStateChange?: (state: 'idle' | 'animating' | 'finished') => void;
} & React.HTMLAttributes<HTMLSpanElement>) {
	const chars = React.useMemo(() => text.split(''), [text]);

	const [isAnimating, setIsAnimating] = React.useState(false);
	const [run, setRun] = React.useState(false);
	const [resetKey, setResetKey] = React.useState(0);

	// Храним предыдущее значение trigger
	const prevTrigger = React.useRef<boolean>(false);

	// Запускаем анимацию только при переходе false → true
	React.useEffect(() => {
		const isHoverStarted = trigger && !prevTrigger.current;

		if (isHoverStarted && !isAnimating) {
			setRun(true);
			setIsAnimating(true);
			onStateChange?.('animating');
		}

		prevTrigger.current = trigger;
	}, [trigger, isAnimating, onStateChange]);

	const handleLastComplete = (index: number) => {
		if (index === chars.length - 1) {
			onStateChange?.('finished');

			// завершаем анимацию
			setRun(false);
			setIsAnimating(false);

			// моментальный reset
			setResetKey(k => k + 1);
		}
	};

	return (
		<span {...props} key={resetKey}>
			{chars.map((char, i) => (
				<span key={i} className='relative inline-block perspective-[600px]'>
					<motion.span
						className='absolute inline-block backface-hidden origin-[50%_25%]'
						initial={{ rotateX: 0 }}
						animate={run ? { rotateX: 90 } : { rotateX: 0 }}
						transition={{ duration: 0.25, delay: i * 0.04 }}
						onAnimationComplete={() => handleLastComplete(i)}
					>
						{format(char)}
					</motion.span>

					<motion.span
						className='absolute inline-block backface-hidden origin-[50%_100%]'
						initial={{ rotateX: 90 }}
						animate={run ? { rotateX: 0 } : { rotateX: 90 }}
						transition={{ duration: 0.25, delay: i * 0.04 + 0.12 }}
					>
						{format(char)}
					</motion.span>

					<span className='invisible'>{format(char)}</span>
				</span>
			))}
		</span>
	);
}
