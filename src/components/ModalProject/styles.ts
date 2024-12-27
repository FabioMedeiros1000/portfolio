import styled from 'styled-components'
import { colors } from '../../variables'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  padding: 24px 35px;
  background-color: ${colors.red};
  color: ${colors.white};

  img {
    width: 100%;
  }

  p {
    margin-bottom: 24px;
  }

  ${ButtonContainer} {
    margin-right: 16px;
  }
`
