// Assets
import * as actionTypes from '../actionTypes'

// Types
import FluxTypes from '../../ts/typos/FluxTypes'

export const fooAction: FluxTypes.ActionCreator = arg => ({
  type: actionTypes.FOO_ACTION,
  arg
})
