import { session } from '../types'

const init = {
  session: '',
}

export default (state = init, action) => {
  switch (action.type) {
    case session.create.success:
      return {
        ...state,
        session: action.payload.code,
      }
    case session.create.failure:
      return {
        ...state,
        session: '',
      }
    default:
      return state
  }
}
