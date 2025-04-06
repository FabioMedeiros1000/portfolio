import { Group } from './styles'

export type SkillGroupProps = {
  logo: string
  text?: string
  size?: string
}

const SkillGroup = ({ logo, text, size = '128px' }: SkillGroupProps) => (
  <Group size={size}>
    <img src={logo} alt={`Logo do(a) ${text}`} />
    <p>{text}</p>
  </Group>
)

export default SkillGroup
