import styled from 'styled-components'
import { colors } from '../../variables'

export const CardContainer = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const Header = styled.h3`
  height: 66pm;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 16px;
  text-align: center;
`

export const Body = styled.section`
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 16px;
`
