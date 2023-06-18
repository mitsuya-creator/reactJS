import React from "react";
import {useState} from "react";

export default function AddPacket(){
  const [title,SetTitle] = useState("");
  const [packet,setPacket] = useState([]);
  const handleAddButton = () => {
    setPacket(() => [...packet, {title: title, packed: false, id: title}]);
    SetTitle("");
  }
  return (
    <>
      <input type="text" value={title} onChange={(e) => SetTitle(e.target.value)} />
      <button onClick={handleAddButton} type="button">Add</button>
      {console.log(packet)}
    </>
    )
}