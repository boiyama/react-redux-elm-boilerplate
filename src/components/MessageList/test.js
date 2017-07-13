// @flow
import { shallow } from "enzyme"
import React from "react"
import MessageList from "./"

function setup() {
  const props = {
    input: "foo",
    messages: ["bar", "baz"],
  }

  const enzymeWrapper = shallow(<MessageList {...props} />)

  return {
    enzymeWrapper,
    props,
  }
}

describe("MessageForm component", () => {
  it("renders without crashing", () => {
    setup()
  })
})
