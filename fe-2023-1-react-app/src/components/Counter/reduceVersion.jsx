import React, { useReducer } from "react";
const initialCounterState = {
  count: 0,
};
function counterReducer(state, action) {
  switch (action.change) {
    case "plus":
      return {
        ...state,
        count: state.count + 1,
      };
    case "minus":
      return {
        ...state,
        count: state.count - 1,
      };
     default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);
  return (
    <div>
      <button onClick={() => dispatch({ change: "plus" })}>Add</button>
      <button onClick={() => dispatch({ change: "minus" })}>Subtract</button>
      <p>{`Yor count is  ${state.count}`}</p>
    </div>
  );
}

export default Counter;
