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

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key='roboto-font' href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap' rel='stylesheet' />
  ])
}
