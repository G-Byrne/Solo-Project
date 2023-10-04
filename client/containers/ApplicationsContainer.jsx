import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/actions.js';

const ApplicationsContainer = () => {
  return (
    <NewAppCreator />
    <AppDisplay />
  )
}

export default ApplicationsContainer;