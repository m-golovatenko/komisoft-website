import { FC } from 'react'
import classNames from 'classnames'
import styles from './Services.module.css'

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
      icon: null
    },
    {
      id: 2,
      title: 'Разработка Игр',
      stack: ['C#', 'Unity', 'Wwise', 'Spine', 'Photoshop', 'Premiere Pro'],
      description:
        'Работаем над геймплеем, визуальным стилем и интерфейсом, чтобы игра была понятной, интересной  и качественно реализованной.',
      icon: null
    }
  ]
  return (
    <section className={classNames(styles.container, 'section')}>
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
                    <p key={tag} className={styles.tag}>
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.iconContainer}>
                  <div className={styles.icon}></div>
                </div>
                <p className={styles.serviceDescription}>
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