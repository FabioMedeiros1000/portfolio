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
      <a href="/curriculo.pdf" download>
        <Button bgColor="white" title="Clique aqui para baixar o meu currículo">
          Baixar currículo
        </Button>
      </a>
    </GlobalContainer>
  </Section>
)

export default Resume
