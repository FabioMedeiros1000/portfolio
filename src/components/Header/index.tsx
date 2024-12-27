import Section from '../Section'

import { HeaderContent, Navbar } from './styles'

import { GlobalContainer } from '../../styles'

const Header = () => (
  <Section padding={40} backgroundColor="red">
    <GlobalContainer>
      <HeaderContent>
        <h1>Front-End Developer</h1>
        <Navbar>
          <ul>
            <li>
              <a href="#about">Sobre mim</a>
            </li>
            <li>
              <a href="#skills">Habilidades principais</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#resume">Currículo</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </Navbar>
      </HeaderContent>
    </GlobalContainer>
  </Section>
)

export default Header
