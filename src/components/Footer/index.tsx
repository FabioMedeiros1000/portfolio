import FooterGroup from '../FooterGroup'
import Section from '../Section'

import { FooterProps } from '../FooterGroup'

import email from '../../assets/logos/gmail.svg'
import linkedin from '../../assets/logos/linkedin.svg'
import telefone from '../../assets/logos/telefone.svg'
import github from '../../assets/logos/github.svg'

import { FooterGrid } from './styles'

import { GlobalContainer } from '../../styles'
import { useTranslation } from 'react-i18next'

const items: FooterProps[] = [
  {
    logo: email,
    text: 'contato@fabiomedeirosdev.com',
    link: 'mailto:contato@fabiomedeirosdev.com',
    alt: 'Meu email',
    labelPt: 'meu email',
    labelEn: 'my email'
  },
  {
    logo: linkedin,
    text: 'https://www.linkedin.com/in/fabiomedeirosdev/',
    link: 'https://www.linkedin.com/in/fabiomedeirosdev/',
    alt: 'Meu linkedin',
    labelPt: 'meu linkedin',
    labelEn: 'my linkedin'
  },
  {
    logo: telefone,
    text: '+55 (82) 99187-1637',
    link: 'https://wa.me/5582991871637',
    alt: 'Meu número de telefone',
    labelPt: 'meu número de telefone',
    labelEn: 'my phone number'
  },
  {
    logo: github,
    text: 'https://github.com/FabioMedeiros1000',
    link: 'https://github.com/FabioMedeiros1000',
    alt: 'Meu github',
    labelPt: 'meu github',
    labelEn: 'my github'
  }
]

const Footer = () => {
  const { t, i18n } = useTranslation()

  return (
    <Section backgroundColor="blue">
      <GlobalContainer>
        <FooterGrid>
          {items.map((item, index) => (
            <li key={index}>
              <FooterGroup
                logo={item.logo}
                text={item.text}
                link={item.link}
                alt={item.alt}
                title={t('footer.titleLabel', {
                  text: i18n.language === 'pt' ? item.labelPt : item.labelEn
                })}
              />
            </li>
          ))}
        </FooterGrid>
      </GlobalContainer>
    </Section>
  )
}

export default Footer
