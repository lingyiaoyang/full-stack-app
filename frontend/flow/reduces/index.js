import { combineReducers } from 'redux';
import { userLoginReducer, userRegisterReducer } from './userForm';

const rootReducer = combineReducers({
  Login: userLoginReducer,
  register: userRegisterReducer,
});

export default rootReducer;
