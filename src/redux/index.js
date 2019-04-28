import { configureStore } from 'redux-starter-kit'
import bindActionCreator from './bindActionCreator'

// Middleware
import logger from 'redux-logger'
import saga from './saga'

// Reducers
import reducer from './reducers'

const middleware = [logger, saga.middleware]

const store = configureStore({
  reducer,
  middleware,
})

saga.run()

export { store as default, bindActionCreator }
