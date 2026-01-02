import { Group } from './styles'

export type SkillGroupProps = {
  logo: string
  text?: string
  size?: string
}

const SkillGroup = ({ logo, text, size = '100px' }: SkillGroupProps) => (
  <Group size={size}>
    <img style={{"height": size, "width": size}} src={logo} alt={`Logo do(a) ${text}`} />
    <p>{text}</p>
  </Group>
)

export default SkillGroup
