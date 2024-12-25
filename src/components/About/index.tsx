import photo from '../../assets/minha-foto.png'
import { GlobalContainer } from '../../styles'
import Section from '../Section'

import { SectionContent } from './styles'

const About = () => (
  <Section backgroundColor="white">
    <GlobalContainer>
      <h2>Sobre mim</h2>
      <SectionContent>
        <div>
          <img src={photo} />
          <h3>Fábio Medeiros</h3>
        </div>
        <p>
          Sou <b>desenvolvedor front-end</b> com uma paixão inabalável por criar
          interfaces bonitas, funcionais e intuitivas. Focado na{' '}
          <b>experiência do usuário</b>, dedico-me a transformar ideias em
          soluções visuais impactantes, acessíveis e alinhadas às melhores
          práticas do mercado. Minha motivação está em criar experiências
          digitais que conectem pessoas e tecnologia de forma eficiente. Além
          disso, estou sempre em busca de evolução,{' '}
          <b>aprendendo novas técnicas</b> e acompanhando as tendências mais
          recentes do desenvolvimento web, garantindo{' '}
          <b>projetos modernos e inovadores</b>.
        </p>
      </SectionContent>
    </GlobalContainer>
  </Section>
)

export default About
