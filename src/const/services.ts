import Code from '@/assets/img/icons/code.svg?react'
import Game from '@/assets/img/icons/game.svg?react'

export const services = [
  {
    id: 1,
    title: 'Веб-сервисы',
    stack: [
      'React',
      'TypeScript',
      'PHP',
      'RabbitMQ',
      'Redis',
      'MySql',
      'Postgres'
    ],
    description:
      'Работаем с серверной и клиентской частью, настраиваем базы данных и API, создаём удобные интерфейсы и сопровождаем продукт после релиза.',
    icon: Code
  },
  {
    id: 2,
    title: 'Разработка Игр',
    stack: ['C#', 'Unity', 'Wwise', 'Spine', 'Photoshop', 'Premiere Pro'],
    description:
      'Работаем над геймплеем, визуальным стилем и интерфейсом, чтобы игра была понятной, интересной  и качественно реализованной.',
    icon: Game
  }
]