import { createStore, compose, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reduces';
// import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

const makeStore = () => createStore(rootReducer, devToolsEnhancer());

export const wrapper = createWrapper(makeStore);
