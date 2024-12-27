import styled from 'styled-components'

type Props = {
  size: string
}

export const Title = styled.h2`
  margin-bottom: 8px;
`

export const FormData = styled.div`
  display: flex;
  gap: 8px 24px;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-bottom: 8px;

  p {
    font-weight: bold;
  }
`

export const FormGroup = styled.div<Props>`
  width: ${(props) => props.size};
`
