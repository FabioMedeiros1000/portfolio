import { Fade } from 'hamburger-react'
import { theme } from '../../variables'
import { ContainerIcon } from './styles'

type HamburgerIconProps = {
  isOpen: boolean
  onClick: () => void
}

const HamburgerIcon = ({ isOpen, onClick }: HamburgerIconProps) => {
  return (
    <ContainerIcon aria-label="Ícone do menu hamburguer">
      <Fade
        toggled={isOpen}
        toggle={onClick}
        direction="right"
        size={28}
        duration={0.5}
        color={theme.ink}
      />
    </ContainerIcon>
  )
}

export default HamburgerIcon
