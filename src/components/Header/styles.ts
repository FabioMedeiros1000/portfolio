import styled from 'styled-components'
import { weights } from '../../variables'

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const Navbar = styled.nav`
  font-weight: ${weights.regular};
  font-size: 1rem;
  line-height: 1.625rem;

  li {
    display: inline-block;
    margin-left: 24px;
    cursor: pointer;
  }
`
