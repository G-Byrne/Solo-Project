import React from 'react';

const TotalsDisplay = (props) => {
  return (
    <div className='totalsBox'>
      <div className='counter'>
        <label className='totals'>Total Applications: </label>
        <span className='count'>{props.totalApps}</span>
      </div>
      <div className='counter'>
        <label className='totals'>Applied To: </label>
        <span className='count'>{props.appliedTo}</span>
      </div>
    </div>
  );
};

export default TotalsDisplay;
