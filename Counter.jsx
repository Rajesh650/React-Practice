import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // This state will track the count
  
  function increment() {
    setCount(count + 1); // Update the count state
  }
  
  function decrement() {
    setCount(count - 1); // Update the count state
  }

  return (
    <>
      <h1>{count}</h1> {/* Display the count state */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
