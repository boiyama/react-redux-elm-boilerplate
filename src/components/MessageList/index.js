// @flow
import List, { ListItem, ListItemText } from "material-ui/List"
import React from "react"

type Props = {
  messages: Array<string>,
}

export default ({ messages }: Props) =>
  <List>
    {messages.map((message, i) =>
      <ListItem key={i} button>
        <ListItemText primary={message} />
      </ListItem>
    )}
  </List>
