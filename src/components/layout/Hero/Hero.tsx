import { FC } from 'react'
import styles from './Hero.module.css'
import classNames from 'classnames'
import { Tag } from '@/components/ui'

interface Props {}

export const Hero: FC<Props> = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}></div>
        </div>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
          className={styles.elementTop}
        >
          <path d='m100,0H0v100C0,44.77,44.77,0,100,0Z' fill='#111113'></path>
        </svg>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
          className={styles.elementBottom}
        >
          <path d='m100,0H0v100C0,44.77,44.77,0,100,0Z' fill='#111113'></path>
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <div className={styles.header}>
            <Tag text={'Разработка ПО'} />
            <h1 className={styles.title}>Создаем Продукты, которые помнят</h1>
          </div>
          <p className={classNames(styles.description, 'p-24')}>
            Молодая, развивающаяся компания по разработке программного
            обеспечения
          </p>
        </div>
        <button className={styles.contactButton}>
          <p className={classNames('p-24', styles.buttonText)}>
            Обсудить проект
          </p>
        </button>
      </div>
    </section>
  )
}