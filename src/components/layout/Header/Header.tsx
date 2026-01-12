import { FC } from 'react'
import styles from './Header.module.css'
import classNames from 'classnames'
import Logo from '@/assets/img/logo.jpg'
import { LANGUAGES, NAV_LINKS } from '@/components/layout/Header/header.config'

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt='Komisoft logo' className={styles.logo} />
      </div>

      <nav className={styles.nav} aria-label='Основная навигация'>
        {NAV_LINKS.map(({ label, section }) => (
          <a
            key={section}
            href={`#${section}`}
            className={classNames(styles.link, 'p-16')}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className={styles.languages}>
        <div className={styles.switch}>
          {LANGUAGES.map(lang => (
            <p
              key={lang}
              className={classNames(
                styles.lang,
                'p-16',
                lang === 'RU' && styles.active
              )}
            >
              {lang}
            </p>
          ))}
        </div>
      </div>
    </header>
  )
}