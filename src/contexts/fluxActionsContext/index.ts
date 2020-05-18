// Packages
import { createContext } from 'react'

// Types
import FluxTypes from '../../ts/typos/FluxTypes'

const fluxActionsContext: FluxTypes.ActionsContext = createContext({
  actionCreators: {},
  dispatch: action => {}
})

export default fluxActionsContext
