// @flow
import createMuiTheme from "material-ui/styles/theme"
import { createShallow } from "material-ui/test-utils"
import createBroadcast from "./create-broadcast"

export const theme = createMuiTheme()

export default createShallow({
  otherContext: {
    "__styled-components__": createBroadcast(theme).subscribe,
  },
})
