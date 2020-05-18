// Packages
import React from 'react'
import { ThemeProvider } from 'styled-components'

// Assets
import BaseStyles from '../../styles/base'
import theme from '../../styles/theme'

// Styled components
import { StyledAppLayout } from './styledComponents'

const AppLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppLayout>
        <BaseStyles />
        {children}
      </StyledAppLayout>
    </ThemeProvider>
  )
}

export default AppLayout
