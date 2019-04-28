import { call, takeLatest, put, all } from 'redux-saga/effects'
import { callbacks } from '../../../shared/sagas'
import makeRequest from './request'

// Types
import { auth, session, user } from '../../types'

function* networkCall(action) {
  const { success, failure, request } = action
  const [successCB, failureCB] = callbacks(action)

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
    takeLatest(auth.authorize.request, networkCall),
    takeLatest(session.create.request, networkCall),
    takeLatest(user.create.request, networkCall),
    takeLatest(user.fetch.request, networkCall),
  ])
}
