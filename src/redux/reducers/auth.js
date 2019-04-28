import { auth } from '../types'

const init = {
  accessToken: localStorage.getItem('accessToken') || '',
  createdAt: localStorage.getItem('createdAt') || '',
  expiresAt: localStorage.getItem('expiresAt') || '',
}

const store = payload => {
  const { accessToken, createdAt, expiresAt } = payload
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('createdAt', createdAt)
  localStorage.setItem('expiresAt', expiresAt)
}

const clear = keys => {
  keys.forEach(key => localStorage.setItem(key, ''))
}

export default (state = init, action) => {
  switch (action.type) {
    case auth.authorize.success:
      const { accessToken, token } = action.payload
      const payload = {
        accessToken,
        createdAt: token.createdAt,
        expiresAt: token.expiresAt,
      }
      store(payload)
      return {
        ...state,
        ...payload,
      }
    case auth.authorize.failure:
      clear(['accessToken', 'createdAt', 'expiresAt'])
      return {
        ...state,
        accessToken: '',
        createdAt: '',
        expiresAt: '',
      }
    case auth.reject:
      clear(['accessToken', 'createdAt', 'expiresAt'])
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
