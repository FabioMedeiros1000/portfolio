import { ContentSkillsContainer } from './styles'
import SkillGroup, { SkillGroupProps } from '../SkillGroup'

type ContentSkillsDesktopProps = {
  skills: SkillGroupProps[]
}

const ContentSkillsDesktop = ({ skills }: ContentSkillsDesktopProps) => (
  <ContentSkillsContainer>
    {skills.map((skill, index) => (
      <li key={index + 1}>
        <SkillGroup logo={skill.logo} text={skill.text} />
      </li>
    ))}
  </ContentSkillsContainer>
)

export default ContentSkillsDesktop
