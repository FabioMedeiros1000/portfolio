import { KeyboardEvent } from 'react'

import { Arrow, Badge, Body, CardContainer, Header, TopRow } from './styles'

export type CardProps = {
  titleCard: string
  text: string
  index: number
} & React.HTMLAttributes<HTMLDivElement>

const Card = ({ titleCard, text, index, onClick, ...rest }: CardProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      event.currentTarget.click()
    }
  }

  return (
    <CardContainer
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <TopRow>
        <Badge>{String(index).padStart(2, '0')}</Badge>
        <Arrow aria-hidden="true">↗</Arrow>
      </TopRow>
      <Header>{titleCard}</Header>
      <Body>{text}</Body>
    </CardContainer>
  )
}

export default Card
