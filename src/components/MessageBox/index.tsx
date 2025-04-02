import { Box, Container } from './styles'

export type MessageBoxProps = {
  iaReply: boolean
  children: React.ReactNode
}

const MessageBox = ({ iaReply, children }: MessageBoxProps) => {
  return (
    <Container iaReply={iaReply}>
      <Box>{children}</Box>
    </Container>
  )
}

export default MessageBox
