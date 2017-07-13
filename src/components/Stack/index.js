// @flow
import { withStyles, createStyleSheet } from "material-ui/styles"
import MuiTable, {
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "material-ui/Table"
import Typography from "material-ui/Typography"
import React from "react"
import styled from "styled-components"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    padding-left: 20px;
  }
`

const Title = withStyles(
  createStyleSheet("StackTitle", theme => ({
    title: {
      fontWeight: theme.typography.fontWeightLight,
      marginTop: "2rem",
    },
  }))
)(({ classes, ...props }) =>
  <Typography type="display1" className={classes.title} {...props} />
)

const Table = withStyles(
  createStyleSheet("StackTable", { table: { width: "auto" } })
)(({ classes, ...props }) => <MuiTable className={classes.table} {...props} />)

/* eslint-disable jsx-a11y/anchor-has-content */
const A = props => <a target="_blank" rel="noopener noreferrer" {...props} />
/* eslint-enable jsx-a11y/anchor-has-content */

export default () =>
  <Root>
    <Title>Stack</Title>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Desctiption</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <A href="https://github.com/facebook/react">
              React
            </A>
          </TableCell>
          <TableCell>
            <ul>
              <li>Component-based UI library</li>
              <li>Huge ecosystem and community</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <A href="https://github.com/reactjs/redux">
              Redux
            </A>
          </TableCell>
          <TableCell>
            <ul>
              <li>Application state management library</li>
              <li>
                Making React components stateless and keeping them maintainable
                <br />by supervising component&apos;s lifecycle instead of React
              </li>
              <li>Large ecosystem and community</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <A href="http://elm-lang.org/">
              Elm
            </A>
          </TableCell>
          <TableCell>
            <ul>
              <li>
                A language that generates JavaScript with no runtime exceptions
              </li>
              <li>Functions are pure and values are immutable</li>
              <li>Expanding ecosystem and community</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <A href="https://github.com/stoeffel/redux-elm-middleware">
              redux-elm-middleware
            </A>
          </TableCell>
          <TableCell>
            <ul>
              <li>A Redux middleware that uses Elm as a reducer</li>
              <li>
                To creating reliable apps, Elm makes Redux state immutable
                <br />and makes side-effect decouple
              </li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <A href="https://github.com/callemall/material-ui">
              Material-UI
            </A>
          </TableCell>
          <TableCell>
            React Components that Implement Google's Material Design
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <A href="https://github.com/styled-components/styled-components">
              styled-components
            </A>
          </TableCell>
          <TableCell>
            Applying CSS to React Components by writing actual CSS code with
            tagged template literal
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <A href="https://github.com/ReactTraining/react-router">
              React Router
            </A>
          </TableCell>
          <TableCell>Declarative routing for React</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <A href="https://github.com/flowtype/flow-bin">
              Flow
            </A>
          </TableCell>
          <TableCell>
            <ul>
              <li>A static type checker for JavaScript</li>
              <li>
                No runtime errors due to type safety and non-nullable type
              </li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <A href="https://github.com/eslint/eslint">
              ESLint
            </A>
          </TableCell>
          <TableCell>
            <ul>
              <li>A pluggable linting utility for JavaScript and JSX</li>
              <li>
                Enforces code style guide to discover problems with JS code
              </li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <A href="https://github.com/facebook/jest">
              Jest
            </A>
          </TableCell>
          <TableCell>
            <ul>
              <li>A complete and easy to set up JavaScript testing solution</li>
              <li>captures snapshots of React trees to simplify UI testing</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <A href="https://github.com/airbnb/enzyme">
              Enzyme
            </A>
          </TableCell>
          <TableCell>
            <ul>
              <li>A testing utility for React</li>
              <li>Makes it easier to manipulate React Components</li>
            </ul>

          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <A href="https://github.com/gaearon/redux-devtools">
              Redux DevTools
            </A>
          </TableCell>
          <TableCell>
            DevTools for Redux with hot reloading, action replay
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Root>
