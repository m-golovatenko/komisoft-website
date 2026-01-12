import {FC} from 'react'
import styles from './About.module.css'
import classNames from 'classnames'
import {SECTIONS} from '@/const/sections'
import { ABOUT_TEXT } from '@/components/layout/About/about.content'

interface Props {}

export const About: FC<Props> = () => {
  return (
    <section className={styles.container} id={SECTIONS.about}>
      <div className={styles.textContainer}>
        <p className={classNames('p-40', styles.text)}>
          {ABOUT_TEXT.firstParagraph}
        </p>
        <p className={classNames('p-40', styles.text)}>
          {ABOUT_TEXT.secondParagraph.text}{' '}
          <span className={styles.brake}>
            {ABOUT_TEXT.secondParagraph.highlight}
          </span>
        </p>
      </div>
      <h2 className={styles.title}>
        {ABOUT_TEXT.title.start} <span>{ABOUT_TEXT.title.middle}</span>{' '}
        <span>{ABOUT_TEXT.title.end}</span>
      </h2>
    </section>
  )
}