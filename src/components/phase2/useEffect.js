import React from "react";
import {useState, useEffect} from "react";

function Timer(){
  const [count, setCount] = useState(0);
  const [cal, setCal] = useState(0);
  useEffect(() => {
    setCal(cal => count * 1.5);
  }, [count]);
  return (
    <>
      <h1>render ke {count}</h1>
      <button onClick={() => setCount( c => c + 1)}>+</button>
      <h1>Calculation {cal}</h1>
    </>
    )
}

export default Timer;