import { auth } from '../types'

const init = {
  accessToken: localStorage.getItem('accessToken') || '',
  createdAt: localStorage.getItem('createdAt') || '',
  expiresAt: localStorage.getItem('expiresAt') || '',
}

export default (state = init, action) => {
  switch (action.type) {
    case auth.authorize:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
