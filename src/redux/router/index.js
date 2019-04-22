import React from 'react'
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import routes from './routes'

const history = createBrowserHistory()

function MyRouter() {
  return (
    <Router history={history}>
      <>
        <Switch>{routes}</Switch>
      </>
    </Router>
  )
}

export default MyRouter
