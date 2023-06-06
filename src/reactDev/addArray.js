import React from "react";
import {useState} from "react";

let index= 0;
export default function AddArtist(){
  const [name,SetName] = useState("");
  const [artist,SetArtist] = useState([]);
  let del;
  return (
    <>
      <label>Name <input type="text" onChange={(e) => SetName(e.target.value)
      }/>
      </label>
      <button type="button" onClick={() => {
        SetArtist([{id:index++, name: name}, ...artist]);
        }
      }>Add</button>
      <ul>
      {artist.map(index => <li key={index.id}>{index.name}      <button type="button" onClick={() => {
        SetArtist(artist.filter(a => a.id !== index.id));
        }
      } >Delete</button></li>)}
      </ul>
    </>
    )
}