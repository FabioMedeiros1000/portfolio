import styled from 'styled-components'
import { breakpoints } from '../../variables'

export const SectionContent = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 24px;

  p {
    margin-top: 24px;
  }

  @media (max-width: ${breakpoints.pc}) {
    p {
      margin-top: 0;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    div {
      text-align: center;
    }

    p {
      margin-top: 24px;
    }
  }
`
