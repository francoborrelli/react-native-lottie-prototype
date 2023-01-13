/// <reference types="redux-persist" />

import { combineReducers } from '@reduxjs/toolkit';

import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import themeReducer from './ducks/theme';
import welcomeReducer from './ducks/welcome';

const rootReducer = combineReducers({
  theme: themeReducer,
  welcome: welcomeReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
