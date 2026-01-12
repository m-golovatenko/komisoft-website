import { FC } from 'react'
import styles from './Hero.module.css'
import classNames from 'classnames'
import { Tag } from '@/components/ui'
import ArrowDown from '@/assets/img/icons/arrow.svg?react'
import { HERO_CONTENT } from '@/components/layout/Hero/hero.config'
import { HeroShape } from '@/components/layout/Hero/ui/HeroShape'

interface Props {}

export const Hero: FC<Props> = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <ArrowDown />
          </div>
        </div>

        <HeroShape className={styles.elementTop} />
        <HeroShape className={styles.elementBottom} />
      </div>

      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <div className={styles.header}>
            <Tag text={HERO_CONTENT.tag} />
            <h1 className={styles.title}>{HERO_CONTENT.title}</h1>
          </div>
          <p className={classNames(styles.description, 'p-24')}>
            {HERO_CONTENT.description}
          </p>
        </div>
        <button className={styles.contactButton}>
          <p className={classNames('p-24', styles.buttonText)}>
            {HERO_CONTENT.cta}
          </p>
        </button>
      </div>
    </section>
  )
}