import { auth } from '../types'

const authorize = ({ username, password }, ...callbacks) => ({
  type: auth.authorize.request,
  success: auth.authorize.success,
  failure: auth.authorize.failure,
  request: {
    url: 'accessTokens',
    method: 'post',
    auth: {
      username: username,
      password: password,
    },
  },
  callbacks,
})

export { authorize }
