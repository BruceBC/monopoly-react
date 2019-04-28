import { combineReducers } from 'redux'
import auth from './auth'
import session from './session'
import user from './user'

export default combineReducers({ auth, session, user })
