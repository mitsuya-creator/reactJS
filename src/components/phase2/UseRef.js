import React from "react";
import {useState, useEffect, useRef} from "react";


function Ref(){
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const el = useRef();
  const focusEl = () => {
    el.current.focus();
  }
  useEffect(() =>  {count.current = count.current + 1});
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} ref={el}/>
      <h1 onClick={focusEl}>Render count {count.current}</h1>
    </>
    )
}

export default Ref;