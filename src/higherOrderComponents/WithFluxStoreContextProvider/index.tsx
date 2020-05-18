// Packages
import React, { useReducer } from 'react'

// Types
import FluxTypes from '../../ts/typos/FluxTypes'

interface Props {
  addToGlobalDispatchers: (dispatch: React.Dispatch<FluxTypes.ActionObject>, name: string) => void,
  addToGlobalState: (state: FluxTypes.State, name: string) => void,
  context: FluxTypes.StoreContext,
  initialState: FluxTypes.State,
  name: string,
  reducer: FluxTypes.Reducer
}

const WithFluxStoreContextProvider: React.FC<Props> = ({
  addToGlobalDispatchers,
  addToGlobalState,
  children,
  context,
  initialState,
  name,
  reducer
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  addToGlobalDispatchers(dispatch, name)
  addToGlobalState(state, name)

  return (
    <context.Provider value={{ state }}>
      {children}
    </context.Provider>
  )
}

export default WithFluxStoreContextProvider
