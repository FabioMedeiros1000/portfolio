import styled from 'styled-components'
import { breakpoints } from '../../variables'

export const FooterGrid = styled.ul`
  display: flex;
  align-items: flex-end;
  column-gap: 57px;

  @media (max-width: ${breakpoints.pc}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
