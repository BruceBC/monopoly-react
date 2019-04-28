import { session } from '../types'

const init = {
  current: '', // current session
  all: [], // all sessions
}

export default (state = init, action) => {
  switch (action.type) {
    case session.all.success:
      return {
        ...state,
        all: action.payload,
      }
    case session.all.failure:
      return {
        ...state,
        all: [],
      }
    case session.create.success:
      return {
        ...state,
        current: action.payload.code,
      }
    case session.create.failure:
      return {
        ...state,
        current: '',
      }
    default:
      return state
  }
}
