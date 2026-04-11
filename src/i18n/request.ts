import { getRequestConfig } from 'next-intl/server'

const SUPPORTED_LOCALES = ['en', 'fr'] as const
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

export default getRequestConfig(async ({ locale }) => {
  // Ensure we only ever import known locale files.
  const actualLocale: SupportedLocale =
    locale && SUPPORTED_LOCALES.includes(locale as SupportedLocale)
      ? (locale as SupportedLocale)
      : 'en'

  const messages = (await import(`./messages/${actualLocale}.json`)).default

  return {
    locale: actualLocale,
    messages
  }
})
