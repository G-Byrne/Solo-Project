export const getUser = () => ({
  type: 'GET_USER',
});

export const updateUsername = (username) => ({
  type: 'UPDATE_USER',
  payload: username,
});
