import { useFormContext } from 'react-hook-form'
import { FormContainer } from './styles'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export type FormGroupProps = {
  label?: string
  validationMessage?: string
  error?: string
  type: string
  fieldName?: string
  placeholder?: string
  borderColor?: string
  minLength?: number
  maxLength?: number
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>

const FormGroup = ({
  label,
  validationMessage,
  error,
  type,
  fieldName,
  placeholder,
  borderColor,
  minLength,
  maxLength,
  ...rest
}: FormGroupProps) => {
  const { register } = useFormContext()
  const { t } = useTranslation()

  const [stringValue, setStringValue] = useState('')

  if (!fieldName) return null

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

  return (
    <FormContainer borderColor={borderColor}>
      <label>
        {!placeholder && label}
        {type === 'textarea' ? (
          <textarea
            {...register(fieldName, registerOptions)}
            {...rest}
            placeholder={placeholder || ''}
            minLength={minLength}
            maxLength={maxLength}
            onChange={(event) => setStringValue(event.target.value)}
          />
        ) : (
          <input
            type={type}
            {...register(fieldName, registerOptions)}
            placeholder={placeholder || ''}
            minLength={minLength}
            maxLength={maxLength}
            onChange={(event) => setStringValue(event.target.value)}
          />
        )}
      </label>
      {minLength &&
        maxLength &&
        stringValue.length >= minLength &&
        stringValue.length < maxLength && (
          <small>
            {t('validationMessage.remainingCharacters', {
              count: maxLength - stringValue.length
            })}
          </small>
        )}
      {Boolean(error) && stringValue.length === 0 && (
        <small>{t('validationMessage.required')}</small>
      )}
      {Boolean(error) && minLength && stringValue.length < minLength && (
        <small>
          <br />
          {t('validationMessage.minLength', { min: minLength })}
        </small>
      )}
      {Boolean(error) && maxLength && stringValue.length === maxLength && (
        <small>{t('validationMessage.maxLength', { max: maxLength })}</small>
      )}
    </FormContainer>
  )
}

export default FormGroup
