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
        SetArtist([...artist,{id:index++, name: name}]);
        }
      }>Add</button>
      <button type="button" onClick={() => {
        const reverseList = [...artist];
        reverseList.reverse();
        console.log('reverse', reverseList);
        SetArtist(reverseList);
      }}>Reverse</button>
      <button type="button" onClick={()=> {
        const sortList = [...artist];
        sortList.sort((a,b) => a.name > b.name ? 1 : -1);
        console.log('sort', sortList);
        SetArtist(sortList);
      }
      }>Sort</button>
      <ul>
      {artist.map(index => <li key={index.id}>{index.name}      <button type="button" onClick={() => {
        SetArtist(artist.filter(a => a.id !== index.id));
        }
      } >Delete</button></li>)}
      </ul>
    </>
    )
}