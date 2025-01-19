import { useTranslation } from 'react-i18next'

import Button from '../Button'
import Section from '../Section'

import { GlobalContainer, TitleGlobal } from '../../styles'

const Resume = () => {
  const { t, i18n } = useTranslation()

  return (
    <Section backgroundColor="red" id="resume">
      <GlobalContainer>
        <TitleGlobal>{t('resume.title')}</TitleGlobal>
        <p>{t('resume.description')}</p>
        <a
          href={i18n.language === 'pt' ? '/curriculo.pdf' : '/resume.pdf'}
          download
        >
          <Button bgColor="white" title={t('resume.titleLabel')}>
            {t('resume.buttonText')}
          </Button>
        </a>
      </GlobalContainer>
    </Section>
  )
}

export default Resume
