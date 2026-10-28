import { useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Button from '../Button'
import Section from '../Section'
import ModalMessage from '../ModalMessage'

import { ModalHandles } from '../Modal'
import { sendEmail } from '../../services/emailService'
import { ContactForm } from '../../types/contact'

import { GlobalContainer, TitleGlobal } from '../../styles'
import { ContactFormElement, Description } from './styles'
import InputWithLabel from '../InputWithLabel'

const Contact = () => {
  const modalRef = useRef<ModalHandles>(null)
  const { t } = useTranslation()

  const methods = useForm<ContactForm>()

  const {
    handleSubmit,
    formState: { errors }
  } = methods

  const [isSendSuccess, setIsSendSuccess] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: ContactForm): Promise<void> => {
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
    <Section id="contact">
      <>
        <GlobalContainer>
          <TitleGlobal>{t('contact.title')}</TitleGlobal>
          <Description>{t('contact.description')}</Description>
          <FormProvider {...methods}>
            <ContactFormElement onSubmit={handleSubmit(onSubmit)}>
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
                    maxLength={100}
                  />
                  <InputWithLabel
                    label={t('contact.input.email')}
                    validationMessage={t('validationMessage.required')}
                    type="email"
                    fieldName="email"
                    id="email"
                    minLength={5}
                    maxLength={70}
                    error={errors.email?.message as string}
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
                  maxLength={255}
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
                />
              </div>
              <Button
                loading={isLoading}
                type="submit"
                variant="accent"
                title={t('contact.titleLabel')}
              >
                {t('contact.buttonText')}
              </Button>
            </ContactFormElement>
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
