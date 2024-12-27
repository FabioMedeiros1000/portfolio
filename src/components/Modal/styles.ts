import styled from 'styled-components'
import { colors, weights } from '../../variables'

export const Dialog = styled.dialog`
  width: 1076px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;

  img {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
  }

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Header = styled.header`
  padding: 26px;
  text-align: center;
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 2.25rem;
  font-weight: ${weights.medium};
  line-height: 2.9375rem;
`
