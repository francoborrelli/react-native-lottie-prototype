import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import rootReducer from './reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
