import Button from '../Button'
import Section from '../Section'

import { GlobalContainer, TitleGlobal } from '../../styles'

const Resume = () => (
  <Section backgroundColor="red" id="resume">
    <GlobalContainer>
      <TitleGlobal>Currículo</TitleGlobal>
      <p>
        Confira minha trajetória e habilidades técnicas em detalhes. Baixe meu
        currículo e conheça mais sobre meu trabalho e projetos realizados.
      </p>
      <Button bgColor="white">Baixar currículo</Button>
    </GlobalContainer>
  </Section>
)

export default Resume
