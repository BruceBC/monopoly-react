import Echo from 'laravel-echo'

function* handle() {
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
        Authorization: '',
      },
    },
  })

  return yield Promise.resolve('complete')
}

export default handle
