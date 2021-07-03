import { createStore, compose, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reduces';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import watcherSaga from './sagas';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, thunk];

const makeStore = () => {
  const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(watcherSaga);
  return Store;
};
export const wrapper = createWrapper(makeStore);
