// @flow
import { withStyles, createStyleSheet } from "material-ui/styles"
import Button from "material-ui/Button"
import MuiTextField from "material-ui/TextField"
import React from "react"
import styled from "styled-components"

const Root = styled.div`
  display: flex;
`

const TextField = withStyles(
  createStyleSheet("MessageFormTextField", {
    textField: {
      flex: 1,
    },
  })
)(({ classes, ...props }) =>
  <MuiTextField className={classes.textField} {...props} />
)

type Props = {
  input: string,
  onInput: (event: SyntheticInputEvent) => void,
  onTouchTap: () => void,
}

export default ({ input, onInput, onTouchTap }: Props) =>
  <Root>
    <TextField value={input} InputProps={{ onInput: onInput }} />
    <Button onTouchTap={onTouchTap} raised color="primary">Send</Button>
  </Root>
