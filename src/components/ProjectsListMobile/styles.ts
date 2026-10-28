import styled from 'styled-components'
import { breakpoints } from '../../variables'

export const ScrollbarContainer = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const List = styled.ul`
  display: grid;
  gap: 16px;
`
