import React from 'react';
import User from '../components/User.jsx';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import ApplicationsContainer from './ApplicationsContainer.jsx';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/actions.js';

const MainContainer = () => {
  const dispatch = useDispatch();
  const getUser = () => dispatch(actions.getUser());
  const updateUsername = (username) => dispatch(actions.updateUser(username));

  const username = useSelector((state) => state.user);
  const totalApps = useSelector((state) => state.totalApps);
  const appliedTo = useSelector((state) => state.appliedTo);

  return (
    <div className='mainContainer'>
      <User
        getUser={getUser}
        updateUsername={updateUsername}
        username={username}
      />
      <TotalsDisplay totalApps={totalApps} appliedTo={appliedTo} />
      <ApplicationsContainer />
    </div>
  );
};

export default MainContainer;
