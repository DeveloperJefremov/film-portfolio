import HomeHeroSection from './ui/HomeHeroSection';
import HomePhotoSection from './ui/HomePhotoSection';
import HomepageTestimonials from './ui/Testimonials/HomepageTestimonials';

const Home = () => {
	return (
		<div>
			<div>
				<HomeHeroSection />
				<HomePhotoSection />
				<HomepageTestimonials />
			</div>
		</div>
	);
};

export default Home;
