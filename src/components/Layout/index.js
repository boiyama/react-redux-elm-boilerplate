// @flow
import React, { Component, type Children } from "react"
import styled from "styled-components"
import Header from "./Header"
import Navigation from "./Navigation"

const MainContent = styled.div`
  ${({ padding, theme }) =>
    padding &&
    `
      padding-top: ${theme.spacing.unit * 11}px;
      padding-left: ${theme.spacing.unit * 24}px;
      padding-right: ${theme.spacing.unit * 3}px;
    `}
`

const publicUrl = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : ""

type Props = {
  children?: Children,
  pathname: string,
}

type State = {
  open: boolean,
}

export default class Layout extends Component<*, Props, State> {
  props: Props

  constructor(props: Props) {
    super(props)

    // $FlowFixMe
    this.handleMenuTap = this.handleMenuTap.bind(this)
    // $FlowFixMe
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  state = {
    open: this.props.pathname !== `${publicUrl}/`,
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      open: nextProps.pathname !== `${publicUrl}/`,
    })
  }

  handleMenuTap() {
    this.setState({ open: !this.state.open })
  }

  handleRequestClose() {
    this.setState({ open: false })
  }

  render() {
    const { children, pathname } = this.props

    const title =
      pathname.charAt(publicUrl.length + 1).toUpperCase() +
      pathname.slice(publicUrl.length + 2)

    return (
      <div>
        <Header
          home={pathname === `${publicUrl}/`}
          title={title}
          onTouchTap={this.handleMenuTap}
        />
        <Navigation
          open={this.state.open}
          docked={pathname !== `${publicUrl}/`}
          onRequestClose={this.handleRequestClose}
        />
        <MainContent padding={pathname !== `${publicUrl}/`}>
          {children}
        </MainContent>
      </div>
    )
  }
}
