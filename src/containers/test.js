// @flow
import createHistory from "history/createBrowserHistory"
import React from "react"
import configureStore from "redux-mock-store"
import shallow from "../test-utils/shallow"
// $FlowFixMe
import DevToolsHint, { __RewireAPI__ } from "./DevToolsHint"
import Root from "./Root"

describe("DevToolsHint container", () => {
  it("renders without crashing", () => {
    const DevToolsHintRoot = __RewireAPI__.__get__("Root")
    shallow(<DevToolsHintRoot />)
    shallow(<DevToolsHint />)
  })
})

describe("Root container", () => {
  it("renders without crashing", () => {
    const history = createHistory()
    const store = configureStore()()
    shallow(<Root history={history} store={store} />)
  })
})
