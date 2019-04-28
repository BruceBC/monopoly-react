import { fork, all } from 'redux-saga/effects'
import watchNetworkCall from './network'

export default function* rootSaga() {
  yield all([fork(watchNetworkCall)])
}
