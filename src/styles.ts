import styled, { createGlobalStyle } from 'styled-components'

import { weights } from './variables'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: Roboto, sans-serif;
        font-weight: ${weights.regular};
        font-size: 18px;
        line-height: 35.2px;
    }

    h1 {
        font-size: 64px;
        font-weight: ${weights.bold};
        line-height: 72px;
    }

    h2 {
        font-size: 40px;
        font-weight: ${weights.bold};
        line-height: 48px;
    }

    h3 {
        font-size: 28px;
        font-weight: ${weights.medium};
        line-height: 33.6px;
    }

    li {
        list-style: none;
    }
`

export const GlobalContainer = styled.div`
  max-width: 1290px;
  margin: 0 auto;
`

export default GlobalStyle
