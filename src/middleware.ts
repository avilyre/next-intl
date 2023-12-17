import { locales } from '@/i18n';
import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales,
  defaultLocale: 'en-us'
});
 
export const config = {
  matcher: ['/', '/(en\-us|pt\-br)/:path*']
};