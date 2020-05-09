// Packages
import { createGlobalStyle } from 'styled-components'

// Assets
import { ThemeType } from './theme'

export const MultilineTextContentStyles = createGlobalStyle<{theme: ThemeType}> `${({ theme }) => `
  h1, h2, h3, h4, h5, h6, p { margin: 0.75rem 0; }

  h1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child, p:first-child { margin-top: 0; }
`}`

export const StandarHeadersSizeStyles = createGlobalStyle<{theme: ThemeType}>`${({ theme }) => `
  h1, h2, h3 {
    font-weight: ${theme.font.weights.bold};
    line-height: ${theme.font.lineHeights.small};
  }

  h4, h5, h6 { font-weight: ${theme.font.weights.bold}; }
  h1 { font-size: 1.8rem; }
  h2 { font-size: 1.6em; }
  h3 { font-size: 1.4rem; }
  h4 { font-size: 1.2rem; }
  h5 { font-size: 1.1rem; }
  h6 { font-size: .95rem; }

  @media (min-width: ${theme.breakpoints.large}) {
    h1 { font-size: 2.3rem; }
    h2 { font-size: 2.05em; }
    h3 { font-size: 1.8rem; }
    h4 { font-size: 1.6rem; }
    h5 { font-size: 1.4rem; }
    h6 { font-size: 1.2rem; }
  }
`}`

export const StandarHeadersMarginsStyles = createGlobalStyle<{theme: ThemeType}>`${({ theme }) => `
  h1 { margin-top: 1.8rem; }
  h2 { margin-top: 1.6rem; }
  h3 { margin-top: 1.4rem; }
  h4 { margin-top: 1.2rem; }
  h5 { margin-top: 1.1rem; }
  h6 { margin-top: 0.95rem; }

  @media (min-width: ${theme.breakpoints.large}) {
    h1 { margin-top: 2.3rem; }
    h2 { margin-top: 2.05rem; }
    h3 { margin-top: 1.8rem; }
    h4 { margin-top: 1.6rem; }
    h5 { margin-top: 1.4rem; }
    h6 { margin-top: 1.2rem; }
  }
`}`

export const StandarListStyles = createGlobalStyle`
  ol {
    list-style-type: decimal;
    margin: 1rem 0;
  }
  ul {
    list-style-type: unset;
    margin: 1rem 0 1rem 1rem;
  }
`
