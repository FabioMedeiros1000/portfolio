import { SectionContainer } from './styles'

export type Props = {
  variant?: 'default' | 'hero' | 'bare'
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

const Section = ({ variant = 'default', children, ...rest }: Props) => (
  <SectionContainer $variant={variant} {...rest}>
    {children}
  </SectionContainer>
)

export default Section
