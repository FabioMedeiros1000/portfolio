import styled from 'styled-components'
import { breakpoints } from '../../variables'

export const ContentSkills = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: end;
  row-gap: 24px;

  @media (max-width: ${breakpoints.pc}) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
