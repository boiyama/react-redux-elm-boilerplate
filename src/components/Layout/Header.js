// @flow
import { withStyles, createStyleSheet } from "material-ui/styles"
import MuiAppBar from "material-ui/AppBar"
import MuiIconButton from "material-ui/IconButton"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import MenuIcon from "material-ui-icons/Menu"
import React from "react"

const AppBar = withStyles(
  createStyleSheet("HeaderAppBar", theme => ({
    base: {
      transition: theme.transitions.create("width"),
    },
    home: {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    others: {
      width: "calc(100% - 168px)",
    },
  }))
)(({ classes, home, ...props }) =>
  <MuiAppBar
    className={
      home
        ? `${classes.base} ${classes.home}`
        : `${classes.base} ${classes.others}`
    }
    {...props}
  />
)

const IconButton = withStyles(
  createStyleSheet("HeaderIconButton", {
    hide: {
      display: "none",
    },
  })
)(({ classes, home, ...props }) =>
  <MuiIconButton
    className={home ? "" : `${classes.hide}`}
    color="contrast"
    {...props}
  />
)

const Title = withStyles(
  createStyleSheet("HeaderTitle", {
    title: {
      flex: 1,
    },
  })
)(({ classes, ...props }) =>
  <Typography
    type="title"
    color="inherit"
    className={classes.title}
    {...props}
  />
)

type Props = {
  home: boolean,
  title: string,
  onTouchTap: () => void,
}

export default ({ home, title, onTouchTap }: Props) =>
  <AppBar home={home}>
    <Toolbar>
      <IconButton home={home} onTouchTap={onTouchTap}>
        <MenuIcon />
      </IconButton>
      <Title>{title}</Title>
    </Toolbar>
  </AppBar>
