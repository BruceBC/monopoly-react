import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = props => {
  // State
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  })

  // Handlers
  const handleRegister = e => {
    props.requests.users.create(user, handleSuccess, handleFailure)

    e.preventDefault()
  }

  const handleSuccess = () => {
    const { email: username, password } = user

    props.requests.auth.authorize(
      { username, password },
      () => {
        props.events.auth.authorized(
          () => {
            props.history.push('/lobby')
          },
          () => {
            console.log('Failed to connect to web socket.')
          }
        )
      },
      error => console.log(error)
    )
  }

  const handleFailure = () => {
    // TODO: Add error message
  }

  const handleChange = e => {
    const { name, value } = e.target

    setUser({
      ...user,
      [name]: value,
    })
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
      <h3>Sign Up</h3>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          autoComplete="tel"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button type="submit" onClick={handleRegister}>
          Submit
        </button>
      </form>
      <div>
        or <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default memo(Registration)
