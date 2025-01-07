import { BeatLoader } from 'react-spinners'

import { colors } from '../../variables'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <BeatLoader color={colors.white} size={8} />
  </Container>
)

export default Loader
