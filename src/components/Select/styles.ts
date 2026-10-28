import styled from 'styled-components'
import { radii, theme } from '../../variables'

export const SelectContainer = styled.select`
  background: ${theme.surfaceElevated};
  color: ${theme.ink};
  border: 1px solid ${theme.hairline};
  border-radius: ${radii.md};
  height: 32px;
  padding: 0 10px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${theme.red};
    outline-offset: 2px;
  }

  option {
    background: ${theme.surface};
  }
`
