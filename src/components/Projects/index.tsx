import { GlobalContainer } from '../../styles'
import Card from '../Card'
import Section from '../Section'
import { Grid } from './styles'

const Projects = () => (
  <Section backgroundColor="white">
    <GlobalContainer>
      <h2>Projetos</h2>
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
