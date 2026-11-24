import React from "react";

function Buttons({ onIncrement, onDecrement, onReset }) {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default Buttons;