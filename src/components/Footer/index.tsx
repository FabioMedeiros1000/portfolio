import FooterGroup from '../FooterGroup'
import Section from '../Section'

import { FooterProps } from '../FooterGroup'

import email from '../../assets/logos/gmail.svg'
import linkedin from '../../assets/logos/linkedin.svg'
import telefone from '../../assets/logos/telefone.svg'
import github from '../../assets/logos/github.svg'

import { FooterGrid } from './styles'

import { GlobalContainer } from '../../styles'

const items: FooterProps[] = [
  {
    logo: email,
    text: 'fabio.leandro.medeiros@gmail.com'
  },
  {
    logo: linkedin,
    text: 'https://www.linkedin.com/in/fab-leandro/'
  },
  {
    logo: telefone,
    text: '+55 (82) 99187-1637'
  },
  {
    logo: github,
    text: 'https://github.com/FabioMedeiros1000'
  }
]

const Footer = () => (
  <Section backgroundColor="blue">
    <GlobalContainer>
      <FooterGrid>
        {items.map((item, index) => (
          <li key={index}>
            <FooterGroup logo={item.logo} text={item.text} />
          </li>
        ))}
      </FooterGrid>
    </GlobalContainer>
  </Section>
)

export default Footer
