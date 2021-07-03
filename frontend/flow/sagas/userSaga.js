import { call, put } from 'redux-saga/effects';
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
} from '../types/userType';
import { userLogin, userRegister } from '../../apis/user';

export function* userLoginRequestFlow(action) {
  const { identifier, password } = action.payload;

  let sendData = {
    identifier: identifier,
    password: password,
  };

  const response = yield call(userLogin, sendData);

  if (response.error) {
    yield put({
      type: USER_LOGIN_FAILED,
      payload: response.message[0].messages[0].message,
    });
  } else {
    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: sendData,
    });
  }
}

export function* userRegisterRequestFlow(formData) {
  const { username, email, password } = formData.payload;

  let sendData = {
    username,
    email,
    password,
  };

  const response = yield call(userRegister, sendData);

  if (response.error) {
    console.log(response);
    yield put({
      type: USER_REGISTER_FAILED,
      payload: response.message[0].messages[0].message,
    });
  } else {
    console.log(formData);
    yield put({
      type: USER_REGISTER_SUCCESS,
      payload: sendData,
    });
  }
}
