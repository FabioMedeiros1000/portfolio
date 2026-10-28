import styled from 'styled-components'
import { breakpoints, radii, theme } from '../../variables'

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  padding: 40px;
  border-radius: ${radii.xl};
  border: 1px solid ${theme.hairline};
  background: ${theme.surface};
  position: relative;
  overflow: hidden;

  @media (max-width: ${breakpoints.layout}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 28px;
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 1;

  h2 {
    margin-bottom: 8px;
  }

  p {
    color: ${theme.mute};
    max-width: 560px;
  }
`

export const Action = styled.div`
  position: relative;
  z-index: 1;
`
