import React from "react";
import { useState } from "react";

export default function AddPacket({ addPacket, setPacket }) {
  const [title, SetTitle] = useState("");
  const [active, setActive] = useState(false);
  const handleAddButton = () => {
    setPacket(() => [...addPacket, { title: title, packed: false, id: title }]);
    SetTitle("");
  }
  return (
    <>
      <input type="text" value={title} onChange={(e) => {
        SetTitle(e.target.value);
        addPacket.map(item => {
          if (item.title === e.target.value) {
            alert("title already exist");
            return setActive(true);
          } else {
            return setActive(false);
          }
        })
      }} />
      <button onClick={handleAddButton} disabled={active} type="button">Add</button>
    </>
  )
}