export default function Logo() {
	return (
		<div className='flex flex-col justify-center items-center text-center'>
			<h1 className='font-playfair text-lg md:text-2xl text-foreground tracking-wide font-light'>
				Artem Jefremov
			</h1>
			<p className='mt-1.5 md:mt-2 font-montserrat text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.3em] leading-none'>
				Street Photography
			</p>
		</div>
	);
}
