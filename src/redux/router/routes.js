import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Auth from '../../auth'
import Game from '../../game'
import Lobby from '../../lobby'
import Login from '../../containers/loginContainer'
import NotFound from '../../notFound'
import Start from '../../start'
import Test from '../../testing'

const routes = [
  {
    exact: true,
    path: '/',
    component: Start,
    title: 'Home',
  },
  {
    path: '/auth',
    component: Auth,
    title: 'Auth',
  },
  {
    path: '/lobby',
    component: Lobby,
    title: 'Lobby',
  },
  {
    path: '/login',
    component: Login,
    title: 'Login',
  },
  {
    path: '/test',
    component: Test,
    title: 'Test',
  },
  {
    component: NotFound,
  },
]

const routeComponents = routes.map((props, i) => (
  <Route key={`route-${i}`} {...props} />
))

export { routeComponents as default, routes as routeList }
