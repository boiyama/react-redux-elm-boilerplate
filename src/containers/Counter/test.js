// @flow
// $FlowFixMe
import { __RewireAPI__ } from "./"

const mapStateToProps = __RewireAPI__.__get__("mapStateToProps")
const mapDispatchToProps = __RewireAPI__.__get__("mapDispatchToProps")

describe("Counter container", () => {
  describe("mapStateToProps", () => {
    const count = 1
    const props = mapStateToProps({
      chat: {
        input: "",
        messages: [],
      },
      count,
      router: {},
    })

    it("should create props", () => {
      expect(props.count).toBe(count)
    })
  })

  describe("mapDispatchToProps", () => {
    const dispatch = jest.fn()
    const props = mapDispatchToProps(dispatch)

    it("onIncrease should dispatch increase", () => {
      props.onIncrease()
      expect(dispatch).toBeCalledWith({ type: "INCREASE" })
    })

    it("onIncreaseIfOdd should dispatch increaseIfOdd", () => {
      props.onIncreaseIfOdd()
      expect(dispatch).toBeCalledWith({ type: "INCREASE_IF_ODD" })
    })

    it("onIncreaseAsync should dispatch increaseAsync", () => {
      props.onIncreaseAsync()
      expect(dispatch).toBeCalledWith({ type: "INCREASE_ASYNC" })
    })

    it("onDecrease should dispatch decrease", () => {
      props.onDecrease()
      expect(dispatch).toBeCalledWith({ type: "DECREASE" })
    })
  })
})
