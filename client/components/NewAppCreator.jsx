import React from 'react';

const NewAppCreator = (props) => {
  return (
    <form onSubmit={props.createApp()}>
      <label>Company Name: </label>
      <input
        id='company'
        onChange={(e) => props.updateCompany(e.target.value)}
      />
      <label>Job Title: </label>
      <input
        id='company'
        onChange={(e) => props.updateJobTitle(e.target.value)}
      />
      <label>Site Applied On: </label>
      <input id='site' onChange={(e) => props.updateAppSite(e.target.value)} />
      <label>Application Link: </label>
      <input
        id='appLink'
        onChange={(e) => props.updateAppLink(e.target.value)}
      />
      <label>Notes: </label>
      <input id='appLink' onChange={(e) => props.updateNotes(e.target.value)} />
      <button id='submit-app' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default NewAppCreator;
