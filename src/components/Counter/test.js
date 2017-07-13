// @flow
import { shallow } from "enzyme"
import React from "react"
import Counter from "./"

function setup() {
  const props = {
    count: 0,
    onDecrease: jest.fn(),
    onIncrease: jest.fn(),
    onIncreaseAsync: jest.fn(),
    onIncreaseIfOdd: jest.fn(),
  }

  const enzymeWrapper = shallow(<Counter {...props} />)

  return {
    enzymeWrapper,
    props,
  }
}

describe("Counter component", () => {
  const { props, enzymeWrapper } = setup()
  const buttons = enzymeWrapper.find("withStyles(Button)")

  it("first button should call onIncrease", () => {
    buttons.at(0).simulate("touchTap")
    expect(props.onIncrease).toBeCalled()
  })

  it("second button should call onIncreaseIfOdd", () => {
    buttons.at(1).simulate("touchTap")
    expect(props.onIncreaseIfOdd).toBeCalled()
  })

  it("third button should call onIncreaseAsync", () => {
    buttons.at(2).simulate("touchTap")
    expect(props.onIncreaseAsync).toBeCalled()
  })

  it("fourth button should call onDecrease", () => {
    buttons.at(3).simulate("touchTap")
    expect(props.onDecrease).toBeCalled()
  })
})
