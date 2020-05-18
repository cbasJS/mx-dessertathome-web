// Packages
import React from 'react'

declare namespace FluxTypes {
  export interface State { [x: string]: any }

  export interface ActionObject { type: string, [x: string]: any }

  export type ActionFunction = (dispatch: GlobalDispatch, state: State) => ActionObject | void

  export type Action = ActionObject | ActionFunction

  export type ActionCreator =  (...args: any[]) => Action

  export interface ActionCreators { [x: string]: ActionCreator }

  export type GlobalDispatch = (action: Action) => void

  export type Reducer = (state: any, action: ActionObject) => State

  export interface ActionsContext extends React.Context<{
    actionCreators: ActionCreators
    dispatch: GlobalDispatch
  }> {}

  export interface StoreContext extends React.Context<{
    state: any
  }> {}
}

export default FluxTypes
