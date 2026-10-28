import styled from 'styled-components'
import { radii, theme } from '../../variables'

export const MessageContainer = styled.div`
  display: grid;
  max-height: 320px;
  overflow-y: auto;
  padding: 0 4px;
  margin-bottom: 16px;
`

export const Palette = styled.div`
  border: 1px solid ${theme.hairline};
  border-radius: ${radii.xl};
  background: ${theme.surface};
  overflow: hidden;

  &:focus-within {
    border-color: ${theme.hairlineStrong};
  }
`

export const PaletteSearch = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 20px;

  > svg {
    flex: none;
    margin-top: 7px;
    color: ${theme.ash};
  }

  > div {
    flex: 1;
    min-width: 0;
  }

  textarea,
  textarea:focus {
    height: 88px;
    padding: 4px 0;
    font-size: 18px;
    background: transparent;
    border: none;
    box-shadow: none;
    outline: none;
  }
`

export const PaletteFoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 10px 12px 10px 20px;
  border-top: 1px solid ${theme.hairline};
  background: ${theme.surfaceElevated};

  small {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: ${theme.mute};

    &::before {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 2px;
      background: linear-gradient(135deg, ${theme.red}, ${theme.redDeep});
    }
  }
`

export const Kbd = styled.span`
  display: inline-grid;
  place-items: center;
  height: 20px;
  min-width: 20px;
  padding: 0 6px;
  margin-left: 4px;
  border-radius: ${radii.xs};
  background: ${theme.surfaceCard};
  border: 1px solid ${theme.hairline};
  color: ${theme.body};
  font-size: 12px;
`
