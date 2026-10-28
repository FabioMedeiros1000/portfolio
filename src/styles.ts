import styled, { createGlobalStyle } from 'styled-components'

import { breakpoints, radii, theme, weights } from './variables'

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
    width: 100%;
    background: ${theme.surfaceElevated};
    border: 1px solid ${theme.hairline};
    border-radius: ${radii.md};
    padding: 10px 12px;
    color: ${theme.ink};
    font: inherit;
    font-size: 16px;
    transition: border-color 0.15s, box-shadow 0.15s;
  }

  input::placeholder, textarea::placeholder {
    color: ${theme.ash};
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: ${theme.redFocus};
    box-shadow: 0 0 0 3px ${theme.redSoft};
  }

  textarea {
    height: 140px;
    resize: none;
  }

  .two-columns {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @media (max-width: ${breakpoints.layout}) {
      grid-template-columns: 1fr;
    }
  }

  .grid-form {
    display: grid;
    gap: 16px;
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

export const FormContainer = styled.div<{ $hasError?: boolean }>`
  display: grid;
  gap: 6px;
  width: 100%;

  small {
    font-size: 13px;
    color: ${(props) => (props.$hasError ? theme.red : theme.mute)};
  }
`

export default GlobalStyle
