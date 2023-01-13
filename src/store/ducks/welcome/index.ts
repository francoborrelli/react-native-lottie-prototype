import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../..';
import type { WelcomeState } from './types';

// Define the initial state using that type
const initialState: WelcomeState = {
  isCompleted: false,
};

export const welcomeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setCompleted: (state) => {
      state.isCompleted = true;
    },
  },
});

export const { setCompleted } = welcomeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedWelcomeCompleted = (state: RootState) => state.welcome.isCompleted;

export default welcomeSlice.reducer;
