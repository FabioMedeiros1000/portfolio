import styled, { createGlobalStyle } from 'styled-components'

import { colors, weights } from './variables'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: Roboto, sans-serif;
        font-weight: ${weights.regular};
        font-size: 1rem;
        line-height: 1.625rem;
    }

    h1 {
        font-size: 3rem;
        font-weight: ${weights.bold};
        line-height: 3.625rem;
    }

    h2 {
        font-size: 2.25rem;
        font-weight: ${weights.medium};
        line-height: 2.9375rem;
    }

    h3 {
        font-size: 1.75rem;
        font-weight: ${weights.medium};
        line-height: 2.4375rem;
    }

    li {
        list-style: none;
    }

    input, textarea {
      padding: 8px;
      background-color: transparent;
      border: 1px solid ${colors.red};
      width: 100%;
      border-radius: 5px;
      color: ${colors.red};
      font-family: Roboto, sans-serif;
      font-size: 1rem;
    }

    input:focus, textarea:focus {
      border: 2px solid ${colors.blue};
      outline: none;
    }

    textarea {
      height: 150px;
      resize: none;
    }
`

export const GlobalContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export default GlobalStyle
