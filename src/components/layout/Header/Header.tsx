import { FC } from 'react'
import styles from './Header.module.css'
import classNames from 'classnames'

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}></div>
      </div>
      <nav className={styles.nav}>
        <a className={classNames(styles.link, 'p-16')}>О нас</a>
        <a className={classNames(styles.link, 'p-16')}>Проекты</a>
        <a className={classNames(styles.link, 'p-16')}>Услуги</a>
        <a className={classNames(styles.link, 'p-16')}>Карьера</a>
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