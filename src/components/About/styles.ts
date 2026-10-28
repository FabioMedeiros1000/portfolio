import styled from 'styled-components'
import { breakpoints, theme, weights } from '../../variables'
import { TitleGlobal } from '../../styles'

export const AboutTitle = styled(TitleGlobal)`
  font-size: 64px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.layout}) {
    font-size: 44px;
  }
`

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 64px;
  align-items: center;
  position: relative;

  img {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    object-fit: cover;
    padding: 6px;
    border: 1px solid ${theme.hairlineStrong};
    background: ${theme.surface};
    display: block;
    margin: 0 auto;
  }

  h3 {
    margin-top: 18px;
    text-align: center;
  }

  p {
    font-size: 18px;
    color: ${theme.body};
    max-width: 640px;
    text-align: left;

    b {
      color: ${theme.ink};
      font-weight: ${weights.medium};
    }
  }

  @media (max-width: ${breakpoints.layout}) {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;

    p {
      font-size: 17px;
      text-align: center;
      margin: 0 auto;
    }
  }
`
