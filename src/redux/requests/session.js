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

const all = (...callbacks) => ({
  type: session.all.request,
  success: session.all.success,
  failure: session.all.failure,
  request: {
    url: 'sessions',
    method: 'get',
  },
  callbacks,
})

export { create, all }
