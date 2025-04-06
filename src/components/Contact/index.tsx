import { useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Button from '../Button'
import Section from '../Section'
import ModalMessage from '../ModalMessage'
import Loader from '../Loader'

import { ModalHandles } from '../Modal'
import { sendEmail } from '../../services/emailService'

import { GlobalContainer, TitleGlobal } from '../../styles'
import { colors } from '../../variables'
import Input from '../Input'
import InputWithLabel from '../InputWithLabel'

export type FormType = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const modalRef = useRef<ModalHandles>(null)
  const { t } = useTranslation()

  const methods = useForm<FormType>()

  const {
    handleSubmit,
    formState: { errors }
  } = methods

  const [isSendSuccess, setIsSendSuccess] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: FormType): Promise<void> => {
    setIsLoading(true)

    try {
      await sendEmail(data)
      setIsSendSuccess(true)
      methods.reset()
    } catch (error) {
      setIsSendSuccess(false)
    } finally {
      setIsLoading(false)
      modalRef.current?.openModal()
    }
  }

  const handleModalClose = () => {
    setIsSendSuccess(null)
  }

  return (
    <Section backgroundColor="white" id="contact">
      <>
        <GlobalContainer>
          <TitleGlobal>{t('contact.title')}</TitleGlobal>
          <p>{t('contact.description')}</p>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid-form">
                <div className="two-columns">
                  <InputWithLabel
                    label={t('contact.input.name')}
                    validationMessage={t('validationMessage.required')}
                    type="text"
                    fieldName="name"
                    id="name"
                    error={errors.name?.message as string}
                    minLength={5}
                    borderColor={colors.red}
                  />
                  <InputWithLabel
                    label={t('contact.input.email')}
                    validationMessage={t('validationMessage.required')}
                    type="email"
                    fieldName="email"
                    id="email"
                    error={errors.email?.message as string}
                    borderColor={colors.red}
                  />
                </div>
                <InputWithLabel
                  label={t('contact.input.subject')}
                  validationMessage={t('validationMessage.required')}
                  type="text"
                  fieldName="subject"
                  id="subject"
                  error={errors.subject?.message as string}
                  minLength={5}
                  borderColor={colors.red}
                />
                <InputWithLabel
                  label={t('contact.input.message')}
                  validationMessage={t('validationMessage.required')}
                  type="textarea"
                  fieldName="message"
                  id="message"
                  error={errors.message?.message as string}
                  minLength={10}
                  maxLength={1200}
                  borderColor={colors.red}
                />
              </div>
              <Button
                disabled={isLoading}
                type="submit"
                bgColor="red"
                title={t('contact.titleLabel')}
              >
                {isLoading ? (
                  <Loader color={colors.white} />
                ) : (
                  t('contact.buttonText')
                )}
              </Button>
            </form>
          </FormProvider>
        </GlobalContainer>
        <ModalMessage
          ref={modalRef}
          isSendSuccess={isSendSuccess}
          onClose={handleModalClose}
        />
      </>
    </Section>
  )
}

export default Contact
