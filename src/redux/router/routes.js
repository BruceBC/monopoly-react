import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Game from '../../game'
import NotFound from '../../notFound'
import Start from '../../start'

const routes = [
  {
    exact: true,
    path: '/',
    component: Start,
    title: 'Home',
  },
  {
    component: NotFound,
  },
]

const routeComponents = routes.map((props, i) => (
  <Route key={`route-${i}`} {...props} />
))

export { routeComponents as default, routes as routeList }
