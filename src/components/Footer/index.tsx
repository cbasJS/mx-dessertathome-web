// Packages
import React from 'react'

// Styled components
import { StyledFooter } from './styledComponents'

interface Props extends React.HTMLAttributes<HTMLElement> { }

const Footer: React.FC<Props> = ({ className }) => {
  return <StyledFooter className={className} />
}

export default Footer
