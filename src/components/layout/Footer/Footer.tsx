import { FC } from 'react'
import styles from './Footer.module.css'
import classNames from 'classnames'
import Arrow from '@/assets/img/icons/arrow.svg?react'

interface Props {}

export const Footer: FC<Props> = () => {
  const contacts = [
    {
      title: 'Steam',
      icon: Arrow,
      link: 'https://store.steampowered.com/app/2814880/Synchro/'
    },
    {
      title: 'Telegram',
      icon: Arrow,
      link: ''
    },
    {
      title: 'Vk',
      icon: Arrow,
      link: 'https://vk.com/komisoft11'
    }
  ]

  return (
    <footer className={styles.container}>
      <div className={styles.header}>
        <div className={styles.cta}>
          <p className={classNames('p-32')}>
            Давайте вместе <span>создавать будущее</span>
          </p>
          <h2>
            hello@<span>komisoft.com</span>
          </h2>
        </div>
        <ul className={styles.contacts}>
          {contacts.map(contact => (
            <li key={contact.title} className={styles.item}>
              <a
                className={classNames(styles.link, 'p-24')}
                target={'_blank'}
                href={contact.link}
              >
                <span className={styles.text}>{contact.title}</span>
                <contact.icon className={styles.icon} />
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