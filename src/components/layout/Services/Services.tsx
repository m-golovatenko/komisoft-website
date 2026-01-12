import { FC } from 'react'
import classNames from 'classnames'
import styles from './Services.module.css'
import { SECTIONS } from '@/const/sections'
import { Tag } from '@/components/ui'
import { ServiceShape } from '@/components/layout/Services/ui/ServiceShape'
import { services } from '@/components/layout/Services/services.data'

interface Props {}

export const Services: FC<Props> = () => {
  return (
    <section className={'section'} id={SECTIONS.services}>
      <div className={styles.header}>
        <h2>Что мы делаем</h2>
        <p className={classNames('p-32', styles.description)}>
          Создаём продукты, которые работают для людей и бизнеса. От концепции
          до готового решения — наша команда сопровождает проект на каждом
          этапе.
        </p>
      </div>
      <ul className={styles.services}>
        {services.map(service => (
          <li key={service.id} className={styles.item}>
            <h3>{service.title}</h3>
            <div className={styles.tagsContainer}>
              <div className={styles.tags}>
                {service.stack.map(tag => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.wrapper}>
                <div className={styles.iconContainer}>
                  <service.icon className={styles.icon} />
                </div>
                <ServiceShape className={styles.elementTop} />
                <ServiceShape className={styles.elementBottom} />
              </div>

              <div className={styles.hiddenBox} />

              <p className={classNames(styles.serviceDescription, 'p-32')}>
                {service.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
