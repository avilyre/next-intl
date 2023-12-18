import { locales } from '@/i18n';
import createMiddleware from 'next-intl/middleware';
import { localePrefix } from './navigation';
 
export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en-us'
}); 

export const config = {
  matcher: ['/', '/(en\-us|pt\-br)/:path*']
};