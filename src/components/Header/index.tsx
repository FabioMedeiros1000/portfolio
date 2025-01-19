import { useTranslation } from 'react-i18next'

import Section from '../Section'
import Hamburger from '../Hamburger'

import { HeaderContent, Navbar, Select } from './styles'

import { GlobalContainer } from '../../styles'
import { useState } from 'react'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language
  )

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    i18n.changeLanguage(language)
  }

  return (
    <Section padding={40} backgroundColor="red">
      <>
        <GlobalContainer>
          <HeaderContent>
            <h1>Front-End Developer</h1>
            <Hamburger />
            <Navbar>
              <ul>
                <li>
                  <a href="#about" title={t('header.titleLabel.about')}>
                    {t('header.about')}
                  </a>
                </li>
                <li>
                  <a href="#skills" title={t('header.titleLabel.skills')}>
                    {t('header.skills')}
                  </a>
                </li>
                <li>
                  <a href="#projects" title={t('header.titleLabel.projects')}>
                    {t('header.projects')}
                  </a>
                </li>
                <li>
                  <a href="#resume" title={t('header.titleLabel.resume')}>
                    {t('header.resume')}
                  </a>
                </li>
                <li>
                  <a href="#contact" title={t('header.titleLabel.contact')}>
                    {t('header.contact')}
                  </a>
                </li>
              </ul>
            </Navbar>
          </HeaderContent>
        </GlobalContainer>
        <Select
          value={selectedLanguage}
          onChange={(event) => handleLanguageChange(event.target.value)}
        >
          <option value="pt">PT</option>
          <option value="en">EN</option>
        </Select>
      </>
    </Section>
  )
}

export default Header
