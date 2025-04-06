import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export type FormProps = {
  borderColor: string
  minLength?: number
  maxLength?: number
  validationMessage: string
  error: string
  type: string
  fieldName: string
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>

export type FormInputProps = {
  placeholder?: string
} & FormProps

export type FormInputWithLabelProps = {
  label: string
} & FormProps

const useFormHook = ({
  fieldName,
  validationMessage,
  minLength,
  maxLength
}: FormProps) => {
  const { t } = useTranslation()
  const [stringValue, setStringValue] = useState('')

  const registerOptions = {
    required: validationMessage,
    ...(fieldName === 'email' && {
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: t('validationMessage.email')
      }
    }),
    ...(minLength && {
      minLength: {
        value: minLength,
        message: t('validationMessage.minLength', { min: minLength })
      }
    }),
    ...(maxLength && {
      maxLength: {
        value: maxLength,
        message: t('validationMessage.maxLength', { max: maxLength })
      }
    })
  }

  return { registerOptions, stringValue, setStringValue }
}

export default useFormHook
