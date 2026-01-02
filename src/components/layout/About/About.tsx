import {FC} from 'react'
import styles from './About.module.css'
import classNames from 'classnames'
import {SECTIONS} from '@/const/sections'

interface Props {}

export const About: FC<Props> = () => {
  return (
    <section className={styles.container} id={SECTIONS.about}>
      <div className={styles.textContainer}>
        <p className={classNames('p-40', styles.text)}>
          Мы — амбициозная студия, объединяющая разработчиков и геймдев-команду.
          Создаём игры, веб-сервисы и сложные бизнес-системы, где важно внимание
          к деталям и результат.
        </p>
        <p className={classNames('p-40', styles.text)}>
          Работаем честно и вдумчиво: разбираемся  в задаче, ищем решение и
          доводим продукт до совершенства. <span className={styles.brake}>Ценим доверие, взаимовыручку  и
          профессиональный рост — без этого не бывает сильных проектов.</span>
        </p>
      </div>
      <h2 className={styles.title}>
        Мы растём, <span>потому что</span> <span>любим то,</span> что делаем.
      </h2>
    </section>
  )
}