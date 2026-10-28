import styled, { createGlobalStyle } from 'styled-components'

import { breakpoints, colors, theme, weights } from './variables'
import { FormProps } from './hooks/useFormHook'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${theme.canvas};
    color: ${theme.body};
    font-family: Inter, system-ui, sans-serif;
    font-weight: ${weights.regular};
    font-size: 16px;
    line-height: 1.6;
    font-feature-settings: "calt", "kern", "liga", "ss03";
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-weight: 600;
    color: ${theme.ink};
  }

  h2 {
    font-size: 40px;
    font-weight: ${weights.medium};
    color: ${theme.ink};
    letter-spacing: 0.2px;
    line-height: 1.17;

    @media (max-width: ${breakpoints.layout}) {
      font-size: 32px;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: ${weights.medium};
    color: ${theme.ink};
    letter-spacing: 0.2px;
    line-height: 1.4;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
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
    outline: 1px solid ${colors.blue};
  }

  textarea {
    height: 150px;
    resize: none;
  }

  .two-columns {
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 32px;
    row-gap: 0px;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      flex-wrap: wrap;
      column-gap: 0px;
      row-gap: 16px;
    }
  }

  .grid-form {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-top: 8px;
  }
`

export const GlobalContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
`

export const TitleGlobal = styled.h2`
  margin-bottom: 32px;
`

export const FormContainer = styled.div<Pick<FormProps, 'borderColor'>>`
  font-weight: bold;
  display: block;
  width: 100%;

  textarea {
    border-color: ${(props) => props.borderColor || colors.red};
    color: ${(props) => props.borderColor || colors.red};
  }

  small {
    font-weight: 400;
  }
`

export default GlobalStyle
