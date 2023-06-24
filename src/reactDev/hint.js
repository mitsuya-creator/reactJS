import React from "react";
import {useState} from "react";

export default function TextField(){
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState("");
  return (
    <>
      {showHint ? <p>your favorite city?</p> : null}
       <input type="text" value={text} onChange={e => setText(e.target.value)} />
       <button type="button" onClick={() => setShowHint(!showHint)}>{showHint ? "hideHint" : "showHint"}</button>
       {console.log(showHint)}
       {console.log(text)}
    </>
    )
}
