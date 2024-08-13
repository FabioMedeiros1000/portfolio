import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo"
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Sou um desenvolvedor front-end apaixonado por criar interfaces bonitas e funcionais. Amo aprender novas tecnologias e estou sempre em busca de desafios que me permitam crescer profissionalmente.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=FabioMedeiros1000&show_icons=true&theme=dark" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=FabioMedeiros1000&layout=compact&theme=dark" />
    </GithubSecao>
  </section>
)

export default Sobre;
