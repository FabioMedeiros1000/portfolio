import styled from 'styled-components'
import { breakpoints, colors, weights } from '../../variables'

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.pc}) {
    h1 {
      width: min-content;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`

export const Navbar = styled.nav`
  display: block;

  li {
    display: inline-block;
    margin-left: 24px;
    cursor: pointer;

    @media (max-width: ${breakpoints.pc}) {
      margin-left: 16px;
    }

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

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Select = styled.select`
  position: absolute;
  top: 28px;
  right: 28px;
  padding: 8px;
  background-color: ${colors.white};
  color: ${colors.red};
  font-weight: ${weights.bold};

  option {
    font-weight: ${weights.bold};
  }
`
