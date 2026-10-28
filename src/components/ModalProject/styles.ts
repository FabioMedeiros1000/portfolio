import styled from 'styled-components'
import { theme } from '../../variables'

export const Container = styled.div`
  padding: 24px;
  display: grid;
  gap: 16px;
  color: ${theme.body};

  p {
    font-size: 15px;
  }

  h3 {
    font-size: 14px;
    color: ${theme.mute};
  }
`

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`
