export const getUser = () => ({
  type: 'GET_USER',
});

export const createApp = () => ({
  type: 'CREATE_APP',
});

export const updateUser = (username) => ({
  type: 'UPDATE_USER',
  payload: username,
});

export const updateCompany = (company) => ({
  type: 'UPDATE_COMPANY',
  payload: company,
});

export const updateJobTitle = (jobTitle) => ({
  type: 'UPDATE_JOBTITLE',
  payload: jobTitle,
});

export const updateAppSite = (appSite) => ({
  type: 'UPDATE_APPSITE',
  payload: appSite,
});

export const updateAppLink = (appLink) => ({
  type: 'UPDATE_APPLINK',
  payload: appLink,
});

export const updateNotes = (notes) => ({
  type: 'UPDATE_NOTES',
  payload: notes,
});
