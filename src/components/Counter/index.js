// @flow
import Button from "material-ui/Button"
import Card, { CardActions, CardHeader } from "material-ui/Card"
import React from "react"

type Props = {
  count: number,
  onIncrease: () => void,
  onIncreaseIfOdd: () => void,
  onIncreaseAsync: () => void,
  onDecrease: () => void,
}

export default ({
  count,
  onIncrease,
  onIncreaseIfOdd,
  onIncreaseAsync,
  onDecrease,
}: Props) =>
  <Card>
    <CardHeader title={count} />
    <CardActions>
      <Button onTouchTap={onIncrease} color="primary">Increase</Button>
      <Button onTouchTap={onIncreaseIfOdd} color="primary">
        Increase if odd
      </Button>
      <Button onTouchTap={onIncreaseAsync} color="primary">
        Increase async
      </Button>
      <Button onTouchTap={onDecrease} color="accent">Decrease</Button>
    </CardActions>
  </Card>
