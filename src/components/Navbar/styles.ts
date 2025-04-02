import styled from 'styled-components'
import { breakpoints, colors } from '../../variables'

export const NavbarContainer = styled.nav`
  width: 100%;
  display: block;

  margin-left: 56px;

  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
  }

  a {
    position: relative;
    padding-bottom: 4px;
    display: inline-block;
    text-decoration: none;
    color: inherit;
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

  @media (max-width: ${breakpoints.pc}) {
    margin-left: 0;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      li {
        margin: 0 auto;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
