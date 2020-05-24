// Packages
import React from 'react'

// Styled components
import { StyledHeader, StyledContainer } from './styledComponents'

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <StyledContainer>
        hola
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
