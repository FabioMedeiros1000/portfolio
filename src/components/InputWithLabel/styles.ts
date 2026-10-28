import styled from 'styled-components'

import { theme, weights } from '../../variables'

export const Wrapper = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;

  label {
    font-size: 14px;
    font-weight: ${weights.medium};
    letter-spacing: 0.2px;
    color: ${theme.body};
  }
`
