import { ButtonContainer } from './styles'

export type Props = {
  children: string
  bgColor: 'red' | 'white'
}

const Button = ({ children, bgColor }: Props) => (
  <ButtonContainer bgColor={bgColor}>{children}</ButtonContainer>
)

export default Button
