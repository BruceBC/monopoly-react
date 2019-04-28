import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Components
import Auth from '../../containers/authContainer'
import Game from '../../game'
import Lobby from '../../containers/lobbyContainer'
import Login from '../../containers/loginContainer'
import NotFound from '../../notFound'
import Register from '../../containers/registerContainer'
import Start from '../../containers/startContainer'
import Test from '../../containers/testContainer'
import Sessions from '../../containers/sessionsContainer'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      render={props => (
        <Auth {...props}>
          <Component {...rest} />
        </Auth>
      )}
    />
  )
}

const routes = [
  {
    exact: true,
    path: '/',
    component: Start,
    title: 'Home',
    private: false,
  },
  {
    path: '/lobby',
    component: Lobby,
    title: 'Lobby',
    private: true,
  },
  {
    path: '/login',
    component: Login,
    title: 'Login',
    private: false,
  },
  {
    path: '/register',
    component: Register,
    title: 'Register',
    private: false,
  },
  {
    path: '/sessions',
    component: Sessions,
    title: 'Sessions',
    private: true,
  },
  {
    path: '/test',
    component: Test,
    title: 'Test',
    private: false,
  },
  {
    component: NotFound,
    private: false,
  },
]

const routeComponents = routes.map((props, i) =>
  props.private ? (
    <PrivateRoute key={`route-${i}`} {...props} />
  ) : (
    <Route key={`route-${i}`} {...props} />
  )
)

export { routeComponents as default, routes as routeList }
