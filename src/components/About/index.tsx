import { useTranslation } from 'react-i18next'

import Section from '../Section'

import photo from '../../assets/minha-foto.png'

import { SectionContent } from './styles'

import { GlobalContainer, TitleGlobal } from '../../styles'

const About = () => {
  const { t } = useTranslation()

  return (
    <Section backgroundColor="white" id="about">
      <GlobalContainer>
        <TitleGlobal>{t('about.title')}</TitleGlobal>
        <SectionContent>
          <div>
            <img src={photo} alt="Foto de Fábio Medeiros" />
            <h3>Fábio Medeiros</h3>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t('about.description') }} />
        </SectionContent>
      </GlobalContainer>
    </Section>
  )
}

export default About
