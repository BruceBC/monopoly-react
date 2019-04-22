import React, { memo } from 'react'

const NotFound = props => {
  const handleGoBack = () => {
    props.history.goBack()
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      <h3 style={{ fontWeight: '300', color: '#222222' }}>404 | Not Found</h3>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default memo(NotFound)
