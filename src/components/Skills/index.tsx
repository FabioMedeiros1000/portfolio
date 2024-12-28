import Section from '../Section'
import SkillGroup from '../SkillGroup'

import { SkillGroupProps } from '../SkillGroup'

import logos from '../../utils/logos'

import { Content } from './styles'

import { GlobalContainer } from '../../styles'

const skills: SkillGroupProps[] = [
  {
    text: 'HTML',
    logo: logos.html
  },
  {
    text: 'CSS',
    logo: logos.css
  },
  {
    text: 'JavaScript',
    logo: logos.javascript
  },
  {
    text: 'TypeScript',
    logo: logos.typescript
  },
  {
    text: 'React',
    logo: logos.react
  },
  {
    text: 'Redux',
    logo: logos.redux
  },
  {
    text: 'Next.js',
    logo: logos.next
  },
  {
    text: 'Git',
    logo: logos.git
  },
  {
    text: 'SASS',
    logo: logos.sass
  },
  {
    text: 'Bootstrap',
    logo: logos.bootstrap
  }
]

const Skills = () => (
  <Section backgroundColor="red" id="skills">
    <GlobalContainer>
      <h2>Habilidades principais</h2>
      <Content>
        {skills.map((skill, index) => (
          <li key={index + 1}>
            <SkillGroup logo={skill.logo} text={skill.text} />
          </li>
        ))}
      </Content>
    </GlobalContainer>
  </Section>
)

export default Skills
