// @flow
import createHistory from "history/createBrowserHistory"
import React from "react"
import { render } from "react-dom"
import Root from "./containers/Root"
import configureStore from "./modules/configureStore"
import registerServiceWorker from "./registerServiceWorker"

const history = createHistory()
const store = configureStore(history)

render(
  <Root history={history} store={store} />,
  document.getElementById("root")
)

registerServiceWorker()
