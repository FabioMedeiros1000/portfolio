import { Stripes } from './styles'

type Props = {
  variant?: 'hero' | 'compact'
}

const HeroStripes = ({ variant = 'hero' }: Props) => (
  <Stripes $variant={variant} aria-hidden="true" />
)

export default HeroStripes
