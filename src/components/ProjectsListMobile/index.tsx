import Scrollbars from 'react-custom-scrollbars-2'
import { ScrollbarContainer } from './styles'
import Card from '../Card'

import { ProjectsListProps } from '../ProjectsList'

const ProjectsListMobile = ({
  items,
  trimText,
  handleCardClick
}: ProjectsListProps) => (
  <ScrollbarContainer>
    <Scrollbars style={{ height: 550 }}>
      {items.map((item, index) => (
        <li key={index}>
          <Card
            titleCard={item.titleCard}
            text={trimText(item.text)}
            title={`Clique aqui para ver mais detalhes sobre o projeto ${item.titleCard}`}
            onClick={() => handleCardClick(item.titleCard as string)}
          />
        </li>
      ))}
    </Scrollbars>
  </ScrollbarContainer>
)

export default ProjectsListMobile
