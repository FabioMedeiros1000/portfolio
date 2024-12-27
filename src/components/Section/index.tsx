import { SectionContainer } from './styles'

export type Props = {
  backgroundColor: 'red' | 'white' | 'blue'
  children: JSX.Element
  padding?: React.ReactNode
}

const Section = ({ backgroundColor, children, padding = 24 }: Props) => (
  <SectionContainer padding={padding} backgroundColor={backgroundColor}>
    {children}
  </SectionContainer>
)

export default Section
