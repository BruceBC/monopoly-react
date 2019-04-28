import { auth } from '../types/events'

const authorized = (...callbacks) => ({
  type: auth.authorized.event,
  success: auth.authorized.success,
  failure: auth.authorized.failure,
  event: {
    name: 'auth/authorized',
  },
  callbacks,
})

const rejected = (...callbacks) => ({
  type: auth.rejected.event,
  success: auth.rejected.success,
  failure: auth.rejected.failure,
  event: {
    name: 'auth/rejected',
  },
  callbacks,
})

export { authorized, rejected }
