// @flow
import {
  routerReducer,
  routerMiddleware as createRouterMiddleware,
} from "react-router-redux"
import { applyMiddleware, compose, createStore } from "redux"
import createElmMiddleware, { reducer as elmReducer } from "redux-elm-middleware"
import Elm from "../modules/Reducer.elm"
const isProduction = process.env.NODE_ENV === "production"
const DevTools = !process.env.DEMO && isProduction
  ? null
  : require("../containers/DevTools").default

/* eslint-disable flowtype/no-weak-types */
type PreloadedState = Object
/* eslint-enable flowtype/no-weak-types */

export default (history: History, preloadedState: PreloadedState = {}) => {
  const reducer = (state, action) => ({
    ...state,
    ...elmReducer(state, action),
    router: routerReducer(state, action),
  })

  const { run, elmMiddleware } = createElmMiddleware(Elm.Reducer.worker())
  const routerMiddleware = createRouterMiddleware(history)

  const enhancer = DevTools
    ? compose(
        applyMiddleware(elmMiddleware, routerMiddleware),
        DevTools.instrument()
      )
    : applyMiddleware(elmMiddleware, routerMiddleware)

  const store = createStore(reducer, preloadedState, enhancer)
  run(store)
  store.dispatch({ type: "INITIALIZE" })

  return store
}
