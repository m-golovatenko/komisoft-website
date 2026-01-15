import { FC } from 'react'
import styles from './Footer.module.css'
import classNames from 'classnames'
import { contacts } from '@/components/layout/Footer/footer.config'
import { FooterContact } from '@/components/layout/Footer/ui/FooterContact'

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.header}>
        <div className={styles.cta}>
          <p className={classNames('p-32')}>
            Давайте вместе <span>создавать будущее</span>
          </p>
          <a
            href='mailto:hello@komisoft.com?subject=Обсуждение%20проекта&body=Здравствуйте!%0A%0AХочу%20обсудить%20проект.'
            aria-label='Написать на почту hello@komisoft.com'
            className={styles.mail}
          >
            <h2>
              hello@<span>komisoft.com</span>
            </h2>
          </a>
        </div>
        <ul className={styles.contacts}>
          {contacts.map(contact => (
            <FooterContact key={contact.title} {...contact} />
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <p className={classNames('p-32')}>
          Komisoft &copy;{new Date().getFullYear()}
        </p>
        <p className={classNames('p-32')}>Россия / Сыктывкар</p>
      </div>
    </footer>
  )
}
