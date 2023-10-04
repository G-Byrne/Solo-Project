import React from 'react';
import { useSelector } from 'react-redux';

const AppDisplay = (props) => {
  const apps = [];
  const appsList = useSelector((state) => state.jobs);

  for (const app of appsList) {
    apps.push(<Application app={app} />);
  }

  return (
    <div className='appDisplay'>
      <h2>Applications</h2>
      {apps}
    </div>
  );
};

export default AppDisplay;
