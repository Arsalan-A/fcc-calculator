import React from 'react';

function numPad({ onClick }) {
  return (
    <div className='numpad'>
      <button className='btn' id='clear' onClick={onClick}>
        AC
      </button>
      <button className='btn' id='divide' onClick={onClick}>
        /
      </button>
      <button className='btn' id='multiply' onClick={onClick}>
        X
      </button>

      <button className='btn' id='seven' onClick={onClick}>
        7
      </button>
      <button className='btn' id='eight' onClick={onClick}>
        8
      </button>
      <button className='btn' id='nine' onClick={onClick}>
        9
      </button>
      <button className='btn' id='subtract' onClick={onClick}>
        -
      </button>
      <button className='btn' id='four' onClick={onClick}>
        4
      </button>
      <button className='btn' id='five' onClick={onClick}>
        5
      </button>
      <button className='btn' id='six' onClick={onClick}>
        6
      </button>
      <button className='btn' id='add' onClick={onClick}>
        +
      </button>
      <button className='btn' id='one' onClick={onClick}>
        1
      </button>
      <button className='btn' id='two' onClick={onClick}>
        2
      </button>
      <button className='btn' id='three' onClick={onClick}>
        3
      </button>

      <button className='btn' id='equals' onClick={onClick}>
        =
      </button>
      <button className='btn' id='zero' onClick={onClick}>
        0
      </button>
      <button className='btn' id='decimal' onClick={onClick}>
        .
      </button>
    </div>
  );
}

export default numPad;
