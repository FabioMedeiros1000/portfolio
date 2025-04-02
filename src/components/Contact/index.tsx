import { useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Button from '../Button'
import Section from '../Section'
import ModalMessage from '../ModalMessage'
import Loader from '../Loader'
import FormGroup from '../FormGroup'

import { ModalHandles } from '../Modal'
import { sendEmail } from '../../services/emailService'

import { GlobalContainer, TitleGlobal } from '../../styles'
import { colors } from '../../variables'

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
                  <FormGroup
                    label={t('contact.input.name')}
                    validationMessage={t('validationMessage.required')}
                    type="text"
                    fieldName="name"
                    error={errors.name?.message}
                    minLength={5}
                  />
                  <FormGroup
                    label={t('contact.input.email')}
                    validationMessage={t('validationMessage.required')}
                    type="email"
                    fieldName="email"
                    error={errors.email?.message}
                  />
                </div>
                <FormGroup
                  label={t('contact.input.subject')}
                  validationMessage={t('validationMessage.required')}
                  type="text"
                  fieldName="subject"
                  error={errors.subject?.message}
                  minLength={5}
                />
                <FormGroup
                  label={t('contact.input.message')}
                  validationMessage={t('validationMessage.required')}
                  type="textarea"
                  fieldName="message"
                  error={errors.message?.message}
                  minLength={10}
                  maxLength={1200}
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
