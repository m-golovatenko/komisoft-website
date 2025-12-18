import { FC } from 'react'
import classNames from 'classnames'
import styles from './Services.module.css'
import { SECTIONS } from '@/const/sections'
import { Tag } from '@/components/ui'
import Code from '@/assets/img/icons/code.svg?react'
import Game from '@/assets/img/icons/game.svg?react'

interface Props {}

export const Services: FC<Props> = () => {
  const services = [
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
      icon: <Code />
    },
    {
      id: 2,
      title: 'Разработка Игр',
      stack: ['C#', 'Unity', 'Wwise', 'Spine', 'Photoshop', 'Premiere Pro'],
      description:
        'Работаем над геймплеем, визуальным стилем и интерфейсом, чтобы игра была понятной, интересной  и качественно реализованной.',
      icon: <Game />
    }
  ]
  return (
    <section
      className={classNames(styles.container, 'section')}
      id={SECTIONS.services}
    >
      <div className={styles.header}>
        <h2>Что мы делаем</h2>
        <p className={classNames('p-24', styles.description)}>
          Создаём продукты, которые работают для людей и бизнеса. От концепции
          до готового решения — наша команда сопровождает проект на каждом
          этапе.
        </p>
      </div>
      <ul className={styles.services}>
        {services.map(service => {
          return (
            <li key={service.id} className={styles.item}>
              <h3>{service.title}</h3>
              <div className={styles.tagsContainer}>
                <div className={styles.tags}>
                  {service.stack.map(tag => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.wrapper}>
                  <div className={styles.iconContainer}>
                    <div className={styles.icon}>{service.icon}</div>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 100 100'
                    className={styles.elementTop}
                  >
                    <path
                      d='M100 0 H0 V100'
                      fill='none'
                      stroke='#111113'
                      strokeWidth='6'
                    />

                    <path
                      d='M0 100 C0 44.77 44.77 0 100 0'
                      fill='none'
                      stroke='#383d40'
                      strokeWidth='3'
                    />
                  </svg>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 100 100'
                    className={styles.elementBottom}
                  >
                    <path
                      d='M100 0 H0 V100'
                      fill='none'
                      stroke='#111113'
                      strokeWidth='6'
                    />

                    <path
                      d='M0 100 C0 44.77 44.77 0 100 0'
                      fill='none'
                      stroke='#383d40'
                      strokeWidth='3'
                    />
                  </svg>
                </div>

                <div className={styles.hiddenBox} />

                <p className={classNames(styles.serviceDescription, 'p-24')}>
                  {service.description}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}