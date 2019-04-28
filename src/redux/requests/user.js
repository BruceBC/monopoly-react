import { user } from '../types'

const create = ({ name, email, phone, password }, ...callbacks) => ({
  type: user.create.request,
  success: user.create.success,
  failure: user.create.failure,
  request: {
    url: 'users',
    method: 'post',
    data: {
      name,
      email,
      phone,
      password,
    },
  },
  callbacks,
})

const fetch = (...callbacks) => ({
  type: user.fetch.request,
  success: user.fetch.success,
  failure: user.fetch.failure,
  request: {
    url: 'users',
    method: 'get',
  },
  callbacks,
})

export { create, fetch }
