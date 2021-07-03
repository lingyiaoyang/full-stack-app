import { combineReducers } from 'redux';
import { userAuth } from './main';

const rootReducer = combineReducers({
  userAuth: userAuth,
});

export default rootReducer;
