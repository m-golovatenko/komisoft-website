import { FC, SVGProps } from 'react'
import classNames from 'classnames'
import styles from './../Footer.module.css'

interface Props {
  title: string
  icon: FC<SVGProps<SVGSVGElement>>
  link: string
}

export const FooterContact: FC<Props> = ({ title, icon: Icon, link }) => (
  <li className={styles.item}>
    <a className={classNames(styles.link, 'p-24')} target='_blank' href={link}>
      <span className={styles.text}>{title}</span>
      <Icon className={styles.icon} />
    </a>
  </li>
)
