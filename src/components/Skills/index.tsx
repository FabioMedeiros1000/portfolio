import Section from '../Section'
import SkillGroup from '../SkillGroup'

import { SkillGroupProps } from '../SkillGroup'

import html from '../../assets/logos/html.svg'
import css from '../../assets/logos/css.svg'
import javascript from '../../assets/logos/javascript.svg'
import typescript from '../../assets/logos/typescript.svg'
import react from '../../assets/logos/react.svg'
import redux from '../../assets/logos/redux.svg'
import next from '../../assets/logos/next.svg'
import git from '../../assets/logos/git.svg'
import sass from '../../assets/logos/sass.svg'

import { Content } from './styles'

import { GlobalContainer } from '../../styles'

const skills: SkillGroupProps[] = [
  {
    text: 'HTML',
    logo: html
  },
  {
    text: 'CSS',
    logo: css
  },
  {
    text: 'JavaScript',
    logo: javascript
  },
  {
    text: 'TypeScript',
    logo: typescript
  },
  {
    text: 'React',
    logo: react
  },
  {
    text: 'Redux',
    logo: redux
  },
  {
    text: 'Next.js',
    logo: next
  },
  {
    text: 'Git',
    logo: git
  },
  {
    text: 'SASS',
    logo: sass
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
