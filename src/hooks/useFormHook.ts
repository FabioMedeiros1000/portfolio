import { useTranslation } from 'react-i18next'

export type FormProps = {
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

  // Traduz na renderização para acompanhar a troca de idioma
  const getErrorMessage = (errorType?: string) => {
    switch (errorType) {
      case 'pattern':
        return t('validationMessage.email')
      case 'minLength':
        return t('validationMessage.minLength', { min: minLength })
      case 'maxLength':
        return t('validationMessage.maxLength', { max: maxLength })
      default:
        return validationMessage
    }
  }

  return { registerOptions, getErrorMessage }
}

export default useFormHook
