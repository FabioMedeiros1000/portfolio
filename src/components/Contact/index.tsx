import { GlobalContainer } from '../../styles'
import Button from '../Button'
import Section from '../Section'

import { FormData, FormGroup, Title } from './styles'

const Contact = () => (
  <Section backgroundColor="white">
    <GlobalContainer>
      <Title>Contato</Title>
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
        <Button bgColor="red">Enviar</Button>
      </form>
    </GlobalContainer>
  </Section>
)

export default Contact
