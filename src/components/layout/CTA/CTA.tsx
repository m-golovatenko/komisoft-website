import { FC, useRef, useState } from 'react'
import styles from './CTA.module.css'
import classNames from 'classnames'
import { Input } from '@/components/ui'
import { SECTIONS } from '@/const/sections'
import { IMaskInput } from 'react-imask'
import { useForm, Controller } from 'react-hook-form'


interface Props {}

type CTAOptions = 'email' | 'telegram' | 'phone'

interface FormValues {
  name: string
  email?: string
  phone?: string
  telegram?: string
  description: string
  files: FileList
}


export const CTA: FC<Props> = () => {
  const [formOption, setFormOption] = useState<CTAOptions>('email')
  const isActive = (type: CTAOptions) => formOption === type
  const [telegram, setTelegram] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const { register, control, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('description', data.description)

    const contact =
      formOption === 'email'
        ? (data.email ?? '')
        : formOption === 'phone'
          ? (data.phone ?? '')
          : (data.telegram ?? '')

    if (contact) {
      formData.append('contact', contact)
    }

    files.forEach(file => {
      formData.append('files', file)
    })

    const payload = {
      name: data.name,
      contact,
      description: data.description,
      files
    }

    console.log(payload)
  }


  const OPTIONS: { label: string; value: CTAOptions }[] = [
    { label: 'Почта', value: 'email' },
    { label: 'Телефон', value: 'phone' },
    { label: 'Telegram', value: 'telegram' }
  ]
  return (
    <section
      className={classNames(styles.container, 'section')}
      id={SECTIONS.CTA}
    >
      <div className={styles.wrapper}>
        <h2>Обсудим проект</h2>
        <p className={classNames('p-32')}>
          Команда выполняет полный цикл: планирование, разработка, внедрение и
          поддержка. Оставьте заявку, чтобы обсудить задачу и получить понятный
          план работы.
        </p>
      </div>

      <form
        className={classNames(styles.wrapper, styles.form)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input placeholder={'Имя'} {...register('name', { required: true })} />
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
          <Input
            placeholder='Email'
            type='email'
            autoComplete='email'
            {...register('email', { required: true })}
          />
        )}

        {formOption === 'phone' && (
          <Controller
            name='phone'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <IMaskInput
                {...field}
                mask='+7 (000) 000-00-00'
                placeholder='Телефон'
                className={classNames(styles.phone, 'p-24')}
              />
            )}
          />
        )}

        {formOption === 'telegram' && (
          <Controller
            name='telegram'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder='@username'
                value={telegram}
                onChange={e => {
                  const raw = e.target.value.replace(/^@+/, '')
                  const value = raw ? `@${raw}` : ''
                  setTelegram(value)
                  field.onChange(value)
                }}
              />
            )}
          />
        )}

        <textarea
          className={classNames(styles.textarea, 'p-24')}
          placeholder={'Описание проекта'}
          {...register('description')}
        />
        <label htmlFor={'file'} className={styles.label}>
          <span className={'p-24'}>Прикрепите файл</span>
          <span className={classNames(styles.sublabel, 'p-16')}>
            PDF · DOCX · до 50 МБ
          </span>
        </label>
        <input
          type='file'
          id='file'
          multiple
          accept='.pdf,.doc,.docx'
          className={styles.file}
          onChange={e => {
            if (!e.target.files) return
            const newFiles = Array.from(e.target.files)
            setFiles(prev => [...prev, ...newFiles])
            e.target.value = ''
          }}
        />
        {files.length > 0 && (
          <ul className={styles.fileList}>
            {files.map((file, index) => (
              <li key={`${file.name}-${index}`} className={styles.fileItem}>
                <span className={styles.fileIcon}>PDF</span>
                <span className={styles.fileName}>{file.name}</span>
                <button
                  type='button'
                  className={styles.remove}
                  onClick={() =>
                    setFiles(prev => prev.filter((_, i) => i !== index))
                  }
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
        <button className={styles.button}>
          <p className={classNames(styles.buttonText, 'p-24')}>Отправить</p>
        </button>
      </form>
    </section>
  )
}