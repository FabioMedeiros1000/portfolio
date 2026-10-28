import styled from 'styled-components'
import { radii, theme, weights } from '../../variables'

export const IconTile = styled.div<{ $wide: boolean }>`
  width: 44px;
  height: 44px;
  flex: none;
  border-radius: ${radii.md};
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, ${theme.surfaceCard}, ${theme.surface});
  border: 1px solid ${theme.hairline};

  img {
    width: ${(props) => (props.$wide ? '36px' : '24px')};
    height: 24px;
    object-fit: contain;
    filter: grayscale(1) brightness(1.6);
    opacity: 0.85;
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${theme.surface};
  border: 1px solid ${theme.hairline};
  border-radius: ${radii.lg};
  transition:
    border-color 0.15s,
    background 0.15s;

  &:hover {
    border-color: ${theme.hairlineStrong};
    background: ${theme.surfaceElevated};
  }

  p {
    font-size: 14px;
    font-weight: ${weights.medium};
    color: ${theme.ink};
    letter-spacing: 0.2px;
  }
`
