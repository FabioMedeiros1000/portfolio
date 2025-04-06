import Card from '../Card'
import { Grid } from './styles'
import { useTranslation } from 'react-i18next'

import { ProjectsListProps } from '../ProjectsList'

const ProjectsListDesktop = ({
  items,
  trimText,
  handleCardClick
}: ProjectsListProps) => {
  const { t } = useTranslation()

  return (
    <>
      <Grid>
        {items.map((item, index) => (
          <li key={index}>
            <Card
              titleCard={item.titleCard}
              text={trimText(item.text)}
              title={`${t('projects.titleLabel')} ${item.title}`}
              onClick={() => handleCardClick(item.titleCard as string)}
            />
          </li>
        ))}
      </Grid>
    </>
  )
}

export default ProjectsListDesktop
