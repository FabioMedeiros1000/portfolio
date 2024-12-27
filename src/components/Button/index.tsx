import { ButtonContainer } from './styles'

export type Props = {
  children: string
  bgColor: 'red' | 'white'
} & React.HTMLAttributes<HTMLDivElement>

const Button = ({ children, bgColor, ...rest }: Props) => (
  <ButtonContainer bgColor={bgColor} {...rest}>
    {children}
  </ButtonContainer>
)

export default Button
