//import * as types from '../constants/actionTypes';

import { types } from 'sass';

const initialState = {
  user: '',
  apps: [
    {
      jobTitle: '',
      company: '',
      site: '',
      jobLink: '',
      notes: '',
      applied: false,
    },
  ],
  totalApps: 0,
  appliedTo: 0,
  newCompanyName: '',
  newJobTitle: '',
  newAppLink: '',
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

    case 'UPDATE_COMPANY': {
      return {
        ...state,
        newCompanyName: action.payload,
      };
    }

    case 'UPDATE_JOBTITLE': {
      return {
        ...state,
        newJobTitle: action.payload,
      };
    }

    case 'UPDATE_APPSITE': {
      return {
        ...state,
        newAppSite: action.payload,
      };
    }

    case 'UPDATE_APPLINK': {
      return {
        ...state,
        newAppLink: action.payload,
      };
    }

    case 'UPDATE_NOTES': {
      return {
        ...state,
        newNotes: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default appReducer;
