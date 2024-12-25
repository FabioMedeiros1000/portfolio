import { Container } from './styles'

export type FooterProps = {
    logo: string
    text: string
}

const FooterGroup = ({logo, text}: FooterProps) => (
    <Container>
        <img src={logo}/>
        <p>{text}</p>
    </Container>
)

export default FooterGroup