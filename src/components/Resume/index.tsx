import { useTranslation } from 'react-i18next'

import { ButtonContainer } from '../Button/styles'
import HeroStripes from '../HeroStripes'
import Section from '../Section'

import { GlobalContainer, TitleGlobal } from '../../styles'
import { Action, Card, Content } from './styles'

const Resume = () => {
  const { t, i18n } = useTranslation()

  return (
    <Section id="resume">
      <GlobalContainer>
        <Card>
          <HeroStripes variant="compact" />
          <Content>
            <TitleGlobal>{t('resume.title')}</TitleGlobal>
            <p>{t('resume.description')}</p>
          </Content>
          <Action>
            <ButtonContainer
              as="a"
              $variant="primary"
              href={i18n.language === 'pt' ? '/curriculo.pdf' : '/resume.pdf'}
              download
              title={t('resume.titleLabel')}
            >
              {t('resume.buttonText')} <span aria-hidden="true">↓</span>
            </ButtonContainer>
          </Action>
        </Card>
      </GlobalContainer>
    </Section>
  )
}

export default Resume
