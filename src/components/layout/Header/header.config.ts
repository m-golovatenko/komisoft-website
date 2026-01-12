import { SECTIONS } from '@/const/sections'

export const NAV_LINKS = [
  { label: 'О нас', section: SECTIONS.about },
  { label: 'Проекты', section: SECTIONS.projects },
  { label: 'Услуги', section: SECTIONS.services },
  { label: 'Карьера', section: SECTIONS.CTA }
] as const

export const LANGUAGES = ['RU', 'EN'] as const
