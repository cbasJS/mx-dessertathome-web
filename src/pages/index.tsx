// Packages
import React from 'react'

// Styled components
import { StyledIndexPage } from './styledComponents'

// Components
import AppLayout from '../layouts/AppLayout'

const IndexPage: React.FC = () => {
  return (
    <AppLayout>
      <StyledIndexPage>Index page</StyledIndexPage>
    </AppLayout>
  )
}

export default IndexPage
