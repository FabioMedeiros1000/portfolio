import styled from 'styled-components'
import { FormGroupProps } from '.'
import { colors } from '../../variables'

export const FormContainer = styled.div<Pick<FormGroupProps, 'borderColor'>>`
  font-weight: bold;
  width: 100%;

  textarea {
    border-color: ${(props) => props.borderColor || colors.red};
    color: ${(props) => props.borderColor || colors.red};
  }

  small {
    font-weight: 400;
  }
`
