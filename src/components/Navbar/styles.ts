import styled from 'styled-components'
import { breakpoints, radii, theme } from '../../variables'

export const NavbarContainer = styled.nav`
  display: block;

  ul {
    display: flex;
    gap: 4px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    cursor: pointer;
    white-space: nowrap;
  }

  a {
    display: inline-block;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: ${theme.mute};
    padding: 4px 12px;
    border-radius: ${radii.full};
    transition:
      color 0.15s,
      background 0.15s;
    white-space: nowrap;
  }

  a:hover {
    color: ${theme.ink};
    background: ${theme.surfaceElevated};
  }

  @media (max-width: ${breakpoints.layout}) {
    display: none;
  }
`
