import styled from 'styled-components'
import { breakpoints } from '../../variables'
import { CardContainer } from '../Card/styles'

export const ScrollbarContainer = styled.ul`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    ${CardContainer} {
      margin-bottom: 8px;
    }
  }
`
