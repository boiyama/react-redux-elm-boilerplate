// @flow
import { MenuItem } from "material-ui/Menu"
import Divider from "material-ui/Divider"
import Drawer from "material-ui/Drawer"
import Toolbar from "material-ui/Toolbar"
import React from "react"
import { Link } from "react-router-dom"
import Logo from "../Logo"

type Props = {
  open: boolean,
  docked: boolean,
  onRequestClose: () => void,
}

export default ({ open, docked, onRequestClose }: Props) =>
  <Drawer open={open} docked={docked} onRequestClose={onRequestClose}>
    <Toolbar>
      <Link to="/"><Logo width={120} height={24} /></Link>
      <Divider absolute />
    </Toolbar>
    <MenuItem component={Link} to="/examples">Examples</MenuItem>
  </Drawer>
