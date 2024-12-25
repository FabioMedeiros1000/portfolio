import { GlobalContainer } from '../../styles'
import Button from '../Button'
import Section from '../Section'

const Resume = () => (
  <Section backgroundColor="red">
    <GlobalContainer>
      <h2>Currículo</h2>
      <p>
        Confira minha trajetória e habilidades técnicas em detalhes. Baixe meu
        currículo e conheça mais sobre meu trabalho e projetos realizados.
      </p>
      <Button bgColor="white">Baixar currículo</Button>
    </GlobalContainer>
  </Section>
)

export default Resume
