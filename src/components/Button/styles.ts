import styled, { css } from 'styled-components'
import { radii, theme } from '../../variables'
import { Props } from '.'

type Variant = NonNullable<Props['variant']>

const variants = {
  primary: css`
    background-color: ${theme.primary};
    color: ${theme.onPrimary};

    &:hover:not(:disabled) {
      background-color: ${theme.primaryPressed};
    }
  `,
  accent: css`
    background: linear-gradient(180deg, ${theme.accentTop}, ${theme.redDeep});
    color: ${theme.primary};
    border-color: ${theme.hairlineStrong};

    &:hover:not(:disabled) {
      background: linear-gradient(
        180deg,
        ${theme.accentTopHover},
        ${theme.accentBottomHover}
      );
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${theme.ink};
    border-color: ${theme.hairline};

    &:hover:not(:disabled) {
      border-color: ${theme.hairlineStrong};
      background-color: ${theme.surfaceElevated};
    }
  `
}

export const ButtonContainer = styled.button<{ $variant: Variant }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 18px;
  border-radius: ${radii.md};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  transition:
    background 0.15s,
    border-color 0.15s;

  ${(props) => variants[props.$variant]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${theme.red};
    outline-offset: 2px;
  }
`

export const Label = styled.span<{ $hidden: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  visibility: ${(props) => (props.$hidden ? 'hidden' : 'visible')};
`

export const Spinner = styled.span`
  position: absolute;
  inset: 0;
`
