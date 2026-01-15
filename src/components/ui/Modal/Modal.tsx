import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './Modal.module.css'
import classNames from 'classnames'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
  className?: string
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [isOpen])

  if (!isVisible) return null

  return (
    <div
      className={classNames(styles.overlay, isOpen && styles.open)}
      onClick={onClose}
    >
      <div
        className={classNames(styles.modal, isOpen && styles.open, className)}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
