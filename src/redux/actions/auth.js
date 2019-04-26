import { auth } from '../types'

const authorize = ({ accessToken, createdAt, expiresAt }) => ({
  type: auth.authorize,
  payload: {
    accessToken,
    createdAt,
    expiresAt,
  },
})

export { authorize }
