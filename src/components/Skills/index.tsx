import { useTranslation } from 'react-i18next'

import Section from '../Section'
import SkillGroup from '../SkillGroup'

import { SkillGroupProps } from '../SkillGroup'

import logos from '../../utils/logos'

import { ContentSkills } from './styles'

import { GlobalContainer } from '../../styles'
import SkillsCarousel from '../SkillsCarousel'

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
        <ContentSkills>
          {skills.map((skill, index) => (
            <li key={index + 1}>
              <SkillGroup logo={skill.logo} text={skill.text} />
            </li>
          ))}
        </ContentSkills>
        <SkillsCarousel>
          {skills.map((skill, index) => (
            <li key={index + 1}>
              <SkillGroup logo={skill.logo} text={skill.text} size="50px" />
            </li>
          ))}
        </SkillsCarousel>
      </GlobalContainer>
    </Section>
  )
}

export default Skills
