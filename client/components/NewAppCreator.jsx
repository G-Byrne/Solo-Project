import React from 'react';

const NewAppCreator = (props) => {
  return (
    <div className='newAppBox'>
      <p id='newApp'>New Application!</p>
      <form id='appForm' onSubmit={props.createApp()}>
        <label className='appLabel'>Company Name: </label>
        <input
          id='company'
          className='appInput'
          onChange={(e) => props.updateCompany(e.target.value)}
        />
        <br></br>
        <label className='appLabel'>Job Title: </label>
        <input
          id='company'
          className='appInput'
          onChange={(e) => props.updateJobTitle(e.target.value)}
        />
        <br></br>
        <label className='appLabel'>Site Applied On: </label>
        <input
          id='site'
          className='appInput'
          onChange={(e) => props.updateAppSite(e.target.value)}
        />
        <br></br>
        <label className='appLabel'>Application Link: </label>
        <input
          id='appLink'
          className='appInput'
          onChange={(e) => props.updateAppLink(e.target.value)}
        />
        <br></br>
        <label className='appLabel'>Notes: </label>
        <input
          id='appNotes'
          className='appInput'
          onChange={(e) => props.updateNotes(e.target.value)}
        />
        <button id='submit-app' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewAppCreator;
