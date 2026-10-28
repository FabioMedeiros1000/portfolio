import styled from 'styled-components'
import { breakpoints, theme } from '../../variables'

export const Container = styled.div<{ $iaReply: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$iaReply ? 'flex-start' : 'flex-end')};
`

export const Box = styled.div<{ $iaReply: boolean }>`
  max-width: 75%;
  padding: 12px 16px;
  border-radius: 14px;
  font-size: 15px;
  margin-bottom: 12px;
  border: 1px solid ${theme.hairline};
  background: ${(props) =>
    props.$iaReply ? theme.surface : theme.surfaceElevated};
  color: ${(props) => (props.$iaReply ? theme.body : theme.ink)};
  ${(props) =>
    props.$iaReply
      ? 'border-bottom-left-radius: 4px;'
      : 'border-bottom-right-radius: 4px;'}

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
  }
`
