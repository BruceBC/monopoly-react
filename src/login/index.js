import React, { memo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { string } from '../shared/utils'

const Login = props => {
  // State
  const [loaded, setLoaded] = useState(false)
  const [authorized, setAuthorized] = useState(false)
  const [login, setLogin] = useState({ email: '', password: '' })

  // Lifecycle
  useEffect(() => {
    // Check if user is currently logged in
    setAuthorized(!string.isEmpty(props.auth.accessToken))
    setLoaded(true)
  }, [])

  const handleAuthorizeSuccess = () => {
    props.events.auth.authorized(
      () => {
        props.history.push('/lobby')
      },
      () => {
        console.log('Failed to connect to web socket.')
      }
    )
  }

  const handleAuthorizeFailure = error => {
    console.log(error)
  }

  const handleChange = e => {
    const { name, value } = e.target

    setLogin({
      ...login,
      [name]: value,
    })
  }

  const handleLogin = e => {
    const { email: username, password } = login

    props.requests.auth.authorize(
      { username, password },
      handleAuthorizeSuccess,
      handleAuthorizeFailure
    )

    e.preventDefault()
  }

  const handleLogout = e => {
    props.actions.auth.reject()
    props.events.auth.rejected()

    setAuthorized(false)

    e.preventDefault()
  }

  if (!loaded) {
    return null
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      {authorized ? (
        <>
          <h3>Logout</h3>
          <form>
            <button type="submit" onClick={handleLogout}>
              Logout
            </button>
          </form>
        </>
      ) : (
        <>
          <h3>Login</h3>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <button type="submit" onClick={handleLogin}>
              Submit
            </button>
          </form>
          <div>
            or <Link to="/register">Register</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default memo(Login)
