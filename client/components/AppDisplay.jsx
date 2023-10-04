import React from 'react';
import { useSelector } from 'react-redux';
import Application from './Application.jsx';

const AppDisplay = (props) => {
  const apps = [];
  const appsList = useSelector((state) => state.apps);

  for (let i = 0; i < appsList.length; i++) {
    apps.push(<Application key={i} app={appsList[i]} />);
  }

  return (
    <div className='appDisplay'>
      <h2>Applications</h2>
      {apps}
    </div>
  );
};

export default AppDisplay;
