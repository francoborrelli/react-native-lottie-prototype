export const setTheme = (username) => ({ type: UPDATE_USERNAME, username });

const user = (user = { username: '' }, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { username: action.username };
    default:
      return user;
  }
};
