import { FC } from 'react'
import styles from './Hero.module.css'
import classNames from 'classnames'
import { Tag } from '@/components/ui'
import ArrowDown from '@/assets/img/icons/arrow.svg?react'
import { HERO_CONTENT } from '@/components/layout/Hero/hero.config'
import { HeroShape } from '@/components/layout/Hero/ui/HeroShape'
import { SECTIONS } from '@/const/sections'

interface Props {}

export const Hero: FC<Props> = () => {
  return (
    <section className={styles.container} id='top'>
      <div className={styles.wrapper}>
        <div className={styles.elementWrapper}>
          <div className={styles.element}>
            <ArrowDown className={styles.arrow} />
          </div>
        </div>

        <HeroShape className={styles.elementTop} />
        <HeroShape className={styles.elementBottom} />
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.textWrapper}>
            <div className={styles.header}>
              <Tag text={HERO_CONTENT.tag} />
              <h1 className={styles.title}>{HERO_CONTENT.title}</h1>
            </div>
            <p className={classNames(styles.description, 'p-24')}>
              {HERO_CONTENT.description}
            </p>
          </div>
          <a className={styles.contactButton} href={`#${SECTIONS.CTA}`}>
            <p className={classNames('p-24', styles.buttonText)}>
              {HERO_CONTENT.cta}
            </p>
          </a>
        </div>

        <div className={styles.footer}>
          <div className={styles.hiddenBox} />

          <p className={classNames(styles.moreInfo, 'p-32')}>
            Прокрутите, чтобы узнать больше
          </p>
        </div>
      </div>
    </section>
  )
}
