/// <reference types="redux-persist" />

import { combineReducers } from '@reduxjs/toolkit';

import storage from 'redux-persist/es/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import themeReducer from './ducks/theme';

const rootReducer = combineReducers({
  theme: themeReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
