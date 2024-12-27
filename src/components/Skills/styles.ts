import styled from 'styled-components'

export const Content = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: end;
  row-gap: 24px;

  h2 {
    margin-bottom: 8px;
  }
`
