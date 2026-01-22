import { useState } from 'react'
import styles from './CTA.module.css'
import classNames from 'classnames'
import { ErrorText, Input } from '@/components/ui'
import { SECTIONS } from '@/const/sections'
import { Controller, useForm } from 'react-hook-form'
import { CTA_EMAIL, CTA_OPTIONS, CTA_PHONE, CTA_TELEGRAM, CTAOptions } from '@/components/layout/CTA/cta.config'
import { yupResolver } from '@hookform/resolvers/yup'
import { ctaSchema, SchemaType } from '@/components/layout/CTA/cta.schema'
import { Files } from '@/components/layout/CTA/ui/FileList'
import { IMaskInput } from 'react-imask'

export const CTA = () => {
  const [formOption, setFormOption] = useState<CTAOptions>(CTA_EMAIL)
  const isActive = (type: CTAOptions) => formOption === type
  const [telegram, setTelegram] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    clearErrors,
    reset,
    getValues
  } = useForm({
    resolver: yupResolver(ctaSchema),
    mode: 'all'
  })

  const onSubmit = (data: SchemaType) => {
    let contact =
      formOption === CTA_EMAIL
        ? (data.email ?? '')
        : formOption === CTA_PHONE
          ? (data.phone ?? '')
          : (data.telegram ?? '')

    if (formOption === CTA_PHONE && contact) {
      contact = '+' + contact.replace(/\D/g, '')
    }

    if (!contact) {
      setError(
        formOption as keyof SchemaType,
        { message: 'Укажите хотя бы один способ связи' },
        { shouldFocus: true }
      )
      return
    } else {
      clearErrors(formOption as keyof SchemaType)
    }

    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('description', data.description)

    if (contact) {
      formData.append('contact', contact)
    }

    if (files.length) {
      files.forEach(file => {
        formData.append('files', file)
      })
    }

    const payload = {
      name: data.name,
      contact,
      description: data.description,
      files
    }

    console.log(payload)
  }

  const handleSwitchActive = (value: CTAOptions) => {
    clearErrors(formOption as keyof SchemaType)

    reset(
      { ...getValues(), [formOption]: '' },
      { keepErrors: true, keepDirty: false }
    )

    setFormOption(value)
  }

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
        <Input
          placeholder={'Имя'}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
          {...register('name')}
        />
        <div className={styles.switchWrapper}>
          <p className={classNames(styles.switchLabel, 'p-24')}>
            Как с вами связаться?
          </p>
          <div className={styles.switch}>
            {CTA_OPTIONS.map(({ label, value }) => (
              <p
                key={value}
                className={classNames(
                  styles.option,
                  isActive(value) && styles.active,
                  'p-24'
                )}
                onClick={() => handleSwitchActive(value)}
              >
                {label}
              </p>
            ))}
          </div>
        </div>

        {formOption === CTA_EMAIL && (
          <Input
            placeholder='Email'
            type='email'
            autoComplete='email'
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            {...register(CTA_EMAIL)}
          />
        )}

        {formOption === CTA_PHONE && (
          <Controller
            name={CTA_PHONE}
            control={control}
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
        {formOption === CTA_PHONE && errors.phone?.message && (
          <ErrorText helperText={errors.phone.message} />
        )}

        {formOption === CTA_TELEGRAM && (
          <Controller
            name={CTA_TELEGRAM}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder='@username'
                value={telegram}
                error={Boolean(formOption === CTA_TELEGRAM && errors.telegram)}
                helperText={errors.telegram?.message}
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

        <div className={styles.textareaContainer}>
          <textarea
            className={classNames(
              styles.textarea,
              'p-24',
              errors.description && styles.errors
            )}
            placeholder={'Описание проекта'}
            {...register('description')}
          />
          {errors.description && (
            <ErrorText helperText={errors.description.message ?? ''} />
          )}
        </div>

        <div className={styles.fileInputContainer}>
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
            <Files
              files={files}
              removeFile={index =>
                setFiles(prev => prev.filter((_, i) => i !== index))
              }
            />
          )}
        </div>

        <button className={styles.button} disabled={!isValid}>
          <p className={classNames(styles.buttonText, 'p-24')}>Отправить</p>
        </button>
      </form>
    </section>
  )
}
