import React from "react";
import {useState} from "react"
import mhs from "./data";

export default function Form(){
  const [person,setPerson] = useState(mhs[0]);
  const handleName = (e) => {
    e.preventDefault();
    setPerson({...person, name: e.target.value});
  }
  return (
      <>
        <span>Name: <input type="text" value={person.name} onChange={handleName} /></span>
        <h1>{person.name}</h1>
      </>
    )
}