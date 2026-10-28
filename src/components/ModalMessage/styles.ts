import styled from 'styled-components'
import { theme } from '../../variables'

export const Container = styled.div`
  padding: 24px;
  color: ${theme.body};

  a,
  strong,
  b {
    color: ${theme.ink};
  }
`
