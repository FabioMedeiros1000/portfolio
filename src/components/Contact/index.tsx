import { useRef } from 'react'

import Button from '../Button'
import Section from '../Section'

import { ModalHandles } from '../Modal'

import { FormData, FormGroup } from './styles'

import { GlobalContainer, TitleGlobal } from '../../styles'
import ModalMessage from '../ModalMessage'

const Contact = () => {
  const modalRef = useRef<ModalHandles>(null)

  return (
    <Section backgroundColor="white" id="contact">
      <>
        <GlobalContainer>
          <TitleGlobal>Contato</TitleGlobal>
          <p>
            Fique à vontade para enviar uma mensagem. Estou sempre aberto a
            novas oportunidades e colaborações!
          </p>
          <div>
            <FormData>
              <FormGroup size="333.33px">
                <p>Seu nome:</p>
                <input type="text" />
              </FormGroup>
              <FormGroup size="666.66px">
                <p>Assunto:</p>
                <input type="text" />
              </FormGroup>
              <FormGroup size="100%">
                <p>Mensagem:</p>
                <textarea />
              </FormGroup>
            </FormData>
            <Button
              bgColor="red"
              title="Clique aqui para mandar essa mensagem para o meu email"
              onClick={() => modalRef.current?.openModal()}
            >
              Enviar
            </Button>
          </div>
        </GlobalContainer>
        <ModalMessage ref={modalRef} />
      </>
    </Section>
  )
}

export default Contact
