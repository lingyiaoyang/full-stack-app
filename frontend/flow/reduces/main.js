import { USER_LOGIN, USER_REGISTER, USER_LOGOUT } from '../types';

const initialState = {
  loading: false,
  user: [],
  isLogIn: false,
  error: '',
};

export const userAuth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER:
      return {
        ...state,

        loading: false,
        user: payload,
        error: '',
      };
    case USER_LOGIN:
      return {
        ...state,
        loading: true,
        user: payload,
      };

    case USER_LOGOUT:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
