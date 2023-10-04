//import * as types from '../constants/actionTypes';

const initialState = {
  user: '',
  app: [],
  totalJobs: 0,
  appliedTo: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default appReducer;
