import React from "react";
import {useState, useEffect, useRef} from "react";


function Ref(){
  const [inputValue, setInputValue] = useState("");
  const prevValue = useRef("");
  useEffect(() => {
    prevValue.current = inputValue;
  },[inputValue])
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <h1>prevValue {prevValue.current}</h1>
    </>
    )
}

export default Ref;