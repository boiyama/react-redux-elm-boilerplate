// @flow
import React from "react"
import { Helmet } from "react-helmet"
import { Route } from "react-router"
import Layout from "../components/Layout"
import Home from "./Home"
import Examples from "./Examples"

const RouteChildren = ({ location: { pathname } }) =>
  <div>
    <Helmet
      defaultTitle="React Redux Elm Boilerplate"
      titleTemplate="%s - React Redux Elm Boilerplate"
    />
    <Layout pathname={pathname}>
      <Route exact path="/" component={Home} />
      <Route path="/examples" component={Examples} />
    </Layout>
  </div>

export default () => <Route children={RouteChildren} />
