import React, { useState, useRef, useEffect } from 'react';
import Display from './Components/Display';
import NumPad from './Components/NumPad';

function App() {
  let [value, setValue] = useState(0);
  let [results, setResults] = useState('');
  let [clickedBtn, setClickedBtn] = useState('');
  let [finalValue, setFinalValue] = useState('');
  let computeArr = useRef([]);
  let valueRef = useRef('');

  const handleClick = (e) => {
    //set the current value to the value of btn
    let currentValue = e.target.innerHTML;
    let isNumber = !isNaN(currentValue);
    let valueArr = computeArr.current;
    //Return true if one dot or false if more
    let dotCount = valueArr.filter((item) => item === '.').length < 1;
    //If the current btn value is not a number or it's a dot and count is 1
    if (isNumber || (currentValue === '.' && dotCount)) {
      setClickedBtn(e.target.innerHTML);
      setFinalValue('');
      setResults(finalValue);

      //  setResults('');
      //Populate the array with the current value
      valueArr.push(currentValue);
      //if first item in array is a dot add zero to the beginning
      if (valueArr[0] === '.') {
        valueArr = ['0' + valueArr.join('')];
        setValue(valueArr.join(''));
        setResults((results += currentValue));
      } else {
        //if first item is not a dot return regular string
        setValue(valueArr.join(''));
        setResults((results += currentValue));
      }
    } else if (
      !isNumber &&
      currentValue !== 'AC' &&
      currentValue !== '=' &&
      currentValue !== '.'
    ) {
      setClickedBtn('');
      if (currentValue === 'X') {
        setClickedBtn(currentValue);
      }

      if (results === '') {
        setFinalValue('');
        setResults((results += eval(valueRef.current).toString()));
        console.log('REF ' + results);
      }

      if (isNaN(results[results.length - 1])) {
        setResults((results) => {
          let arr = results.split('');
          arr[arr.length - 1] = currentValue;
          return arr.join('');
        });
        console.log('event clicked');
      } else {
        setResults((results += currentValue));
        console.log('No filtered');
      }

      setValue(currentValue);

      computeArr.current = [];
    } else if (currentValue === '=') {
      //Set the state of clicked Btn
      setClickedBtn('=');

      computeArr.current = [];
      valueArr = [];
    } else if (currentValue === 'AC') {
      setClickedBtn('');
      computeArr.current = [];
      setValue(0);
      setResults('');
      setFinalValue('');
    }
  };

  useEffect(() => {
    if (clickedBtn === '=') {
      if (isNaN(results[results.length - 1])) {
        setResults((results) => {
          let arr = results.split('');
          arr[arr.length - 1] = '';
          return arr.join('');
        });
      }

      if (!isNaN(results[results.length - 1])) {
        console.log(results);
        valueRef.current = results;
        setValue(eval(valueRef.current));
        console.log(eval(valueRef.current));
        console.log(eval(results));
        setFinalValue(
          (valueRef.current + ' = ' + eval(valueRef.current)).toString()
        );
        setResults('');
      }
    } else if (clickedBtn === 'X') {
      if (isNaN(results[results.length - 1])) {
        setResults((results) => {
          let arr = results.split('');
          arr[arr.length - 1] = '*';
          return arr.join('');
        });
      } else {
        console.log('clickedBtn');
      }
    }
  }, [results, clickedBtn]);
  return (
    <div className='container'>
      <Display value={value} results={results} finalValue={finalValue} />
      <NumPad onClick={handleClick} />
    </div>
  );
}

export default App;
