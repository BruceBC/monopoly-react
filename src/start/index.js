import React, { memo } from 'react'
import { string } from '../shared/utils'

const Start = props => {
  const handleStart = () => {
    const authorized = !string.isEmpty(props.auth.accessToken)

    if (authorized) {
      props.history.push('/lobby')
    } else {
      props.history.push('/login')
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        border: '1px solid blue',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      <h1>Monopoly</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100% - 81px)',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <button
          style={{
            background: '#ecf0f1',
            color: '#222222',
            width: '100%',
            height: '48px',
            maxWidth: '280px',
            fontFamily: 'Lato, sans-serif',
            fontSize: '24px',
            border: 'none',
            outline: 'none',
            borderRadius: '2px',
          }}
          onClick={handleStart}
        >
          Start
        </button>
      </div>
    </div>
  )
}

export default memo(Start)
