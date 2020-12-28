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
      <input id='display' type='text' value={value} disabled />
    </div>
  );
}

export default Display;
