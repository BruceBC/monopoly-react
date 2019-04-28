import { call, takeLatest, put, all } from 'redux-saga/effects'
import { callbacks } from '../../../shared/sagas'

// Types
import { auth } from '../../types/events'

function* eventCall(action) {
  const { success, failure, event } = action
  const [successCB, failureCB] = callbacks(action)

  try {
    const handle = yield import(`./${event.name}`)

    const response = yield call(handle.default, event)

    yield put({
      type: success,
      payload: response,
    })

    successCB(response)
  } catch (e) {
    yield put({
      type: failure,
      payload: e,
    })
    failureCB(e)
  }
}

// watchers
export default function* watchEventCall() {
  yield all([
    takeLatest(auth.authorized.event, eventCall),
    takeLatest(auth.rejected.event, eventCall),
  ])
}
