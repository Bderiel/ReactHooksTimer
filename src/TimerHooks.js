import React, { useState } from "react";

export function TimerHooks() {
  const [time, setTime] = useState(0);
  const [intervalId, reset] = useState(null);
  const handleStart = () => {
    clearInterval(intervalId);
    const start = Date.now() - time;
    reset(
      setInterval(() => {
        const newState = Date.now() - start;
        setTime(newState);
      }, 0)
    );
  };

  const handleStop = () => {
    setTime(0);
    clearInterval(intervalId);
  };

  return (
    <div>
      <label>Hooks</label>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
