import { GlobalContainer } from '../../styles'
import Section from '../Section'
import { HeaderContent, Navbar } from './styles'

const Header = () => (
  <Section padding={40} backgroundColor="red">
    <GlobalContainer>
      <HeaderContent>
        <h1>Front-End Developer</h1>
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
