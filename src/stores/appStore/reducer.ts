// Assets
import * as actionTypes from '../../actions/actionTypes'

// Types
import AppStoreTypes from '../../ts/typos/AppStoreTypes'
import FluxTypes from '../../ts/typos/FluxTypes'

const reducer = (state: AppStoreTypes.AppStoreState, action: FluxTypes.ActionObject) => {
  let newState = state

  switch (action.type) {
    case actionTypes.FOO_ACTION:
      newState = { ...state, fooState: action.arg }
      break

    default:

  }

  return newState
}

export default reducer
