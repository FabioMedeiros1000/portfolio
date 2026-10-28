import styled, { css } from 'styled-components'
import { breakpoints, theme } from '../../variables'

type Props = {
  $variant: 'hero' | 'compact'
}

const variants = {
  hero: css`
    top: -200px;
    right: 0;
    width: 70%;
    height: 760px;
    background: repeating-linear-gradient(
      115deg,
      transparent 0 70px,
      ${theme.red} 70px 120px,
      ${theme.redDeep} 120px 150px,
      transparent 150px 230px
    );
    filter: blur(26px);
    opacity: 0.8;
    -webkit-mask-image: radial-gradient(
      ellipse 50% 42% at 62% 40%,
      #000 15%,
      transparent 70%
    );
    mask-image: radial-gradient(
      ellipse 50% 42% at 62% 40%,
      #000 15%,
      transparent 70%
    );

    @media (max-width: ${breakpoints.layout}) {
      width: 100%;
    }
  `,
  compact: css`
    right: -60px;
    top: -80px;
    width: 320px;
    height: 260px;
    background: repeating-linear-gradient(
      115deg,
      transparent 0 40px,
      ${theme.redDeep} 40px 70px,
      transparent 70px 110px
    );
    filter: blur(30px);
    opacity: 0.35;
  `
}

export const Stripes = styled.div<Props>`
  position: absolute;
  pointer-events: none;

  ${({ $variant }) => variants[$variant]}
`
