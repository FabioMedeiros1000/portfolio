import styled from 'styled-components'
import { breakpoints } from '../../variables'

type Props = {
  isOpen: boolean
}

export const ContainerIcon = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    z-index: 1;
    position: relative;
  }
`

export const MenuContainer = styled.nav<Props>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background-color: transparent;
  width: 100%;

  li {
    list-style: none;
    padding: 12px;
    text-align: center;
  }
`
