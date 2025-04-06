import { useFormContext } from 'react-hook-form'
import useFormHook, { FormInputProps } from '../../hooks/useFormHook'
import { FormContainer } from '../../styles'
import { useTranslation } from 'react-i18next'

const Input = ({
  borderColor,
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
  const { registerOptions, stringValue, setStringValue } = useFormHook({
    type,
    borderColor,
    error,
    fieldName,
    validationMessage
  })
  const { register } = useFormContext()
  const { t } = useTranslation()

  return (
    <FormContainer borderColor={borderColor}>
      {type === 'textarea' ? (
        <textarea
          {...register(fieldName, registerOptions)}
          {...rest}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          onChange={(event) => setStringValue(event.target.value)}
          id={id}
        />
      ) : (
        <input
          type={type}
          {...register(fieldName, registerOptions)}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          onChange={(event) => setStringValue(event.target.value)}
          id={id}
        />
      )}
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

export default Input
