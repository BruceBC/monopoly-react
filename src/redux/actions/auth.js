import { auth } from '../types'

const reject = () => ({
  type: auth.reject,
  payload: {
    accessToken: '',
    createdAt: '',
    expiresAt: '',
  },
})

export { reject }
