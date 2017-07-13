// @flow
import { white } from "material-ui/styles/colors"
import React from "react"
import styled from "styled-components"

const Root = styled.div`
  position: fixed;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  padding: 2px 10px 2px 16px;
  background-color: ${props => props.theme.palette.primary[500]};

  > p {
    color: ${white};
  }
`

export default () =>
  <Root>
    <p>Open DevTools<br />with Ctrl-H</p>
  </Root>
