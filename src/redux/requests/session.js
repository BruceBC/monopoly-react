import { session } from '../types'

const create = ({ invites }, ...callbacks) => ({
  type: session.create.request,
  success: session.create.success,
  failure: session.create.failure,
  request: {
    url: 'sessions',
    method: 'post',
    data: {
      invites,
    },
  },
  callbacks,
})

export { create }
