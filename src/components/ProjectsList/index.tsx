import { HTMLAttributes } from 'react'
import { CardProps } from '../Card'
import ProjectsListDesktop from '../ProjectsListDesktop'
import ProjectsListMobile from '../ProjectsListMobile'

export type ProjectsListProps = {
  items: CardProps[]
  trimText: (text: string) => string
  handleCardClick: (itemTitle: string) => void
} & HTMLAttributes<HTMLDivElement>

const ProjectsList = ({
  items,
  trimText,
  handleCardClick
}: ProjectsListProps) => (
  <>
    <ProjectsListDesktop
      items={items}
      trimText={trimText}
      handleCardClick={handleCardClick}
    />
    <ProjectsListMobile
      items={items}
      trimText={trimText}
      handleCardClick={handleCardClick}
    />
  </>
)

export default ProjectsList
