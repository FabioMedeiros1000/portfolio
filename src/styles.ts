import styled, { createGlobalStyle } from 'styled-components'

import { breakpoints, colors, weights } from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body, nav {
    font-family: Roboto, sans-serif;
    font-weight: ${weights.regular};
    font-size: 1rem;
    line-height: 1.625rem;
  }

  /* Tema claro */
  body.light {
    background-color: ${colors.white};
    color: ${colors.red};
  }

  /* Tema escuro */
  body.dark {
    background-color: ${colors.red};
    color: ${colors.white};
  }

  h1 {
    font-size: 3rem;
    font-weight: ${weights.bold};
    line-height: 3.625rem;

    @media (max-width: ${breakpoints.pc}) {
      font-size: 3.1rem;
      line-height: 3.2rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2.6rem;
      line-height: 3.2rem;
    }
  }

  h2 {
    font-size: 2.25rem;
    font-weight: ${weights.medium};
    line-height: 2.9375rem;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.8rem;
    }
  }

  h3 {
    font-size: 1.75rem;
    font-weight: ${weights.medium};
    line-height: 2.4375rem;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.3rem;
    }
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
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
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.pc}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`

export const TitleGlobal = styled.h2`
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 16px;
  }
`

export default GlobalStyle
