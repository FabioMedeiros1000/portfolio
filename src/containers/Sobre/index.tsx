import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo"
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id sint provident incidunt, cupiditate itaque, accusamus voluptatem velit eveniet non iure obcaecati quisquam quo voluptatum quidem! Repellat iusto consequuntur amet deleniti?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=FabioMedeiros1000&show_icons=true&theme=dark" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=FabioMedeiros1000&layout=compact&theme=dark" />
    </GithubSecao>
  </section>
)

export default Sobre;
