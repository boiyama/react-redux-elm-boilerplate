// @flow
import { withStyles, createStyleSheet } from "material-ui/styles"
import MuiPaper from "material-ui/Paper"
import React from "react"
import { connect } from "react-redux"
import MessageForm from "../../components/MessageForm"
import MessageList from "../../components/MessageList"
import type { State, Dispatch } from "../../modules/types"

const mapStateToFormProps = (state: State) => ({
  input: state.chat ? state.chat.input : "",
})

const mapDispatchToFormProps = (dispatch: Dispatch) => ({
  onInput: (event: SyntheticInputEvent) => {
    dispatch({ payload: event.target.value, type: "INPUT" })
  },
  onTouchTap: () => {
    dispatch({ type: "SEND" })
  },
})

const WebSocketForm = connect(mapStateToFormProps, mapDispatchToFormProps)(
  MessageForm
)

const mapStateToListProps = (state: State) => ({
  messages: state.chat ? state.chat.messages : [],
})

const WebSocketList = connect(mapStateToListProps, null)(MessageList)

const Paper = withStyles(
  createStyleSheet("WebSocketPaper", {
    paper: {
      padding: 16,
    },
  })
)(({ classes, ...props }) => <MuiPaper className={classes.paper} {...props} />)

export default () =>
  <Paper>
    <WebSocketForm />
    <WebSocketList />
  </Paper>
