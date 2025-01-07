import styled from 'styled-components'
import { breakpoints, colors, weights } from '../../variables'
import { Props } from '.'

export const ButtonContainer = styled.button<Omit<Props, 'children'>>`
  padding: 12px 40px;
  font-weight: ${weights.bold};
  font-size: 16px;
  background-color: ${(props) =>
    props.bgColor === 'red' ? colors.red : colors.white};
  border: none;
  color: ${(props) => (props.bgColor === 'red' ? colors.white : colors.red)};
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
  display: inline-block;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px;
    display: block;
    width: 100%;
  }
`
