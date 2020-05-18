// Packages
import React from 'react'

// Components
import WithDataContextProvider from './src/higherOrderComponents/WithDataContextProvider'
import WithFluxContextProviders from './src/higherOrderComponents/WithFluxContextProviders'

export const wrapRootElement = ({ element }) => (
  <WithDataContextProvider>
    <WithFluxContextProviders>
      {element}
    </WithFluxContextProviders>
  </WithDataContextProvider>
)
