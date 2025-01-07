import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

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
          <TitleGlobal>Contato</TitleGlobal>
          <p>
            Fique à vontade para enviar uma mensagem. Estou sempre aberto a
            novas oportunidades e colaborações!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormData>
              <FormGroup size="333.33px">
                <p>Seu nome:</p>
                <input
                  type="text"
                  {...register('name', {
                    required: 'Este campo é obrigatório.'
                  })}
                />
                {errors.name && <small>{errors.name.message}</small>}
              </FormGroup>
              <FormGroup size="666.66px">
                <p>Email:</p>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Este campo é obrigatório.',
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'O email digitado é inválido.'
                    }
                  })}
                />
                {errors.email && <small>{errors.email.message}</small>}
              </FormGroup>
              <FormGroup size="100%">
                <p>Assunto:</p>
                <input
                  type="text"
                  {...register('subject', {
                    required: 'Este campo é obrigatório.'
                  })}
                />
                {errors.subject && <small>{errors.subject.message}</small>}
              </FormGroup>
              <FormGroup size="100%">
                <p>Mensagem:</p>
                <textarea
                  {...register('message', {
                    required: 'Este campo é obrigatório.'
                  })}
                />
                {errors.message && <small>{errors.message.message}</small>}
              </FormGroup>
            </FormData>
            <Button
              type="submit"
              bgColor="red"
              title="Clique aqui para mandar essa mensagem para o meu email"
            >
              {isLoading ? <Loader /> : 'Enviar'}
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
