import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Game from '../../game'

const routes = [
  {
    exact: true,
    path: '/',
    component: Game,
    title: 'Home',
  },
]

const routeComponents = routes.map((props, i) => (
  <Route key={`route-${i}`} {...props} />
))

export { routeComponents as default, routes as routeList }
