import styled, { css } from 'styled-components'
import { breakpoints, spacing } from '../../variables'
import { Props } from '.'

type VariantProps = { $variant: NonNullable<Props['variant']> }

const variants = {
  default: css`
    padding: ${spacing.section} 0;

    @media (max-width: ${breakpoints.layout}) {
      padding: 72px 0;
    }
  `,
  hero: css`
    padding: 136px 0 112px;
    overflow: hidden;

    @media (max-width: ${breakpoints.layout}) {
      padding: 96px 0 72px;
    }
  `,
  bare: css``
}

export const SectionContainer = styled.section<VariantProps>`
  position: relative;
  ${(props) => variants[props.$variant]}
`
