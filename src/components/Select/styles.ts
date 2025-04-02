import styled from 'styled-components'
import { breakpoints, colors, weights } from '../../variables'

export const SelectContainer = styled.select`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${colors.white};
  color: ${colors.red};
  font-weight: ${weights.bold};

  option {
    font-weight: ${weights.bold};
  }

  @media (min-width: ${breakpoints.tablet}) {
    position: absolute;
    right: -34px;
    top: 31px;
  }

  @media (min-width: ${breakpoints.pc}) {
    position: absolute;
    right: -179px;
    top: 38px;
  }
`
