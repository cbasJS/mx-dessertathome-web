// Packages
import React from 'react'

// Assets
import fluxActionsContext from '../../contexts/fluxActionsContext'

// Types
import FluxTypes from '../../ts/typos/FluxTypes'

interface Props {
  globalActionCreators: FluxTypes.ActionCreators,
  globalDispatch: FluxTypes.GlobalDispatch
}

const WithFluxActionsContextProvider: React.FC<Props> = ({ children, globalActionCreators, globalDispatch }) => {
  return (
    <fluxActionsContext.Provider value={{ actionCreators: globalActionCreators, dispatch: globalDispatch }}>
      {children}
    </fluxActionsContext.Provider>
  )
}

export default WithFluxActionsContextProvider
