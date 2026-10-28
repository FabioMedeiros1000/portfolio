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
}: FooterProps) => {
  const isMail = link.startsWith('mailto:')

  return (
    <Container>
      <a
        href={link}
        {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        <img src={logo} alt="" />
        <span>{text}</span>
      </a>
    </Container>
  )
}

export default FooterGroup
