import { FC, useState } from 'react'
import styles from './CTA.module.css'
import classNames from 'classnames'
import { Input } from '@/components/ui'

interface Props {}

type CTAOptions = 'email' | 'telegram' | 'phone'

export const CTA: FC<Props> = () => {
  const [formOption, setFormOption] = useState<CTAOptions>('email')
  const isActive = (type: CTAOptions) => formOption === type

  const OPTIONS: { label: string; value: CTAOptions }[] = [
    { label: 'Почта', value: 'email' },
    { label: 'Телефон', value: 'phone' },
    { label: 'Telegram', value: 'telegram' }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Обсудим проект</h2>
        <p className={classNames('p-24')}>
          Команда выполняет полный цикл: планирование, разработка, внедрение и
          поддержка. Оставьте заявку, чтобы обсудить задачу и получить понятный
          план работы.
        </p>
      </div>

      <div className={classNames(styles.wrapper, styles.form)}>
        <Input placeholder={'Имя'} />
        <div className={styles.switchWrapper}>
          <p className={classNames(styles.switchLabel, 'p-24')}>
            Как с вами связаться?
          </p>
          <div className={styles.switch}>
            {OPTIONS.map(({ label, value }) => (
              <p
                key={value}
                className={classNames(
                  styles.option,
                  isActive(value) && styles.active,
                  'p-24'
                )}
                onClick={() => setFormOption(value)}
              >
                {label}
              </p>
            ))}
          </div>
        </div>

        {formOption === 'email' && (
          <Input placeholder='Email' type='email' autoComplete='email' />
        )}

        {formOption === 'phone' && (
          <Input placeholder='Телефон' type='tel' autoComplete='tel' />
        )}

        {formOption === 'telegram' && <Input placeholder='@username' />}

        <textarea
          className={classNames(styles.textarea, 'p-24')}
          placeholder={'Описание проекта'}
        />
        <label htmlFor={'file'} className={classNames(styles.label, 'p-24')}>
          Прикрепите файл
        </label>
        <input type={'file'} id={'file'} className={styles.file} />
        <button className={styles.button}>
          <p className={classNames(styles.buttonText, 'p-24')}>Отправить</p>
        </button>
      </div>
    </div>
  )
}