interface Gallery {
  id: string
  src: string
  alt: string
}

interface Meta {
  id: string
  label: string
  value: string
}

interface Summary {
  description: string
  img?: string
  cta?: {
    label: string
    url: string
  }
}

export interface Project {
  id: number
  title: string
  tags: string[]
  mainImg: string
  meta?: Meta[]
  gallery?: Gallery[]
  summary?: Summary
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Synchro',
    tags: ['GameDev'],
    mainImg: '',
    meta: [
      {
        id: 'developer',
        label: 'Разработчик / Издатель',
        value: 'KOMISOFT'
      },
      {
        id: 'genre',
        label: 'Жанр',
        value: 'GAMEDEV'
      },
      {
        id: 'releaseDate',
        label: 'Дата',
        value: 'TBA'
      }
    ],
    summary: {
      description:
        'Synchro — пошаговая RPG о борьбе со зловещей корпорацией, ставящей бесчеловечные эксперименты над людьми. Вы — молодой лидер сопротивления, чьи родители погибли от рук жадных технократов. Собирайте команду из обычных людей, в которых дремлют истинные герои. Исследуйте мрачные закоулки мрачного мегаполиса и сражайтесь с андроидами, мафией и жуткими мутантами по правилам синхронной боевой системы.',
      img: 'аышуащшу',
      cta: {
        label: 'Страница в Steam',
        url: ''
      }
    },
    gallery: [
      { id: 'image-1', alt: 'ksiof', src: 'dkfosief' },
      { id: 'image-2', alt: 'ksiof', src: 'dkfosief' },
      { id: 'image-3', alt: 'ksiof', src: 'dkfosief' }
    ]
  },
  {
    id: 2,
    title: 'Атм альянс',
    tags: ['B2B', 'Enterprise', 'Fullstask'],
    mainImg: ''
  },
  {
    id: 3,
    title: 'CLOUDMAPS',
    tags: ['Enterprise', 'Mobile'],
    mainImg: ''
  },
  {
    id: 4,
    title: 'deeptasker',
    tags: ['Fullstack'],
    mainImg: ''
  }
]
