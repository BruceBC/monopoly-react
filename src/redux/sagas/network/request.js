import { call, delay } from 'redux-saga/effects'
import axios from './axios'

function* makeRequest(request) {
  // yield delay(3000)

  // Yield once for the generator, and once for the promise
  return yield yield call(axios, request)
}

export default makeRequest
