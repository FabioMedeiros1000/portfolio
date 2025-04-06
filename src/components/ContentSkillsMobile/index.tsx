import SkillGroup, { SkillGroupProps } from '../SkillGroup'
import SkillsCarousel from '../SkillsCarousel'

type ContentSkillsMobileProps = {
  skills: SkillGroupProps[]
}

const ContentSkillsMobile = ({ skills }: ContentSkillsMobileProps) => (
  <SkillsCarousel>
    {skills.map((skill, index) => (
      <li key={index + 1}>
        <SkillGroup logo={skill.logo} text={skill.text} size="50px" />
      </li>
    ))}
  </SkillsCarousel>
)

export default ContentSkillsMobile
