//import * as types from '../constants/actionTypes';

import { types } from 'sass';

const initialState = {
  user: '',
  app: [],
  totalApps: 0,
  appliedTo: 0,
  newCompanyName: '',
  newJobTitle: '',
  newApplink: '',
  newAppSite: '',
  newNotes: '',
  newApplied: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      return {
        ...state,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
