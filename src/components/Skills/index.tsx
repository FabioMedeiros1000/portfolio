import { useTranslation } from 'react-i18next'

import Section from '../Section'
import ContentSkills from '../ContentSkills'

import { SkillGroupProps } from '../SkillGroup'

import logos from '../../utils/logos'

import { GlobalContainer } from '../../styles'

const skills: SkillGroupProps[] = [
  {
    text: 'Python',
    logo: logos.python
  },
  {
    text: 'Fastapi',
    logo: logos.fastapi
  },
  {
    text: 'Langchain',
    logo: logos.langchain
  },
  {
    text: 'Node',
    logo: logos.node
  },
  {
    text: 'React',
    logo: logos.react
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
    text: 'PostgreSQL',
    logo: logos.postgresql
  },
  {
    text: 'Git',
    logo: logos.git
  },
  {
    text: 'Docker',
    logo: logos.docker
  }
]

const Skills = () => {
  const { t } = useTranslation()

  return (
    <Section backgroundColor="red" id="skills">
      <GlobalContainer>
        <h2 style={{"marginBottom": "24px"}}>{t('skills.title')}</h2>
        <ContentSkills skills={skills} />
      </GlobalContainer>
    </Section>
  )
}

export default Skills
