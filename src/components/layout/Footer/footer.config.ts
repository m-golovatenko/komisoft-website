import Arrow from '@/assets/img/icons/arrow.svg?react'
import { FC, SVGProps } from 'react'

export interface Contact {
  title: string
  icon: FC<SVGProps<SVGSVGElement>>
  link: string
}

export const contacts: Contact[] = [
  {
    title: 'Steam',
    icon: Arrow,
    link: 'https://store.steampowered.com/app/2814880/Synchro/'
  },
  { title: 'Vk', icon: Arrow, link: 'https://vk.com/komisoft11' }
]
