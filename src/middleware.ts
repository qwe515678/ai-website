import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ['ru', 'en', 'de'],
    defaultLocale: 'ru',
    localeDetection: true
})


export const config = {
    matcher: ['/', '/(ru|en|de)/:path*']
} 