import { configureStore } from 'redux-starter-kit'

// Middleware
import logger from 'redux-logger'

// Reducers
import reducer from './reducers'

const middleware = [logger]

const store = configureStore({
  reducer,
  middleware,
})

export default store
