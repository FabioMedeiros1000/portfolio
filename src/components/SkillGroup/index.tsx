import { Group } from "./styles"

export type SkillGroupProps = {
    logo: string
    text: string
}

const SkillGroup = ({ logo, text }: SkillGroupProps) => (
    <Group>
        <img src={logo} />
        <h3>{text}</h3>
    </Group>
)

export default SkillGroup