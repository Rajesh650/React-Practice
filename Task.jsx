import React, { useState } from 'react';

// Function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const NumberCheck = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const checkNumber = () => {
    const num = parseInt(number);
    
    if (isNaN(num)) {
      setResult('Please enter a valid number.');
      return;
    }

    let message = '';

    // Check if number is positive, negative or zero
    if (num > 0) {
      message += 'The number is positive. ';
    } else if (num < 0) {
      message += 'The number is negative. ';
    } else {
      message += 'The number is zero. ';
    }

    // Check if number is odd or even
    if (num % 2 === 0) {
      message += 'It is even. ';
    } else {
      message += 'It is odd. ';
    }

    // Check if number is prime
    if (isPrime(num)) {
      message += 'It is a prime number.';
    } else {
      message += 'It is not a prime number.';
    }

    setResult(message);
  };

  return (
    <div>
      <h1>Number Check</h1>
      <input
        type="text"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={checkNumber}>Check</button>
      <p>{result}</p>
    </div>
  );
};

export default NumberCheck;
