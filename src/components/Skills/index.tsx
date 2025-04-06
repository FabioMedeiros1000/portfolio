import { useTranslation } from 'react-i18next'

import Section from '../Section'
import ContentSkills from '../ContentSkills'

import { SkillGroupProps } from '../SkillGroup'

import logos from '../../utils/logos'

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
    text: 'Prisma',
    logo: logos.prisma
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
    text: 'SASS',
    logo: logos.sass
  },
  {
    text: 'Bootstrap',
    logo: logos.bootstrap
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
        <h2>{t('skills.title')}</h2>
        <ContentSkills skills={skills} />
      </GlobalContainer>
    </Section>
  )
}

export default Skills
