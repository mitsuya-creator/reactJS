import React from "react";
import {useState} from "react";

export default function TaskList({todos,onDeleted,onChange}){
  return (
    <>
    <ul>
      {todos.map(t => <li key={t.id}>
        <List todos={t} onDeleted={onDeleted} onChange={onChange}/>
      </li>)}
     </ul>
    </>
    )
}

function List({todos,onDeleted,onChange}){
  const [isEditing,setIsEditing] = useState(false);
  let listContent;
  if(isEditing){
    listContent = (
      <>
        <input type="text" value={todos.title} onChange={e => onChange({...todos, title: e.target.value})}/>
        <button type="button" onClick={() => setIsEditing(false)}>Save</button>
      </>
      ) 
  }else{
    listContent = (
    <>
      {todos.title}
      <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
    </>
    )
  }
  return (
    <>
      <input type="checkbox" checked={todos.done} onChange ={(e) => {
        onChange({...todos, done: e.target.checked})
      }} />
      {listContent}
     <button onClick={() => onDeleted(todos.id)}>Delete</button>
    </>
    )
}
