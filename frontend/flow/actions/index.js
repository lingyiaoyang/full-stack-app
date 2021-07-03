import { USER_LOGIN_REQUEST, USER_REGISTER_REQUEST } from '../types/userType';

export const userLoginRequest = (FormData) => {
  return {
    type: USER_LOGIN_REQUEST,
    payload: FormData,
  };
};
export const userRegisterRequest = (FormData) => {
  return {
    type: USER_REGISTER_REQUEST,
    payload: FormData,
  };
};
