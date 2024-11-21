import React, { useState } from "react";

function FunctionbasedComponent() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount((preState) => {
      return preState + 1;
    });
  };

  return (
    <div>
      FunctionbasedComponent
      <h2>this is function based component</h2>
      <h1>{count}</h1>
      <button onClick={changeCount}>Change Count</button>
    </div>
  );
}

export default FunctionbasedComponent;
