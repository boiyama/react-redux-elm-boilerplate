// @flow
import { withStyles, createStyleSheet } from "material-ui/styles"
import { white } from "material-ui/styles/colors"
import Button from "material-ui/Button"
import Typography from "material-ui/Typography"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../Logo"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 520px;
  background-color: ${({ theme }) => theme.palette.primary[500]};
`

const Title = withStyles(
  createStyleSheet("HeroTitle", {
    title: {
      color: white,
      marginBottom: "1rem",
      marginTop: "2rem",
    },
  })
)(({ classes, ...props }) =>
  <Typography type="display1" className={classes.title} {...props} />
)

const SubTitle = withStyles(
  createStyleSheet("HeroSubTitle", theme => ({
    subTitle: {
      color: white,
      fontWeight: theme.typography.fontWeightLight,
      marginBottom: "2rem",
    },
  }))
)(({ classes, ...props }) =>
  <Typography
    type="headline"
    component="h2"
    className={classes.subTitle}
    {...props}
  />
)

export default () =>
  <Root>
    <Logo width={400} height={100} />
    <Title>React Redux Elm Boilerplate</Title>
    <SubTitle>A delightful boilerplate for reliable webapps.</SubTitle>
    <Button component={Link} to="/examples" raised color="accent">
      Examples
    </Button>
  </Root>
