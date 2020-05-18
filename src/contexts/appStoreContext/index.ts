// Packages
import { createContext } from 'react'

// Assets
import initialState from '../../stores/appStore/initialState'

// Types
import AppStoreTypes from '../../ts/typos/AppStoreTypes'

const appStoreContext: AppStoreTypes.AppStoreContext = createContext({
  state: initialState
})

export default appStoreContext
