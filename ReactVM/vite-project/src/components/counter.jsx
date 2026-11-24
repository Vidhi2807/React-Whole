import React, { useState } from "react";
import Buttons from "./button";

function Counter() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved !== null ? JSON.parse(saved) : 0;
  });

  React.useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

function reducer(state, action) {
  switch (action.type) {
    case "increment ":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Invalid action type");
  }

}

console.log("Counter component rendered");

  return (
    <div>
          <h1>Count: {count}</h1>
            <p> </p>

   

 

 
    </div>
  );
}

export default Counter;