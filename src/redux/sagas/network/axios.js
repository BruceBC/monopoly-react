import { select } from 'redux-saga/effects'

function* axios(request) {
  const { accessToken } = yield select(state => state.auth)

  return require('axios')
    .create({
      baseURL: 'http://localhost:8000/api/',
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .request(request)
    .then(response =>
      response.status < 300
        ? Promise.resolve(response)
        : Promise.reject(response)
    )
    .catch(error => Promise.reject(error))
}

export default axios
