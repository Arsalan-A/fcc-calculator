import React from 'react';

function Display({ value, results, finalValue }) {
  return (
    <div className='display-container'>
      <input
        id='secondary-display'
        type='text'
        value={finalValue.length > 0 ? finalValue : results}
        disabled
      />
      {console.log(value)}
      <input id='display' type='text' value={value} disabled />
    </div>
    // <div id='display'>{value}</div>
  );
}

export default Display;
