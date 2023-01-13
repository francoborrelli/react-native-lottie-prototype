import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../..';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ThemeState, THEMES_TYPES } from './types';

// Define the initial state using that type
const initialState: ThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTheme: (state, action: PayloadAction<THEMES_TYPES>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
