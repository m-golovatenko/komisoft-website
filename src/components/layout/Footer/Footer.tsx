import { FC } from 'react'
import styles from './Footer.module.css'
import classNames from 'classnames'

interface Props {}

export const Footer: FC<Props> = () => {
  const links = [
    {
      title: 'Steam',
      link: ''
    },
    {
      title: 'Telegram',
      link: ''
    },
    {
      title: 'Instagram',
      link: ''
    },
    {
      title: 'Vk',
      link: ''
    }
  ]

  return (
    <footer className={styles.container}>
      <div className={styles.header}>
        <div className={styles.cta}>
          <p className={classNames('p-24')}>
            Давайте вместе создавать будущее{' '}
          </p>
          <h2>komisoft@yandex.ru</h2>
        </div>
        <ul className={styles.contacts}>
          {links.map(link => (
            <li key={link.title} className={styles.item}>
              <a className={classNames(styles.link, 'p-24')}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <p className={classNames('p-24')}>Komisoft &copy;2025</p>
        <p className={classNames('p-24')}>Россия / Сыктывкар</p>
      </div>
    </footer>
  )
}
