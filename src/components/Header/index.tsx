import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import Section from '../Section'
import HamburgerIcon from '../Hamburger/HamburgerIcon'
import HamburgerMenu from '../Hamburger/HamburgerMenu'

import { HeaderContent } from './styles'
import { GlobalContainer } from '../../styles'
import Select from '../Select'
import Navbar from '../Navbar'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language
  )
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    i18n.changeLanguage(language)
  }

  const toggleMenuHamburger = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <Section padding={20} backgroundColor="red">
      <GlobalContainer>
        <HeaderContent>
          <h1>Front-End Developer</h1>
          <Navbar />
          <div className="flex-col">
            <Select
              selectedLanguage={selectedLanguage}
              handleLanguageChange={handleLanguageChange}
            />
            <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenuHamburger} />
          </div>
        </HeaderContent>
        <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenuHamburger} />
      </GlobalContainer>
    </Section>
  )
}

export default Header
