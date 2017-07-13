// @flow
import React from "react"
import shallow from "../../test-utils/shallow"
// $FlowFixMe
import Hero, { __RewireAPI__ } from "./"

const Root = __RewireAPI__.__get__("Root")
const Title = __RewireAPI__.__get__("Title")
const SubTitle = __RewireAPI__.__get__("SubTitle")

describe("Hero component", () => {
  it("renders without crashing", () => {
    shallow(<Root />)
    shallow(<Title />)
    shallow(<SubTitle />)
    shallow(<Hero />)
  })
})
