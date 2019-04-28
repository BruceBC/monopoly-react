import { call, takeLatest, put, all } from 'redux-saga/effects'
import makeRequest from './request'

// Types
import { auth, user } from '../../types'

function* networkCall(actions) {
  const { success, failure, request, callbacks } = actions
  const [successCB, failureCB] = callbacks || [() => {}, () => {}]

  try {
    const response = yield call(makeRequest, request)

    yield put({
      type: success,
      payload: response.data,
    })
    successCB(response.data)
  } catch (e) {
    yield put({
      type: failure,
      payload: e,
    })
    failureCB(e)
  }
}

// watchers
export default function* watchNetworkCall() {
  yield all([
    takeLatest(user.create.request, networkCall),
    takeLatest(user.fetch.request, networkCall),
    takeLatest(auth.authorize.request, networkCall),
  ])
}
