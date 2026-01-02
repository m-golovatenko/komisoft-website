interface Project {
  id: string
  title: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Synchro',
    tags: ['GameDev']
  },
  {
    id: '2',
    title: 'Атм альянс',
    tags: ['B2B', 'Enterprise', 'Fullstask']
  },
  {
    id: '3',
    title: 'CLOUDMAPS',
    tags: ['Enterprise', 'Mobile']
  },
  {
    id: '4',
    title: 'deeptasker',
    tags: ['Fullstack']
  },
  // {
  //   id: '5',
  //   title: 'Сушиман',
  //   tags: ['B2B']
  // },
  // {
  //   id: '6',
  //   title: 'Cобрать русь',
  //   tags: ['Enterprise', 'Mobile']
  // }
]