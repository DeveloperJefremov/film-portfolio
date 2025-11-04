export const paths = {
	landing: {
		home: '/',
		gallery: '/gallery',
		prices: '/prices',
		about: '/about',
		important: '/important',
		reviews: '/reviews',
	},
	// auth: {
	// 	login: '/authentication/login',
	// 	register: '/authentication/register',
	// 	error: '/authentication/error',
	// 	reset: '/authentication/reset',
	// 	newPassword: '/authentication/new-password',
	// 	logout: '/authentication/logout',
	// 	newVerification: '/authentication/new-verification',
	// },
};

export const socialLinks = {
	linkedin: '#',
	instagram: '#',
	twitter: '#',
	facebook: '#',
	github: '#',
	youtube: '#',
};

/**
 * Defines the public routes that do not require authentication.
 */
export const publicRoutes: string[] = [
	paths.landing.about,
	paths.landing.gallery,
	paths.landing.home,
	paths.landing.important,
	paths.landing.prices,
	paths.landing.reviews,
];

// export const adminRoutes: string[] = [
// 	paths.landing.home,
// 	paths.landing.tests,
// 	paths.landing.contact,
// 	paths.landing.about,
// 	paths.landing.news,
// 	paths.landing.faq,
// 	paths.landing.blog,
// ];

/**
 * Defines the authentication routes. Which will be redirected to the default login redirect path if the user is already logged in.
 */
// export const authRoutes = [
// 	paths.auth.login,
// 	paths.auth.register,
// 	paths.auth.error,
// 	paths.auth.reset,
// 	paths.auth.newPassword,
// 	paths.auth.logout,
// ];

/**
 * The prefix for API authentication routes.
 */
export const apiAuthPrefix = '/api/auth/';

/**
 * The default login redirect path.
 */
// export const DEFAULT_LOGIN_REDIRECT = paths.timeTracker.base;
