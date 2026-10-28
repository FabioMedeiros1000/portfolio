import Loader from '../Loader'
import { ButtonContainer, Label, Spinner } from './styles'

export type Props = {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'secondary'
  type?: 'button' | 'submit'
  loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  variant = 'accent',
  type = 'button',
  loading = false,
  disabled,
  ...rest
}: Props) => {
  return (
    <ButtonContainer
      as="button"
      type={type}
      $variant={variant}
      disabled={loading || disabled}
      aria-busy={loading}
      {...rest}
    >
      <Label $hidden={loading}>{children}</Label>
      {loading && (
        <Spinner>
          <Loader color="currentColor" />
        </Spinner>
      )}
    </ButtonContainer>
  )
}

export default Button
