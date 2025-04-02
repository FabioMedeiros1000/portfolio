import { Container } from './styles'

export type FooterProps = {
  logo: string
  text: string
  link: string
  alt: string
  labelPt?: string
  labelEn?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const FooterGroup = ({
  logo,
  text,
  link,
  alt,
  labelPt,
  labelEn,
  ...rest
}: FooterProps) => (
  <Container>
    <a href={link} target="blank" {...rest}>
      <img src={logo} alt={alt} />
    </a>
    <small>{text}</small>
  </Container>
)

export default FooterGroup
