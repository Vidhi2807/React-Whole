import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="card">
      <h2>Countdown Timer</h2>
      <h1>{seconds}s</h1>

      <button onClick={() => setIsActive(true)}>Start</button>
      <button onClick={() => setIsActive(false)}>Pause</button>
      <button
        onClick={() => {
          setIsActive(false);
          setSeconds(60);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;
