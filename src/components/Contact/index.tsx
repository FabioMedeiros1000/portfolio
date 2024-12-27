import Button from '../Button'
import Section from '../Section'

import { FormData, FormGroup } from './styles'

import { GlobalContainer, TitleGlobal } from '../../styles'

const Contact = () => (
  <Section backgroundColor="white" id="contact">
    <GlobalContainer>
      <TitleGlobal>Contato</TitleGlobal>
      <p>
        Fique à vontade para enviar uma mensagem. Estou sempre aberto a novas
        oportunidades e colaborações!
      </p>
      <form>
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
        >
          Enviar
        </Button>
      </form>
    </GlobalContainer>
  </Section>
)

export default Contact
