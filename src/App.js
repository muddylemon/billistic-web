import './favicon.ico'
import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline'
import "./app.scss"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import deepOrange from '@material-ui/core/colors/deepOrange'
import blueGrey from '@material-ui/core/colors/blueGrey'

import { Header } from "./features/Header"
import { BillList } from "./features/Expenses/ExpenseList"

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: deepOrange,
  },
  typography: {
    useNextVariants: true,
  },
})

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <section className="app">
          <BillList />
        </section>
      </React.Fragment>
    </MuiThemeProvider>
  )
}
