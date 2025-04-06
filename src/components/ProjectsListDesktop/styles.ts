import styled from 'styled-components'
import { breakpoints } from '../../variables'

export const Grid = styled.ul`
  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.pc}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media (min-width: ${breakpoints.pc}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }

  display: none;
`
