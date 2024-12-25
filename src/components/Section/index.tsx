import { Container } from "./styles"

export type Props = {
    backgroundColor: 'red' | 'white' | 'blue'
    children: JSX.Element
    padding?: React.ReactNode
}

const Section = ({ backgroundColor, children, padding = 16 }: Props) => <Container padding={padding} backgroundColor={backgroundColor}>{children}</Container>

export default Section