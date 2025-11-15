import AboutMeAccordion from './ui/AboutMeAccordion';
import Photo from './ui/Photo';

const AboutUs = () => {
	return (
		<div className='flex justify-center w-full py-16'>
			<div className='flex flex-col xl:flex-row items-start gap-16 max-w-6xl w-full'>
				{/* Левый блок — Аккордеон */}
				<div className='flex-1'>
					<AboutMeAccordion />
				</div>

				{/* Правый блок — Фото */}
				<div className='flex-1 flex justify-center mt-[-2rem] xl:mt-0'>
					<Photo />
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
