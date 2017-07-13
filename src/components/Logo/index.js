// @flow
import React from "react"
import styled from "styled-components"
import ReactLogo from "./ReactLogo"
import ReduxLogo from "./ReduxLogo"
import ElmLogo from "./ElmLogo"

const Root = styled.div`
  display: flex;
  justify-content: space-between;
`

type Props = {
  width: number,
  height: number,
}

export default ({ width, height }: Props) =>
  <Root style={{ width }}>
    <ReactLogo style={{ height, width: "auto" }} />
    <ReduxLogo style={{ height, width: "auto" }} />
    <ElmLogo style={{ height, width: "auto" }} />
  </Root>
