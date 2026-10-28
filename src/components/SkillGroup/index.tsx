import { Group, IconTile } from './styles'

export type SkillGroupProps = {
  logo: string
  text?: string
  variant?: 'card' | 'icon'
  wide?: boolean
}

const SkillGroup = ({
  logo,
  text,
  variant = 'card',
  wide = false
}: SkillGroupProps) => {
  const alt = text ? `Logo do(a) ${text}` : ''

  if (variant === 'icon') {
    return (
      <IconTile $wide={wide}>
        <img src={logo} alt={alt} />
      </IconTile>
    )
  }

  return (
    <Group>
      <IconTile $wide={wide}>
        <img src={logo} alt={alt} />
      </IconTile>
      <p>{text}</p>
    </Group>
  )
}

export default SkillGroup
