import styled from 'styled-components'
import { radii, theme } from '../../variables'

export const Arrow = styled.span`
  color: ${theme.ash};
  transition:
    color 0.15s,
    transform 0.15s;
`

export const CardContainer = styled.div`
  background: ${theme.surface};
  border: 1px solid ${theme.hairline};
  border-radius: ${radii.lg};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  height: 100%;
  transition:
    border-color 0.15s,
    background 0.15s;

  &:hover {
    border-color: ${theme.hairlineStrong};
    background: ${theme.surfaceElevated};

    ${Arrow} {
      color: ${theme.red};
      transform: translate(2px, -2px);
    }
  }

  &:focus-visible {
    outline: 2px solid ${theme.red};
    outline-offset: 2px;
  }
`

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`

export const Badge = styled.span`
  font-size: 12px;
  letter-spacing: 0.4px;
  color: ${theme.mute};
  background: ${theme.surfaceElevated};
  border: 1px solid ${theme.hairline};
  border-radius: ${radii.xs};
  padding: 2px 8px;
`

export const Header = styled.h3``

export const Body = styled.p`
  font-size: 14px;
  color: ${theme.mute};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
