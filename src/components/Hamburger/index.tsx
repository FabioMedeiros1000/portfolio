import { Fade } from 'hamburger-react'
import { useState } from 'react'
import { ContainerIcon, HamburgerContent } from './styles'

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false)

  const handleItemClick = () => {
    setOpen(false)
  }

  return (
    <>
      <ContainerIcon>
        <Fade
          toggled={isOpen}
          toggle={setOpen}
          direction="right"
          size={40}
          duration={0.5}
        />
      </ContainerIcon>
      <HamburgerContent className={isOpen ? 'is-open' : ''}>
        <li onClick={handleItemClick}>
          <a href="#about" title="Clique aqui para ver mais sobre mim">
            Sobre mim
          </a>
        </li>
        <li onClick={handleItemClick}>
          <a
            href="#skills"
            title="Clique aqui para ver as minhas habilidades principais"
          >
            Habilidades principais
          </a>
        </li>
        <li onClick={handleItemClick}>
          <a
            href="#projects"
            title="Clique aqui para ver alguns projetos que já desenvolvi"
          >
            Projetos
          </a>
        </li>
        <li onClick={handleItemClick}>
          <a
            href="#resume"
            title="Clique aqui para ter acesso ao meu currículo"
          >
            Currículo
          </a>
        </li>
        <li onClick={handleItemClick}>
          <a
            href="#contact"
            title="Clique aqui para mandar uma mensagem para mim"
          >
            Contato
          </a>
        </li>
      </HamburgerContent>
    </>
  )
}

export default Hamburger
