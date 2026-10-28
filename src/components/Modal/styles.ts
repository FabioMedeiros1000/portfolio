import styled from 'styled-components'
import { radii, theme, weights } from '../../variables'

export const Dialog = styled.dialog`
  width: min(720px, calc(100% - 32px));
  padding: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.surface};
  color: ${theme.body};
  border: 1px solid ${theme.hairline};
  border-radius: ${radii.xl};
  overflow: hidden;

  &::backdrop {
    background-color: ${theme.backdrop};
    backdrop-filter: blur(4px);
  }
`

export const Header = styled.header`
  padding: 20px 56px 20px 24px;
  border-bottom: 1px solid ${theme.hairline};
  background-color: ${theme.surfaceElevated};
  color: ${theme.ink};
  font-size: 20px;
  font-weight: ${weights.medium};
  letter-spacing: 0.2px;
  text-align: left;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: ${radii.md};
  background: transparent;
  border: 1px solid transparent;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${theme.surfaceCard};
    border-color: ${theme.hairline};
  }

  img {
    width: 14px;
    height: 14px;
    opacity: 0.7;
  }
`
