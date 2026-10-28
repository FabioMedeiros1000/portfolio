import styled from 'styled-components'
import { breakpoints } from '../../variables'

export const Grid = styled.ul`
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (min-width: ${breakpoints.pc}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
