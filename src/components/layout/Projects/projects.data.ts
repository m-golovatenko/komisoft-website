interface Project {
  id: string
  title: string
  tags: string[]
  image: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Synchro',
    tags: ['GameDev'],
    image: ''
  },
  {
    id: '2',
    title: 'Атм альянс',
    tags: ['B2B', 'Enterprise', 'Fullstask'],
    image: ''
  },
  {
    id: '3',
    title: 'CLOUDMAPS',
    tags: ['Enterprise', 'Mobile'],
    image: ''
  },
  {
    id: '4',
    title: 'deeptasker',
    tags: ['Fullstack'],
    image: ''
  }
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
