import * as yup from 'yup'

export const ctaSchema = yup.object().shape({
  name: yup
    .string()
    .required('Введите имя')
    .min(2, 'Минимальное количество символов - 2'),

  description: yup
    .string()
    .required('Кратко опишите задачу или идею проекта')
    .min(10, 'Минимальное количество символов - 10'),

  email: yup.string().email('Некорректный email').optional(),
  phone: yup
    .string()
    .matches(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Телефон должен быть в формате +7 (XXX) XXX-XX-XX'
    )
    .optional(),
  telegram: yup
    .string()
    .matches(/^@([a-zA-Z0-9_]{5,32})$/, 'Неверный Telegram. Пример: @username')
    .optional()
})

export type SchemaType = yup.InferType<typeof ctaSchema>
