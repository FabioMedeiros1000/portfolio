import { GlobalContainer } from '../../styles'
import Section from '../Section'
import { HeaderContent, Navbar, Title } from './styles'

const Header = () => (
  <Section padding={32} backgroundColor="red">
    <GlobalContainer>
      <HeaderContent>
        <Title>Front-End Developer</Title>
        <Navbar>
          <ul>
            <li>Sobre mim</li>
            <li>Habilidades principais</li>
            <li>Projetos</li>
            <li>Currículo</li>
            <li>Contato</li>
          </ul>
        </Navbar>
      </HeaderContent>
    </GlobalContainer>
  </Section>
)

export default Header
