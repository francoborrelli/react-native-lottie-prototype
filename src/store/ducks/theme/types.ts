type THEMES = 'light' | 'dark';

export enum THEME_TYPES {
  SET_THEME = 'SET_THEME',
}

export type SET_THEME_ACTION = {
  type: THEME_TYPES.SET_THEME;
  theme: THEMES;
};

export type ThemeReducer = {
  theme: THEMES;
};
