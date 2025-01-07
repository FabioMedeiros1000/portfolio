import { ButtonContainer } from './styles'

export type Props = {
  children: React.ReactNode
  bgColor: 'red' | 'white'
  type?: 'button' | 'submit'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, bgColor, type = 'button', ...rest }: Props) => {
  return (
    <ButtonContainer as="button" type={type} bgColor={bgColor} {...rest}>
      {children}
    </ButtonContainer>
  )
}

export default Button
