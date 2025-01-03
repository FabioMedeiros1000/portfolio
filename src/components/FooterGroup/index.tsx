import { Container } from './styles'

export type FooterProps = {
  logo: string
  text: string
  link: string
  alt: string
}

const FooterGroup = ({ logo, text, link, alt }: FooterProps) => (
  <Container>
    <a href={link} target="blank">
      <img src={logo} alt={alt} />
    </a>
    <small>{text}</small>
  </Container>
)

export default FooterGroup
