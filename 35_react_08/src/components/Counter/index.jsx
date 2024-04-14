import React, { useState, useEffect } from 'react';
import './style.sass';

function Counter() {
  const [counter, setCounter] = useState(10);
  const [address, setAddress] = useState({
    country: 'Ukraine',
    city: 'Kyiv',
    zip: 1000,
  });
  const [x, setX] = useState(0);

  const decCounter = () => {
    setCounter((prevState) => prevState - 1);
  };

  const incCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log('useEffect counter');
  }, [counter]);

  useEffect(() => {
    console.log('useEffect X');
  }, [x]);

  return (
    <>
      <div className='counter'>
        <button onClick={decCounter}>-</button>
        <span>{counter}</span>
        <button onClick={incCounter}>+</button>
      </div>
      <hr />

      <ul>
        {Object.keys(address).map((key, index) => (
          <li key={index}>{address[key]}</li>
        ))}
      </ul>

      <hr />

      <p>
        {x}{' '}
        <button onClick={() => setX((prevState) => prevState + 1)}>
          Increment
        </button>
      </p>
    </>
  );
}

export default Counter;
