import styled from 'styled-components'
import { breakpoints } from '../../variables'

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;

  h1 {
    width: min-content;
  }

  @media (max-width: ${breakpoints.pc}) {
    gap: 12px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .flex-col {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
