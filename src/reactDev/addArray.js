import React from "react";
import {useState} from "react";

let index= 0;
export default function AddArtist(){
  const [name,SetName] = useState("");
  const [artist,SetArtist] = useState([]);
  return (
    <>
      <label>Name <input value={name} type="text" onChange={(e) => SetName(e.target.value)} />
      </label>
      <button type="button" onClick={() => SetArtist([...artist,{id:index++, name: name}])}>Add</button> 
      <h1>{name}</h1>
      <ul>
      {artist.map(index => <li key={index.id}>{index.name}</li>)}
      </ul>
      {console.log(artist)}
    </>
    )
}