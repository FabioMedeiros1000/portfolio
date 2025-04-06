import ContentSkillsDesktop from '../ContentSkillsDesktop'
import ContentSkillsMobile from '../ContentSkillsMobile'
import { SkillGroupProps } from '../SkillGroup'

type ContentSkillsProps = {
  skills: SkillGroupProps[]
}

const ContentSkills = ({ skills }: ContentSkillsProps) => (
  <>
    <ContentSkillsDesktop skills={skills} />
    <ContentSkillsMobile skills={skills} />
  </>
)

export default ContentSkills
