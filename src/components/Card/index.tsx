import { Body, CardContainer, Header } from './styles'

export type CardProps = {
  titleCard: string
  text: string
} & React.HTMLAttributes<HTMLDivElement>

const Card = ({ titleCard, text, ...rest }: CardProps) => (
  <CardContainer {...rest}>
    <Header>{titleCard}</Header>
    <Body>{text}</Body>
  </CardContainer>
)

export default Card
