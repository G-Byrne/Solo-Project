import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/actions.js';
import NewAppCreator from '../components/NewAppCreator.jsx';
import AppDisplay from '../components/AppDisplay.jsx';

const ApplicationsContainer = () => {
  const dispatch = useDispatch();
  const updateCompany = (company) => dispatch(actions.updateCompany(company));
  const updateJobTitle = (jobTitle) =>
    dispatch(actions.updateJobTitle(jobTitle));
  const updateAppSite = (appSite) => dispatch(actions.updateAppSite(appSite));
  const updateAppLink = (appLink) => dispatch(actions.updateAppLink(appLink));
  const updateNotes = (notes) => dispatch(actions.updateNotes(notes));
  const createApp = () => dispatch(actions.createApp());

  return (
    <div>
      <NewAppCreator
        createApp={createApp}
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
