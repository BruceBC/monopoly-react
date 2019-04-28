// Auth
const auth = {
  authorize: {
    request: 'AUTH/AUTHORIZE_REQUEST',
    success: 'AUTH/AUTHORIZE_SUCCESS',
    failure: 'AUTH/AUTHORIZE_FAILURE',
  },
  reject: 'AUTH/REJECT',
}

const user = {
  create: {
    request: 'USER/CREATE_REQUEST',
    success: 'USER/CREATE_SUCCESS',
    failure: 'USER/CREATE_FAILURE',
  },
  fetch: {
    request: 'USER/FETCH_REQUEST',
    success: 'USER/FETCH_SUCCESS',
    failure: 'USER/FETCH_FAILURE',
  },
}

export { auth, user }
