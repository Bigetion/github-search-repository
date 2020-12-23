import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import appReducer from 'store/app/reducer';

const createReducer = (asyncReducers) =>
  combineReducers({
    app: appReducer,
    ...asyncReducers,
  });

const store = configureStore({
  reducer: createReducer(),
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});

store.asyncReducers = {};

store.injectReducer = (key, reducer) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export default store;
