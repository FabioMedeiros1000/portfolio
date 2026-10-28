import { useFormContext, useWatch } from 'react-hook-form'
import useFormHook, { FormInputProps } from '../../hooks/useFormHook'
import { FormContainer } from '../../styles'
import { useTranslation } from 'react-i18next'

const Input = ({
  type,
  placeholder,
  fieldName,
  minLength,
  maxLength,
  error,
  validationMessage,
  id,
  ...rest
}: FormInputProps) => {
  const { registerOptions, getErrorMessage } = useFormHook({
    type,
    error,
    fieldName,
    validationMessage,
    minLength,
    maxLength
  })
  const { register, getFieldState, formState } = useFormContext()
  const errorType = getFieldState(fieldName, formState).error?.type
  const stringValue: string = useWatch({ name: fieldName }) ?? ''
  const { t } = useTranslation()

  return (
    <FormContainer $hasError={Boolean(error)}>
      {type === 'textarea' ? (
        <textarea
          {...register(fieldName, registerOptions)}
          {...rest}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          id={id}
        />
      ) : (
        <input
          type={type}
          {...register(fieldName, registerOptions)}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          id={id}
        />
      )}
      {error ? (
        <small>{getErrorMessage(errorType)}</small>
      ) : (
        minLength &&
        maxLength &&
        stringValue.length >= minLength &&
        stringValue.length < maxLength && (
          <small>
            {t('validationMessage.remainingCharacters', {
              count: maxLength - stringValue.length
            })}
          </small>
        )
      )}
    </FormContainer>
  )
}

export default Input
