// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux"
import type { State as ReactRouterReduxState } from "react-router-redux"

export type State = {
  +router: ReactRouterReduxState,
  +count: number,
  +chat: {
    input: string,
    messages: Array<string>,
  },
}

export type Action =
  | { type: "INCREASE" }
  | { type: "INCREASE_IF_ODD" }
  | { type: "INCREASE_ASYNC" }
  | { type: "DECREASE" }
  | { type: "INPUT", +payload: string }
  | { type: "SEND" }

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>
