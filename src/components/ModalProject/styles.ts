import styled from 'styled-components'
import { breakpoints, colors } from '../../variables'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  padding: 24px 35px;
  background-color: ${colors.red};
  color: ${colors.white};

  > img {
    width: 100%;
  }

  p {
    text-align: justify;
    margin-bottom: 8px;
  }

  ${ButtonContainer} {
    margin-right: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h3 {
      margin-top: 16px;
    }
  }
`

export const Skills = styled.div`
  margin-top: 24px;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`
