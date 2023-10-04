import React from 'react';

const User = (props) => {
  return (
    <div>
      <label>Username: </label>
      <form onSubmit={props.getUser()}>
        <input
          id='username'
          onChange={(e) => props.updateUsername(e.target.value)}
        />
        <button id='get-applications' className='get' type='submit'>
          Get Applications
        </button>
      </form>
    </div>
  );
};

export default User;
