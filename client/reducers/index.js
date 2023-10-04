import { combineReducers } from 'redux';
import appReducer from './appReducer';

const reducers = combineReducers({
  apps: appReducer,
});

export default reducers;
