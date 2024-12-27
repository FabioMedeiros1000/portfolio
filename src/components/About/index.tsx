import Section from '../Section'

import photo from '../../assets/minha-foto.png'

import { SectionContent } from './styles'

import { GlobalContainer, TitleGlobal } from '../../styles'

const About = () => (
  <Section backgroundColor="white" id="about">
    <GlobalContainer>
      <TitleGlobal>Sobre mim</TitleGlobal>
      <SectionContent>
        <img src={photo} />
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
      <h3>Fábio Medeiros</h3>
    </GlobalContainer>
  </Section>
)

export default About
