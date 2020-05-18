// Types
import FluxTypes from '../FluxTypes'

declare namespace AppStoreTypes {
  export interface AppStoreState extends FluxTypes.State {}

  export interface AppStoreContext extends React.Context<{
    state: AppStoreState
  }> {}
}

export default AppStoreTypes
