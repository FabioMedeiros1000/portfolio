import styled from 'styled-components'
import { breakpoints } from '../../variables'
import { CardContainer } from '../Card/styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${breakpoints.pc}) {
    display: none;
  }
`

export const GridTablet = styled.div`
  display: none;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.pc}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`

export const ScrollbarContainer = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    ${CardContainer} {
      margin-bottom: 8px;
    }
  }
`

export const Title = styled.h2`
  margin-bottom: 24px;
`
