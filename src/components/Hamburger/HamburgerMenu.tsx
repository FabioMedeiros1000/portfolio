import { MenuContainer } from './styles'

interface HamburgerMenuProps {
  isOpen: boolean
  onClick: () => void
}

const HamburgerMenu = ({ isOpen, onClick }: HamburgerMenuProps) => {
  return (
    <MenuContainer isOpen={isOpen}>
      <ul>
        <li>
          <a href="#about" onClick={onClick}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={onClick}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={onClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#resume" onClick={onClick}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClick}>
            Contact
          </a>
        </li>
        <li>
          <a href="#askMe" onClick={onClick}>
            Ask Me
          </a>
        </li>
      </ul>
    </MenuContainer>
  )
}

export default HamburgerMenu
