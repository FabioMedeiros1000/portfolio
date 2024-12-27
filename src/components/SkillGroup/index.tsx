import { Group } from './styles'

export type SkillGroupProps = {
  logo: string
  text: string
}

const SkillGroup = ({ logo, text }: SkillGroupProps) => (
  <Group>
    <img src={logo} />
    <p>{text}</p>
  </Group>
)

export default SkillGroup
