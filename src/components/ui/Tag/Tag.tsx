import { FC } from 'react'
import styles from './Tag.module.css'
import classNames from 'classnames'

interface Props {
  text: string
  isSmall?: boolean
}

export const Tag: FC<Props> = ({ text, isSmall = false }) => {
  return (
    <div
      className={classNames(styles.container, isSmall && styles.containerSmall)}
    >
      <p className={classNames(isSmall ? 'p-16' : 'p-20', styles.text)}>
        {text}
      </p>
    </div>
  )
}