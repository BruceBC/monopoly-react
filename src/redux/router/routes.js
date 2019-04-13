import React from 'react'
import { Route } from 'react-router-dom'

// Components
import App from '../../App'

const routes = [
  {
    exact: true,
    path: '/',
    component: App,
    title: 'Home',
  },
]

const routeComponents = routes.map((props, i) => (
  <Route key={`route-${i}`} {...props} />
))

export { routeComponents as default, routes as routeList }
