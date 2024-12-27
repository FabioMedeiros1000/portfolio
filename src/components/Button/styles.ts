import styled from 'styled-components'
import { colors, weights } from '../../variables'
import { Props } from '.'

export const ButtonContainer = styled.button<Omit<Props, 'children'>>`
  padding: 8px;
  font-weight: ${weights.bold};
  font-size: 16px;
  background-color: ${(props) =>
    props.bgColor === 'red' ? colors.red : colors.white};
  border: none;
  color: ${(props) => (props.bgColor === 'red' ? colors.white : colors.red)};
  border-radius: 8px;
  width: 200px;
  cursor: pointer;
  margin-top: 8px;
`
