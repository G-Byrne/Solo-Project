import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/actions.js';
import NewAppCreator from '../components/NewAppCreator.jsx';

const dispatch = useDispatch();
const updateCompany = () => dispatch(actions.updateCompany());
const updateJobTitle = () => dispatch(actions.updateJobTitle());
const updateAppSite = () => dispatch(actions.updateAppSite());
const updateAppLink = () => dispatch(actions.updateAppLink());
const updateNotes = () => dispatch(actions.updateNotes());

const ApplicationsContainer = () => {
  return (
    <div>
      <NewAppCreator
        updateCompany={updateCompany}
        updateJobTitle={updateJobTitle}
        updateAppSite={updateAppSite}
        updateAppLink={updateAppLink}
        updateNotes={updateNotes}
      />
      <AppDisplay />
    </div>
  );
};

export default ApplicationsContainer;
