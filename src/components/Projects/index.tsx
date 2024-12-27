import Card from '../Card'
import Section from '../Section'

import { Grid, Title } from './styles'

import { GlobalContainer } from '../../styles'

const Projects = () => (
  <Section backgroundColor="white" id="projects">
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
