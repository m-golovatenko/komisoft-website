import { FC } from 'react'
import styles from './Footer.module.css'
import classNames from 'classnames'

interface Props {}

export const Footer: FC<Props> = () => {
  const contacts = [
    {
      title: 'Steam',
      link: 'https://store.steampowered.com/app/2814880/Synchro/'
    },
    {
      title: 'Telegram',
      link: ''
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/synchrobf/'
    },
    {
      title: 'Vk',
      link: 'https://vk.com/komisoft11'
    }
  ]

  return (
    <footer className={styles.container}>
      <div className={styles.header}>
        <div className={styles.cta}>
          <p className={classNames('p-32')}>
            Давайте вместе создавать будущее{' '}
          </p>
          <h2>komisoft@yandex.ru</h2>
        </div>
        <ul className={styles.contacts}>
          {contacts.map(contact => (
            <li key={contact.title} className={styles.item}>
              <a
                className={classNames(styles.link, 'p-24')}
                target={'_blank'}
                href={contact.link}
              >
                {contact.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <p className={classNames('p-32')}>Komisoft &copy;2025</p>
        <p className={classNames('p-32')}>Россия / Сыктывкар</p>
      </div>
    </footer>
  )
}