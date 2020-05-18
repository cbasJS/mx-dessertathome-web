// Packages
import { createGlobalStyle } from 'styled-components'

// Assets
import { ThemeType } from './theme'

const BaseStyles = createGlobalStyle<{theme: ThemeType}> `${({ theme }) => `
  *, *::before, *::after {
    box-sizing: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weights.normal};
    line-height: 1;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, table {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.font};
  }

  ol, ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  input, textarea, select, button {
    appearance: none;
    background: none;
    border: 0 none ${theme.colors.transparent};
    border-radius: 0;
    color: ${theme.colors.font};
    margin: 0;
    padding: 0;
  }

  input::placeholder, textarea::placeholder, select::placeholder, button::placeholder {
    opacity: 0.5;
  }

  fieldset {
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  a {
    color: ${theme.colors.tertiary};
    text-decoration: none;
  }

  @media (min-width: ${theme.breakpoints.small}px) and (min-height: ${theme.breakpoints.small}px) {
    html {
      font-size: ${theme.font.sizes.medium};
    }
  }

  @media (min-width: ${theme.breakpoints.large}px) and (min-height: ${theme.breakpoints.medium}px) {
    html {
      font-size: ${theme.font.sizes.large};
    }
  }

`}`

export default BaseStyles
