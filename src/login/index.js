import React, { memo, useState, useEffect } from 'react'
import axiosRaw from 'axios'

const axios = axiosRaw.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

const Login = props => {
  const [login, setLogin] = useState({ email: '', password: '' })

  const handleChange = e => {
    const { name, value } = e.target

    setLogin({
      ...login,
      [name]: value,
    })
  }

  const handleLogin = e => {
    const { email: username, password } = login

    axios
      .request({
        url: 'accessTokens',
        method: 'post',
        auth: {
          username: username,
          password: password,
        },
      })
      .then(({ data }) => data)
      .then(({ accessToken, token }) => {
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('createdAt', token.createdAt)
        localStorage.setItem('expiresAt', token.expiresAt)
        return {
          accessToken,
          createdAt: token.createdAt,
          expiresAt: token.expiresAt,
        }
      })
      .then(({ accessToken, createdAt, expiresAt }) =>
        props.authorize({ accessToken, createdAt, expiresAt })
      )
      //.then(() => props.history.push('/lobby'))
      .catch(error => console.log(error))

    e.preventDefault()
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
    </div>
  )
}

export default memo(Login)
