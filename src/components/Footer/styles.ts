import styled from 'styled-components'
import Section from '../Section'
import { breakpoints, theme } from '../../variables'

export const FooterWrapper = styled(Section)`
  border-top: 1px solid ${theme.hairlineSoft};
  padding: 48px 0;
`

export const FooterGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: ${breakpoints.layout}) {
    flex-direction: column;
  }
`
