import { useTranslation } from 'react-i18next'

import Section from '../Section'
import ContentSkills from '../ContentSkills'

import { SkillGroupProps } from '../SkillGroup'

import logos from '../../utils/logos'

import { GlobalContainer, TitleGlobal } from '../../styles'

const skills: SkillGroupProps[] = [
  {
    text: 'Python',
    logo: logos.python
  },
  {
    text: 'FastAPI',
    logo: logos.fastapi
  },
  {
    text: 'LangChain',
    logo: logos.langchain,
    wide: true
  },
  {
    text: 'Node.js',
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
    <Section id="skills">
      <GlobalContainer>
        <TitleGlobal>{t('skills.title')}</TitleGlobal>
        <ContentSkills skills={skills} />
      </GlobalContainer>
    </Section>
  )
}

export default Skills
