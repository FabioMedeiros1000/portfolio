import styled from 'styled-components'
import { breakpoints } from '../../variables'

type Props = {
  size: string
}

export const FormData = styled.div`
  display: flex;
  gap: 8px 24px;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-bottom: 8px;

  p {
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.pc}) {
    display: block;
  }
`

export const FormGroup = styled.div<Props>`
  width: ${(props) => props.size};

  @media (max-width: ${breakpoints.pc}) {
    width: 100%;
    margin-bottom: 8px;
  }
`
