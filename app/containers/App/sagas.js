/*
 * App sagas
 */

import {
  USERINFO_REQUESTING,
} from './constants';

import {
  userinfoRequestSuccess,
  userinfoRequestError,
} from './actions';

import appRequest from './appRequests';
import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';

export function* requestUserInfo() {
  try {
    yield take(USERINFO_REQUESTING);
    const userInfo = yield call(appRequest.userinfoRequest);
    yield put(userinfoRequestSuccess(userInfo));
    localStorage.setItem('user_type', userInfo.user_type);
    if (browserHistory.getCurrentLocation().pathname === '/') {
      yield put(push('/home'));
    }
  } catch (error) {
    yield put(userinfoRequestError(error));
  }
}

export default [
  requestUserInfo,
];
