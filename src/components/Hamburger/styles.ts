import styled from 'styled-components'
import { breakpoints, colors } from '../../variables'

export const ContainerIcon = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    z-index: 1;
    position: relative;
  }
`

export const HamburgerContent = styled.ul`
  position: absolute;
  top: 180px;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: ${colors.red};
  text-align: center;
  overflow: hidden;
  max-height: 0;
  padding: 16px;
  opacity: 0;
  pointer-events: none;
  transition:
    max-height 0.5s ease,
    opacity 0.5s ease;

  li {
    padding: 8px 0;
    margin: 0;
  }

  &.is-open {
    max-height: 300px;
    opacity: 1;
    pointer-events: all;
  }
`
