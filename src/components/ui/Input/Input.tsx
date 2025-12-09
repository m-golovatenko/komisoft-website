import classNames from 'classnames'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  error?: boolean
  helperText?: string
  inputClassName?: string
  containerClassName?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      error = false,
      helperText,
      inputClassName,
      containerClassName,
      disabled,
      ...props
    },
    ref
  ) => {
    const handleContainerClick = () => {
      if (!disabled && ref && typeof ref !== 'function') {
        ref.current?.focus()
      }
    }

    return (
      <div className={styles.wrapper} onClick={handleContainerClick}>
        <div className={styles.container}>
          <input
            ref={ref}
            disabled={disabled}
            className={classNames(
              styles.input,
              'p-24',
              error && 'input-field-error',
              inputClassName
            )}
            {...props}
          />

          {helperText && (
            <p
              className={classNames(
                'input-helper',
                error && 'input-helper-error'
              )}
            >
              {helperText}
            </p>
          )}
        </div>
      </div>
    )
  }
)
