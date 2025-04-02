import { Fade } from 'hamburger-react'
import { ContainerIcon } from './styles'

type HamburgerIconProps = {
  isOpen: boolean
  onClick: () => void
}

const HamburgerIcon = ({ isOpen, onClick }: HamburgerIconProps) => {
  return (
    <ContainerIcon>
      <Fade
        toggled={isOpen}
        toggle={onClick}
        direction="right"
        size={40}
        duration={0.5}
      />
    </ContainerIcon>
  )
}

export default HamburgerIcon
