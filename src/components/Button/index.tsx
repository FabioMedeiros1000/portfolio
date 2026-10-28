import { ButtonContainer } from './styles'

export type Props = {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'secondary'
  type?: 'button' | 'submit'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  variant = 'accent',
  type = 'button',
  ...rest
}: Props) => {
  return (
    <ButtonContainer as="button" type={type} $variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  )
}

export default Button
