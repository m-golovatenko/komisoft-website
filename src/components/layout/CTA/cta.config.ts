export type CTAOptions = 'email' | 'telegram' | 'phone'

export const CTA_OPTIONS: { label: string; value: CTAOptions }[] = [
  { label: 'Почта', value: 'email' },
  { label: 'Телефон', value: 'phone' },
  { label: 'Telegram', value: 'telegram' }
]

export const CTA_EMAIL: CTAOptions = 'email'
export const CTA_PHONE: CTAOptions = 'phone'
export const CTA_TELEGRAM: CTAOptions = 'telegram'
