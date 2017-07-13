// @flow
import React from "react"
import shallow from "../../test-utils/shallow"
// $FlowFixMe
import Header, { __RewireAPI__ as HeaderAPI } from "./Header"
import Navigation from "./Navigation"
// $FlowFixMe
import Layout, { __RewireAPI__ as LayoutAPI } from "./"

const AppBar = HeaderAPI.__get__("AppBar")
const IconButton = HeaderAPI.__get__("IconButton")
const Title = HeaderAPI.__get__("Title")
const MainContent = LayoutAPI.__get__("MainContent")

describe("Layout Component", () => {
  it("renders without crashing", () => {
    shallow(<AppBar home />)
    shallow(<AppBar home={false} />)
    shallow(<IconButton home />)
    shallow(<IconButton home={false} />)
    shallow(<Title />)
    shallow(<Header home title="test" onTouchTap={jest.fn()} />)
    shallow(<Navigation open docked onRequestClose={jest.fn()} />)
    shallow(<MainContent padding />)
    shallow(<Layout pathname="/" />)
  })
})
