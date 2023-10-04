import React from 'react';
import User from '../components/User';
import TotalsDisplay from '../components/TotalsDisplay';
import ApplicationsContainer from './ApplicationsContainer';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/actions.js';

const dispatch = useDispatch();
const username = useSelector((state) => state.user);
const totalApps = useSelector((state) => state.totalApps);
const appliedTo = useSelector((state) => state.appliedTo);

const MainContainer = () => {
  const getUser = (username) => dispatch(actions.getUser(username));
  const updateUsername = (username) => dispatch(actions.updateUser(username));

  return (
    <div className='container'>
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
