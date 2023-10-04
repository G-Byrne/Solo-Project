import React from 'react';

const User = (props) => {
  return (
    <div className='userBox'>
      <label id='username'>Username: </label>
      <form id='userform' onSubmit={props.getUser()}>
        <input
          id='nameinput'
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
