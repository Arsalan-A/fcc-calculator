import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Display from './Components/Display';
import NumPad from './Components/NumPad';

function App() {
  let [value, setValue] = useState(0);
  let [results, setResults] = useState('');
  let [clickedBtn, setClickedBtn] = useState('');
  let [finalValue, setFinalValue] = useState('');
  let computeArr = useRef([]);
  let valueRef = useRef('');
  let checkNegative = useRef(false);

  const handleClick = (e) => {
    //set the current value to the value of btn
    let currentValue = e.target.innerHTML;
    let isNumber = !isNaN(currentValue);
    let valueArr = computeArr.current;
    //Return true if one dot or false if more
    let dotCount = valueArr.filter((item) => item === '.').length < 1;

    if (isNumber || (currentValue === '.' && dotCount)) {
      setClickedBtn(e.target.innerHTML);
      setValue('');
      setFinalValue('');
      //setResults('');

      //Populate the array with the current value
      valueArr.push(currentValue);

      //if first item in array is a dot add zero to the beginning
      if (valueArr[0] === '.') {
        valueArr = ['0' + valueArr.join('')];
        setValue(valueArr.join(''));

        if (currentValue === '.') {
          setResults((results += '0.'));
        } else {
          setResults((results += currentValue));
        }
      }
      //if first item is not a dot return regular string
      else {
        //TODO Fix the Multiple Zero issue

        //check if the first ite min arr is zero
        if (valueArr[0] === '0') {
          //reset the value and array to nothing
          setValue(0);
          computeArr.current = [];
        } else {
          //if arr is not zero set the values
          setValue(valueArr.join(''));
          setResults((results += currentValue));
        }
      }
    } else if (
      !isNumber &&
      currentValue !== 'AC' &&
      currentValue !== '=' &&
      currentValue !== '.'
    ) {
      // console.log(eval('6-6'));
      setClickedBtn('');
      //setValue('');

      //set the clicked btn for handling side effects
      if (currentValue === 'X') {
        setClickedBtn(currentValue);
      }

      //calculate the returned result value
      if (results === '') {
        setFinalValue('');

        if (eval(valueRef.current)) {
          setResults((results += +eval(valueRef.current).toFixed(4)));
        }
      }

      //check if the last value of result is not a number
      if (isNaN(results[results.length - 1])) {
        //check for two consecutive minus signs
        checkNegative.current = /^(?!.*?--).*?$/.test(results);
        console.log(checkNegative.current);

        //if last char is minus sign and there are two
        if (currentValue === '-' && checkNegative.current) {
          //remove one minus sign
          let arr = results.split('');
          if (arr[arr.length - 1] === '-' && isNaN(arr[arr.length - 2])) {
            arr.splice(-1, 1);
          }
          let str = arr.join('') + '-';
          console.log(str);
          setResults(str);
        } else {
          //change the sign based on btn clicked
          checkNegative.current = true;
          setResults((results) => {
            let arr = results.split('');
            if (arr[arr.length - 1] === '-' && isNaN(arr[arr.length - 2])) {
              arr.splice(-1, 2);
            }
            arr[arr.length - 1] = currentValue;
            return arr.join('');
          });
        }
      } else {
        //add the numbers to result string
        setResults((results += currentValue));
      }

      //when a sign is clicked reset the value string
      setValue(currentValue);

      //reset the value array
      computeArr.current = [];
    } else if (currentValue === '=') {
      //Set the state of clicked Btn fro handling side effects
      setClickedBtn('=');
      console.log(value);
      //Reset the data
      computeArr.current = [];
      valueArr = [];
    } else if (currentValue === 'AC') {
      //Clear the values
      setClickedBtn('');
      computeArr.current = [];
      valueRef.current = '';
      setValue(0);
      setResults('');
      setFinalValue('');
    }
  };

  useLayoutEffect(() => {
    //Handle equals side effect
    if (clickedBtn === '=') {
      //if the last char is a sign during calculation, remove it
      if (isNaN(results[results.length - 1])) {
        setResults((results) => {
          let arr = results.split('');
          arr[arr.length - 1] = '';
          return arr.join('');
        });
      }
      //if the last char is not a sign calculate the results
      if (!isNaN(results[results.length - 1])) {
        try {
          valueRef.current = results;
          setValue((value = +eval(valueRef.current).toFixed(4)));
          setFinalValue(
            (value =
              valueRef.current +
              ' = ' +
              +eval(valueRef.current).toFixed(4)).toString()
          );
          setResults('');
        } catch {
          setValue('Error');
          valueRef.current = '';
        }
      }
    } else if (clickedBtn === 'X') {
      //change the Multiply sign when X is clicked
      if (isNaN(results[results.length - 1])) {
        setResults((results) => {
          let arr = results.split('');
          arr[arr.length - 1] = '*';
          return arr.join('');
        });
      } else {
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
