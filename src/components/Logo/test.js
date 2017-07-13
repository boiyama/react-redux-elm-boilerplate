// @flow
import React from "react"
import { shallow } from "enzyme"
import ReactLogo from "./ReactLogo"
import ReduxLogo from "./ReduxLogo"
import ElmLogo from "./ElmLogo"
import Logo from "./"

describe("Logo Component", () => {
  it("renders without crashing", () => {
    shallow(<ReactLogo />)
    shallow(<ReduxLogo />)
    shallow(<ElmLogo />)
    shallow(<Logo height={24} width={96} />)
  })
})
