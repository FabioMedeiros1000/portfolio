import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Button from '../Button'
import Section from '../Section'
import ModalMessage from '../ModalMessage'
import Loader from '../Loader'

import { ModalHandles } from '../Modal'
import { sendEmail } from '../../services/emailService'

import { FormData, FormGroup } from './styles'
import { GlobalContainer, TitleGlobal } from '../../styles'

export type FormType = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const modalRef = useRef<ModalHandles>(null)
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormType>()

  const [isSendSuccess, setIsSendSuccess] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: FormType): Promise<void> => {
    setIsLoading(true)

    try {
      await sendEmail(data)
      setIsSendSuccess(true)
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormData>
              <FormGroup size="333.33px">
                <p>{t('contact.input.name')}</p>
                <input
                  type="text"
                  {...register('name', {
                    required: t('contact.validationMessage.required')
                  })}
                />
                {errors.name && <small>{errors.name.message}</small>}
              </FormGroup>
              <FormGroup size="666.66px">
                <p>{t('contact.input.email')}</p>
                <input
                  type="email"
                  {...register('email', {
                    required: t('contact.validationMessage.required'),
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: t('contact.validationMessage.email')
                    }
                  })}
                />
                {errors.email && <small>{errors.email.message}</small>}
              </FormGroup>
              <FormGroup size="100%">
                <p>{t('contact.input.subject')}</p>
                <input
                  type="text"
                  {...register('subject', {
                    required: t('contact.validationMessage.required')
                  })}
                />
                {errors.subject && <small>{errors.subject.message}</small>}
              </FormGroup>
              <FormGroup size="100%">
                <p>{t('contact.input.message')}</p>
                <textarea
                  {...register('message', {
                    required: t('contact.validationMessage.required')
                  })}
                />
                {errors.message && <small>{errors.message.message}</small>}
              </FormGroup>
            </FormData>
            <Button
              disabled={isLoading}
              type="submit"
              bgColor="red"
              title={t('contact.titleLabel')}
            >
              {isLoading ? <Loader /> : t('contact.buttonText')}
            </Button>
          </form>
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
