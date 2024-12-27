import { GlobalContainer } from '../../styles'
import Card from '../Card'
import Section from '../Section'
import { Grid, Title } from './styles'

const Projects = () => (
  <Section backgroundColor="white">
    <GlobalContainer>
      <Title>Projetos</Title>
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </GlobalContainer>
  </Section>
)

export default Projects
