import { combineReducers } from 'redux';
import appReducer from './appReducer';

const reducers = combineReducers({
  applications: appReducer,
});

export default reducers;
