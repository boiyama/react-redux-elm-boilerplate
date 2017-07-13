// @flow
import React from "react"
import shallow from "../test-utils/shallow"
import Home from "./Home"
// $FlowFixMe
import Examples, { __RewireAPI__ as ExamplesAPI } from "./Examples"
// $FlowFixMe
import Routes, { __RewireAPI__ as RoutesAPI } from "./"

const Contents = ExamplesAPI.__get__("Contents")
const RouteChildren = RoutesAPI.__get__("RouteChildren")

describe("Routes", () => {
  it("renders without crashing", () => {
    shallow(<Home />)
    shallow(<Contents />)
    shallow(<Examples />)
    shallow(<RouteChildren location={{ pathname: "/" }} />)
    shallow(<Routes />)
  })
})
