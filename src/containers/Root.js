// @flow
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import createMuiTheme from "material-ui/styles/theme"
import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import injectTapEventPlugin from "react-tap-event-plugin"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import Routes from "../routes"
const isProduction = process.env.NODE_ENV === "production"
const DevToolsHint = !process.env.DEMO && isProduction
  ? null
  : require("./DevToolsHint").default
const DevTools = !process.env.DEMO && isProduction
  ? null
  : require("./DevTools").default

injectTapEventPlugin()

const theme = createMuiTheme()

export default ({ history, store }: { history: History, store: Store }) =>
  <ReduxProvider store={store}>
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
          {DevToolsHint ? <DevToolsHint /> : null}
          {DevTools ? <DevTools /> : null}
        </div>
      </MuiThemeProvider>
    </StyledThemeProvider>
  </ReduxProvider>
