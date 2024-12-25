import { GlobalContainer } from '../../styles'
import Button from '../Button'
import Section from '../Section'

import { Input, FormData, FormGroup } from './styles'

const Contact = () => (
  <Section backgroundColor="white">
    <GlobalContainer>
      <h2>Contato</h2>
      <p>
        Fique à vontade para enviar uma mensagem. Estou sempre aberto a novas
        oportunidades e colaborações!
      </p>
      <form>
        <FormData>
          <FormGroup size="520px">
            <p>Seu nome:</p>
            <Input type="text" />
          </FormGroup>
          <FormGroup size="746px">
            <p>Assunto:</p>
            <Input type="text" />
          </FormGroup>
          <FormGroup size="100%">
            <p>Mensagem:</p>
            <Input type="textarea" />
          </FormGroup>
        </FormData>
        <Button bgColor="red">Enviar</Button>
      </form>
    </GlobalContainer>
  </Section>
)

export default Contact
