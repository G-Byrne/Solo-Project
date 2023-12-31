//import * as types from '../constants/actionTypes';

import { types } from 'sass';

const initialState = {
  user: '',
  apps: [],
  totalApps: 0,
  appliedTo: 0,
  newCompanyName: '',
  newJobTitle: '',
  newAppLink: '',
  newAppSite: '',
  newNotes: '',
  newApplied: false,
};

const appReducer = async (state = initialState, action) => {
  let apps;
  let totalApps;
  let appliedTo;

  switch (action.type) {
    case 'CREATE_APP': {
      totalApps = state.totalApps + 1;
      appliedTo = state.appliedTo + 1;

      const newApp = {
        jobTitle: state.newJobTitle,
        company: state.newCompanyName,
        site: state.newAppSite,
        jobLink: state.newAppLink,
        notes: state.newNotes,
        applied: true,
      };
      apps = state.apps.slice();
      apps.push(newApp);

      const response = await fetch('../users/newapp', {
        method: 'POST',
        body: JSON.stringify({ username: state.user, newApp }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        console.log('Good response from server. New app saved!');
      } else {
        console.log('something went wrong in adding app');
      }

      return {
        ...state,
        apps,
        totalApps,
        appliedTo,
        newCompanyName: '',
        newJobTitle: '',
        newAppLink: '',
        newAppSite: '',
        newNotes: '',
        newApplied: false,
      };
    }

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
