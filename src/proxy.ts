import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export default function proxy(request: Request) {
    console.log('PROXY HIT');
    return handleI18nRouting(request as never);
}

export const config = {
    matcher: ['/', '/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};