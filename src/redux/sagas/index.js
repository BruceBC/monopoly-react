import { fork, all } from 'redux-saga/effects'
import watchEventCall from './events'
import watchNetworkCall from './network'

export default function* rootSaga() {
  yield all([fork(watchEventCall), fork(watchNetworkCall)])
}
