import React from "react";
import {useState} from "react";

export default function AddPacket({addPacket,setPacket}){
  const [title,SetTitle] = useState("");
  const handleAddButton = () => {
    setPacket(() => [...addPacket, {title: title, packed: false, id: title}]);
    SetTitle("");
  }
  return (
    <>
      <input type="text" value={title} onChange={(e) => SetTitle(e.target.value)} />
      <button onClick={handleAddButton} type="button">Add</button>
    </>
    )
}