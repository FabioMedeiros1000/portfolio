import { useTranslation } from 'react-i18next'

import Section from '../Section'
import HeroStripes from '../HeroStripes'

import photo from '../../assets/minha-foto.png'

import { AboutTitle, SectionContent } from './styles'

import { GlobalContainer } from '../../styles'

const About = () => {
  const { t } = useTranslation()

  return (
    <Section variant="hero" id="about">
      <HeroStripes />
      <GlobalContainer>
        <SectionContent>
          <div>
            <img src={photo} alt="Foto de Fábio Medeiros" />
            <h3>Fábio Medeiros</h3>
          </div>
          <div>
            <AboutTitle>{t('about.title')}</AboutTitle>
            <p dangerouslySetInnerHTML={{ __html: t('about.description') }} />
          </div>
        </SectionContent>
      </GlobalContainer>
    </Section>
  )
}

export default About
