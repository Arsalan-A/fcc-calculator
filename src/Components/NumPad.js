import React from 'react';

function numPad({ onClick }) {
  return (
    <div className='numpad'>
      <button className='btn' id='clear' onClick={onClick}>
        AC
      </button>
      <button className='btn expression' id='divide' onClick={onClick}>
        /
      </button>
      <button className='btn expression' id='multiply' onClick={onClick}>
        X
      </button>

      <button className='btn number' id='seven' onClick={onClick}>
        7
      </button>
      <button className='btn number' id='eight' onClick={onClick}>
        8
      </button>
      <button className='btn number' id='nine' onClick={onClick}>
        9
      </button>
      <button className='btn expression' id='subtract' onClick={onClick}>
        -
      </button>
      <button className='btn number' id='four' onClick={onClick}>
        4
      </button>
      <button className='btn number' id='five' onClick={onClick}>
        5
      </button>
      <button className='btn number' id='six' onClick={onClick}>
        6
      </button>
      <button className='btn expression' id='add' onClick={onClick}>
        +
      </button>
      <button className='btn number' id='one' onClick={onClick}>
        1
      </button>
      <button className='btn number' id='two' onClick={onClick}>
        2
      </button>
      <button className='btn number' id='three' onClick={onClick}>
        3
      </button>

      <button className='btn expression' id='equals' onClick={onClick}>
        =
      </button>
      <button className='btn number' id='zero' onClick={onClick}>
        0
      </button>
      <button className='btn number' id='decimal' onClick={onClick}>
        .
      </button>
    </div>
  );
}

export default numPad;
