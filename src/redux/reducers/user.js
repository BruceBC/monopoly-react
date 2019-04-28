import { user } from '../types'

const init = {}

export default (state = init, action) => {
  switch (action.type) {
    case user.create.success:
      return {
        ...state,
        ...action.payload,
      }
    case user.create.failure:
      return {}
    case user.fetch.success:
      return {
        ...state,
        ...action.payload,
      }
    case user.fetch.failure:
      return {}
    default:
      return state
  }
}
