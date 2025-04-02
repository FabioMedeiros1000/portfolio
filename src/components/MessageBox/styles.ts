import styled from 'styled-components'
import { breakpoints, colors } from '../../variables'
import { MessageBoxProps } from '.'

export const Container = styled.div<Pick<MessageBoxProps, 'iaReply'>>`
  display: flex;
  justify-content: ${(props) => (props.iaReply ? 'right' : 'left')};

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const Box = styled.div`
  width: 70%;
  background-color: ${colors.white};
  color: ${colors.red};
  padding: 16px;
  display: block;
  border-radius: 25px;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`
