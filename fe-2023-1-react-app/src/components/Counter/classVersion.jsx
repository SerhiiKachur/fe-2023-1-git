import React, { useState } from "react";

function Counter(props) {
  const [state, setState] = useState(0);

  const add = () => {
    setState(state + 1);
  };
  const substract = () => {
    setState(state - 1);
  };

  return (
    <>
      <p>Counter is {state}</p>
      <button onClick={add}>Add</button>
      <button onClick={substract}>Substract</button>
    </>
  );
}

export default Counter;
