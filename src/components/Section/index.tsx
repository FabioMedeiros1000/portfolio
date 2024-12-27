import { SectionContainer } from './styles'

export type Props = {
  backgroundColor: 'red' | 'white' | 'blue'
  children: JSX.Element
  padding?: number
} & React.HTMLAttributes<HTMLDivElement>

const Section = ({
  backgroundColor,
  children,
  padding = 24,
  ...rest
}: Props) => (
  <SectionContainer
    padding={padding}
    backgroundColor={backgroundColor}
    {...rest}
  >
    {children}
  </SectionContainer>
)

export default Section
