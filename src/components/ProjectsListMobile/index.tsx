import Scrollbars from 'react-custom-scrollbars-2'
import { List, ScrollbarContainer } from './styles'
import Card from '../Card'

import { useTranslation } from 'react-i18next'

import { ProjectsListProps } from '../ProjectsList'

const ProjectsListMobile = ({
  items,
  trimText,
  handleCardClick
}: ProjectsListProps) => {
  const { t } = useTranslation()

  return (
    <ScrollbarContainer>
      <Scrollbars>
        <List>
          {items.map((item, index) => (
            <li key={index}>
              <Card
                titleCard={item.titleCard}
                text={trimText(item.text)}
                index={index + 1}
                title={`${t('projects.titleLabel')} ${item.titleCard.toLowerCase()}`}
                onClick={() => handleCardClick(item.titleCard as string)}
              />
            </li>
          ))}
        </List>
      </Scrollbars>
    </ScrollbarContainer>
  )
}

export default ProjectsListMobile
