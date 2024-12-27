import { Container } from './styles'

export type FooterProps = {
  logo: string
  text: string
}

const FooterGroup = ({ logo, text }: FooterProps) => (
  <Container>
    <img src={logo} />
    <small>{text}</small>
  </Container>
)

export default FooterGroup
