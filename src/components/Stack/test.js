// @flow
import React from "react"
import shallow from "../../test-utils/shallow"
// $FlowFixMe
import Stack, { __RewireAPI__ } from "./"

const Title = __RewireAPI__.__get__("Title")
const A = __RewireAPI__.__get__("A")
const Table = __RewireAPI__.__get__("Table")

describe("Stack component", () => {
  it("renders without crashing", () => {
    shallow(<Title />)
    shallow(<A />)
    shallow(<Table />)
    shallow(<Stack />)
  })
})
