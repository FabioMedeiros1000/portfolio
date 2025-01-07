import styled from 'styled-components'
import { breakpoints } from '../../variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 8px;
  }
`
