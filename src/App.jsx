import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showStart, setShowStart] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const intervalRef = useRef(null);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function handleStart() {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(increment, 1000);
      setShowStart(false);
      setShowResume(false);
    }
  }

  function handleStop() {
    if(intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setShowResume(true);
    }
  }

  function handleResume() {
    if(intervalRef.current === null) {
      intervalRef.current = setInterval(increment, 1000);
      setShowResume(false);
    }
  }

  function handleReset() {
    if(intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current=null;
    }
    setCount(0);
    setShowStart(true);
    // setShowResume(false);
  }

  return (
    <div className="timer">
      <h1>{count}</h1>

      { showStart ? <button onClick={handleStart}>start</button> : 
      (
        !showResume ? <button onClick={handleStop}>stop</button> : <button onClick={handleResume}>resume</button>
      )}
      
      { !showStart && <button onClick={handleReset}>reset</button> }
    </div>
  );
}

export default App;