import Section from '../Section'
import Hamburger from '../Hamburger'

import { HeaderContent, Navbar } from './styles'

import { GlobalContainer } from '../../styles'

const Header = () => (
  <Section padding={40} backgroundColor="red">
    <GlobalContainer>
      <HeaderContent>
        <h1>Front-End Developer</h1>
        <Hamburger />
        <Navbar>
          <ul>
            <li>
              <a href="#about" title="Clique aqui para ver mais sobre mim">
                Sobre mim
              </a>
            </li>
            <li>
              <a
                href="#skills"
                title="Clique aqui para ver as minhas habilidades principais"
              >
                Habilidades principais
              </a>
            </li>
            <li>
              <a
                href="#projects"
                title="Clique aqui para ver alguns projetos que já desenvolvi"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#resume"
                title="Clique aqui para ter acesso ao meu currículo"
              >
                Currículo
              </a>
            </li>
            <li>
              <a
                href="#contact"
                title="Clique aqui para mandar uma mensagem para mim"
              >
                Contato
              </a>
            </li>
          </ul>
        </Navbar>
      </HeaderContent>
    </GlobalContainer>
  </Section>
)

export default Header
