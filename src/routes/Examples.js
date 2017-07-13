// @flow
import { withStyles, createStyleSheet } from "material-ui/styles"
import Typography from "material-ui/Typography"
import React from "react"
import { Helmet } from "react-helmet"
import Counter from "../containers/Counter"
import WebSocket from "../containers/WebSocket"

const Contents = withStyles(
  createStyleSheet("ExamplesTitle", {
    counter: {
      marginBottom: "1rem",
    },
    flex: {
      display: "flex",
    },
    websocket: {
      marginBottom: "1rem",
      marginTop: "3rem",
    },
  })
)(({ classes, ...props }) =>
  <div>
    <Typography type="display2" className={classes.counter}>
      Counter
    </Typography>
    <div className={classes.flex}>
      <Counter />
    </div>
    <Typography type="display2" className={classes.websocket}>
      WebSocket
    </Typography>
    <div className={classes.flex}>
      <WebSocket />
    </div>
  </div>
)

export default () =>
  <div>
    <Helmet>
      <title>Examples</title>
    </Helmet>
    <Contents />
  </div>
