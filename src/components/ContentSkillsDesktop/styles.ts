import styled from 'styled-components'
import { breakpoints } from '../../variables'

export const ContentSkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  @media (max-width: ${breakpoints.pc}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
