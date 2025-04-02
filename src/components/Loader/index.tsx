import { BeatLoader } from 'react-spinners'

import { Container } from './styles'

type Props = {
  color: string
}

const Loader = ({ color }: Props) => (
  <Container>
    <BeatLoader color={color} size={8} />
  </Container>
)

export default Loader
