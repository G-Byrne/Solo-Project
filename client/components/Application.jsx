import React from 'react';

const Application = (props) => {
  const app = props.app;
  return (
    <div className='app'>
      <label className='company'>{app.company}</label>
      <label className='jobTitle'>
        <a href={app.jobLink}>{app.jobTitle}</a>
      </label>
      <label className='appSite'>{app.site}</label>
      <p className='notes'>Notes: {app.notes}</p>
    </div>
  );
};

export default Application;
