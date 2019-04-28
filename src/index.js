import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './redux/router'
import Pusher from 'pusher-js'
import Echo from 'laravel-echo'
import * as serviceWorker from './serviceWorker'

// Redux
import { Provider } from 'react-redux'
import store from './redux'

// Globals
window.Pusher = Pusher

// TODO: Extract keys into .env file
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: '596d5107b85d93eda609',
  cluster: 'us2',
  encrypted: true,
  logToConsole: true,
  authEndpoint: 'http://localhost:8000/api/broadcast/auth',
  auth: {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  },
})

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
