import { FC } from 'react'
import styles from './Header.module.css'
import classNames from 'classnames'
import { SECTIONS } from '@/const/sections'

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}></div>
      </div>
      <nav className={styles.nav}>
        <a
          className={classNames(styles.link, 'p-16')}
          href={`#${SECTIONS.about}`}
        >
          О нас
        </a>
        <a
          className={classNames(styles.link, 'p-16')}
          href={`#${SECTIONS.projects}`}
        >
          Проекты
        </a>
        <a
          className={classNames(styles.link, 'p-16')}
          href={`#${SECTIONS.services}`}
        >
          Услуги
        </a>
        <a
          className={classNames(styles.link, 'p-16')}
          href={`#${SECTIONS.CTA}`}
        >
          Карьера
        </a>
      </nav>
      <div className={styles.languages}>
        <div className={styles.switch}>
          <p className={classNames(styles.lang, 'p-16', styles.active)}>RU</p>
          <p className={classNames(styles.lang, 'p-16')}>EN</p>
        </div>
      </div>
    </header>
  )
}