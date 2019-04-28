import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

// create the saga middleware
const middleware = createSagaMiddleware()

const saga = {
  middleware,
  run: () => {
    middleware.run(sagas)
  },
}

export default saga
