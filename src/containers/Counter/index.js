// @flow
import { connect } from "react-redux"
import Counter from "../../components/Counter"
import type { State, Dispatch } from "../../modules/types"

const mapStateToProps = (state: State) => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrease: () => {
    dispatch({ type: "DECREASE" })
  },
  onIncrease: () => {
    dispatch({ type: "INCREASE" })
  },
  onIncreaseAsync: () => {
    dispatch({ type: "INCREASE_ASYNC" })
  },
  onIncreaseIfOdd: () => {
    dispatch({ type: "INCREASE_IF_ODD" })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
