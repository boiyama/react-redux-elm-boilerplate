// @flow
import React from "react"
import shallow from "../../test-utils/shallow"
import MessageForm from "./"

function setup() {
  const props = {
    input: "",
    onInput: jest.fn(),
    onTouchTap: jest.fn(),
  }

  const enzymeWrapper = shallow(<MessageForm {...props} />)

  return {
    enzymeWrapper,
    props,
  }
}

describe("MessageForm component", () => {
  const { props, enzymeWrapper } = setup()

  it("TextField should call onInput", () => {
    const expected = new Event("test")

    enzymeWrapper
      .find("withStyles(Component)")
      .dive({ context: shallow.context })
      .dive({ context: shallow.context })
      .find("withStyles(Input)")
      .simulate("input", expected)
    expect(props.onInput).toBeCalledWith(expected)
  })

  it("Button should call onTouchTap", () => {
    enzymeWrapper.find("withStyles(Button)").simulate("touchTap")
    expect(props.onTouchTap).toBeCalled()
  })
})
