import styled from 'styled-components'
import { colors } from '../../variables'

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Navbar = styled.nav`
  li {
    display: inline-block;
    margin-left: 24px;
    cursor: pointer;

    a {
      position: relative;
      padding-bottom: 4px;
    }

    a::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background-color: ${colors.white};
      transition: width 0.3s ease;
    }

    a:hover::before {
      width: 100%;
    }
  }
`
