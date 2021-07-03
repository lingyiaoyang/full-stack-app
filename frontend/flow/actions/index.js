import { USER_LOGOUT, USER_LOGIN, USER_REGISTER } from '../types';

export const userLogin = (users) => {
  return {
    type: USER_LOGIN,
    payload: users,
  };
};

export const userRegister = (error) => {
  return {
    type: USER_REGISTER,
    payload: error,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
