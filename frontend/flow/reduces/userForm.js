import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
} from '../types/userType';

const initialState = {
  isLoading: false,
  userForm: [],
  error: '',
};

export const userLoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        isloading: false,
        userForm: payload,
      };
    case USER_LOGIN_FAILED:
      return {
        isloading: false,
        error: payload,
      };
    default:
      return { ...state };
  }
};

export const userRegisterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        userForm: payload,
      };
    case USER_REGISTER_SUCCESS:
      return {
        isloading: false,
        userForm: payload,
      };
    case USER_REGISTER_FAILED:
      return {
        isloading: false,
        error: payload,
      };

    default:
      return { ...state };
  }
};
