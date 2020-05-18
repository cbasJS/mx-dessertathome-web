// Packages
import _ from 'lodash'
import React from 'react'

// Assets
import * as globalActionCreators from '../../actions/actionCreators'

// Stores
// App
import appStoreContext from '../../contexts/appStoreContext'
import appStoreInitialState from '../../stores/appStore/initialState'
import appStoreReducer from '../../stores/appStore/reducer'

// Components
import WithFluxActionsContextProvider from '../WithFluxActionsContextProvider'
import WithFluxStoreContextProvider from '../WithFluxStoreContextProvider'

// Types
import FluxTypes from '../../ts/typos/FluxTypes'

const WithFluxContextProviders: React.FC = ({ children }) => {
  const globalState: { [x: string]: FluxTypes.State } = {}
  const globalDispatchers: { name: string, dispatch: React.Dispatch<FluxTypes.ActionObject> }[] = []

  const addToGlobalState = (state: FluxTypes.State, name: string) => {
    globalState[name] = state
  }

  const addToGlobalDispatchers = (dispatch: React.Dispatch<FluxTypes.ActionObject>, name: string) => {
    const index = _.findIndex(globalDispatchers, ['name', name])
    if (index !== -1) {
      globalDispatchers.splice(index, 1, { name, dispatch })
    } else {
      globalDispatchers.push({ name, dispatch })
    }
  }

  const globalDispatch = (action: FluxTypes.Action) => {
    if (typeof action === 'function') {
      const resultAction = action(globalDispatch, globalState)
      if (typeof resultAction === 'object') {
        globalDispatchers.forEach(({ dispatch }) => dispatch(resultAction))
      }
    } else {
      globalDispatchers.forEach(({ dispatch }) => dispatch(action))
    }
  }

  return (
    <WithFluxActionsContextProvider globalActionCreators={globalActionCreators} globalDispatch={globalDispatch}>
      <WithFluxStoreContextProvider addToGlobalDispatchers={addToGlobalDispatchers} addToGlobalState={addToGlobalState} context={appStoreContext} initialState={appStoreInitialState} name='appStore' reducer={appStoreReducer}>
        {children}
      </WithFluxStoreContextProvider>
    </WithFluxActionsContextProvider>
  )
}

export default WithFluxContextProviders
