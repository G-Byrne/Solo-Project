export const getUser = (username) => ({
  type: 'GET_USER',
  payload: username,
});

export const updateUsername = (username) => ({
  type: 'UPDATE_USER',
  payload: username,
});
