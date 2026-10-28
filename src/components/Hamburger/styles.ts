import styled from 'styled-components'
import { breakpoints, radii, theme } from '../../variables'

type Props = {
  $isOpen: boolean
}

export const ContainerIcon = styled.div`
  display: none;

  @media (max-width: ${breakpoints.layout}) {
    display: block;
    z-index: 1;
    position: relative;
  }
`

export const MenuContainer = styled.nav<Props>`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  background: ${theme.canvas};
  border-top: 1px solid ${theme.hairlineSoft};
  padding: 8px 0 16px;
  width: 100%;

  li {
    list-style: none;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  a {
    display: block;
    padding: 12px;
    border-radius: ${radii.md};
    color: ${theme.body};
    font-size: 15px;
    text-decoration: none;
  }

  a:hover {
    background: ${theme.surfaceElevated};
    color: ${theme.ink};
  }

  @media (min-width: ${breakpoints.layout}) {
    display: none;
  }
`
