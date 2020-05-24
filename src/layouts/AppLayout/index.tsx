// Packages
import React from 'react'
import { ThemeProvider } from 'styled-components'

// Assets
import BaseStyles from '../../styles/base'
import theme from '../../styles/theme'

// Components
import Footer from '../../components/Footer'
import Header from '../../components/Header'

// Styled components
import { StyledAppLayout } from './styledComponents'

const AppLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles />
      <Header />
      <StyledAppLayout>
        {children}
      </StyledAppLayout>
      <Footer />
    </ThemeProvider>
  )
}

export default AppLayout
