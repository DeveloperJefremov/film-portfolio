// middleware.ts
import { publicRoutes } from '@/app/shared/config/auth/routes';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import 'server-only';

export default function middleware(req: NextRequest) {
	const { nextUrl } = req;
	const pathname = nextUrl.pathname;

	// Проверяем, является ли маршрут публичным
	const isPublicRoute = publicRoutes.includes(pathname);

	// Если это НЕ публичный маршрут — редиректим на логин
	if (!isPublicRoute) {
		const callbackUrl = encodeURIComponent(pathname + nextUrl.search);
		const loginUrl = new URL(
			`/authentication/login?callbackUrl=${callbackUrl}`,
			nextUrl
		);
		return NextResponse.redirect(loginUrl);
	}

	// Публичные маршруты — пропускаем
	return NextResponse.next();
}

// Применяем middleware ко всем страницам и API (кроме статики и _next)
export const config = {
	matcher: [
		'/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg).*)',
	],
};

// // middleware.ts
// import { publicRoutes } from '@/app/shared/config/auth/routes';
// import 'server-only';
// // import { auth } from './5-shared/config/auth/auth';

// export default auth(req => {
// 	const { nextUrl } = req;
// 	const isLoggedIn = !!req.auth;

// 	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

// 	// Если НЕ залогинен и НЕ на публичной странице
// 	if (!isLoggedIn && !isPublicRoute) {
// 		const callbackUrl = encodeURIComponent(nextUrl.pathname + nextUrl.search);
// 		return Response.redirect(
// 			new URL(`/authentication/login?callbackUrl=${callbackUrl}`, nextUrl)
// 		);
// 	}

// 	// Во всех остальных случаях — пропускаем
// 	return;
// });

// export const config = {
// 	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };
