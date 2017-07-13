// @flow
import React from "react"
import shallow from "../../test-utils/shallow"
// $FlowFixMe
import WebSocket, { __RewireAPI__ } from "./"

const mapStateToFormProps = __RewireAPI__.__get__("mapStateToFormProps")
const mapDispatchToFormProps = __RewireAPI__.__get__("mapDispatchToFormProps")
const mapStateToListProps = __RewireAPI__.__get__("mapStateToListProps")
const Paper = __RewireAPI__.__get__("Paper")

describe("WebSocket container", () => {
  describe("mapStateToFormProps", () => {
    it("props should have input", () => {
      const input = "foo"
      const props = mapStateToFormProps({
        chat: {
          input,
          messages: [],
        },
        count: 0,
        router: {},
      })

      expect(props.input).toBe(input)
    })

    it("props should empty", () => {
      const props = mapStateToFormProps({
        count: 0,
        router: {},
      })

      expect(props.input).toBe("")
    })
  })

  describe("mapDispatchToFormProps", () => {
    const dispatch = jest.fn()
    const props = mapDispatchToFormProps(dispatch)

    it("onInput should dispatch input", () => {
      /* eslint-disable flowtype/no-weak-types */
      const event = ({ target: { value: "test" } }: any)
      /* eslint-enable flowtype/no-weak-types */
      props.onInput(event)
      expect(dispatch).toBeCalledWith({ payload: "test", type: "INPUT" })
    })

    it("onTouchTap should dispatch send", () => {
      props.onTouchTap()
      expect(dispatch).toBeCalledWith({ type: "SEND" })
    })
  })

  describe("mapStateToListProps", () => {
    it("props should have messages", () => {
      const messages = ["foo", "bar"]
      const props = mapStateToListProps({
        chat: {
          input: "a",
          messages,
        },
        count: 0,
        router: {},
      })

      expect(props.messages).toBe(messages)
    })

    it("props should have messages", () => {
      const props = mapStateToListProps({
        count: 0,
        router: {},
      })

      expect(props.messages).toEqual([])
    })
  })

  it("renders without crashing", () => {
    shallow(<Paper />)
    shallow(<WebSocket />)
  })
})
