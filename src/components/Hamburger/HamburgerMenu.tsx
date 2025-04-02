import { useTranslation } from 'react-i18next'

import { MenuContainer } from './styles'

interface HamburgerMenuProps {
  isOpen: boolean
  onClick: () => void
}

const HamburgerMenu = ({ isOpen, onClick }: HamburgerMenuProps) => {
  const { t } = useTranslation()

  return (
    <MenuContainer isOpen={isOpen}>
      <ul>
        <li>
          <a href="#about" onClick={onClick}>
            {t('header.about')}
          </a>
        </li>
        <li>
          <a href="#skills" onClick={onClick}>
            {t('header.skills')}
          </a>
        </li>
        <li>
          <a href="#projects" onClick={onClick}>
            {t('header.projects')}
          </a>
        </li>
        <li>
          <a href="#resume" onClick={onClick}>
            {t('header.resume')}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClick}>
            {t('header.contact')}
          </a>
        </li>
        <li>
          <a href="#askMe" onClick={onClick}>
            {t('header.askMe')}
          </a>
        </li>
      </ul>
    </MenuContainer>
  )
}

export default HamburgerMenu
