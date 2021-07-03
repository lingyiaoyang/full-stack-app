import { takeLatest } from 'redux-saga/effects';
import { userLoginRequestFlow, userRegisterRequestFlow } from './userSaga';
import { USER_LOGIN_REQUEST, USER_REGISTER_REQUEST } from '../types/userType';

export default function* watcherSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, userLoginRequestFlow);
  yield takeLatest(USER_REGISTER_REQUEST, userRegisterRequestFlow);
}
