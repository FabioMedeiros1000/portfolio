import { GlobalContainer } from '../../styles'
import Button from '../Button'
import Section from '../Section'
import { Title } from './styles'

const Resume = () => (
  <Section backgroundColor="red">
    <GlobalContainer>
      <Title>Currículo</Title>
      <p>
        Confira minha trajetória e habilidades técnicas em detalhes. Baixe meu
        currículo e conheça mais sobre meu trabalho e projetos realizados.
      </p>
      <Button bgColor="white">Baixar currículo</Button>
    </GlobalContainer>
  </Section>
)

export default Resume
