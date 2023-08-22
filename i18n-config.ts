export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'br']
} as const

export type Locale = (typeof i18n)['locales'][number]
