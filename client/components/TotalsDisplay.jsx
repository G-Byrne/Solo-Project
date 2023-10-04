import React from 'react';

const TotalsDisplay = (props) => {
  return (
    <div>
      <label>Total Applications: </label>
      <p>{props.totalApps}</p>
      <label>Applied To: </label>
      <p>{props.appliedTo}</p>
    </div>
  );
};

export default TotalsDisplay;
