import React from "react";
import {useState} from "react";

function AddTodo({onAddTodo}){
  const [title,setTitle] = useState("");
  return (
    <>
      <input type="text" value={title} placeholder="Add todo" onChange={(e) => setTitle(e.target.value)} />
      <button type="button" onClick={() => {
       setTitle("");
       onAddTodo(title);
      }}>Add</button>
      </>
    )
}

export default AddTodo;