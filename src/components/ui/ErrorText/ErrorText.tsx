import { FC } from 'react'
import classNames from 'classnames'
import styles from './ErrorText.module.css'

interface ErrorTextProps {
  helperText: string
}

export const ErrorText: FC<ErrorTextProps> = ({ helperText }) => {
  return <p className={classNames('p-16', styles.errorText)}>{helperText}</p>
}
