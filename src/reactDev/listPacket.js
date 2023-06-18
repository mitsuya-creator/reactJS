import React from "react";

export default function ListPacket({ packet, setPacket }) {
  const handleOnChange = (item, e) => {
    setPacket(packet.map(id => {
      if (id.id === item.id) {
        return { ...item, packed: e.target.checked };
      } else {
        return { ...id };
      }
    }));
  }
  return (
    <>
      <ul>
        {packet.map(item => <li key={item.id}>
          <input type="checkbox" checked={item.packed} onChange={(e) => handleOnChange(item, e)} />
          {item.title}
          <button type="button" onClick={() => setPacket(packet.filter(id => item.id !== id.id))}>Delete</button>
        </li>
        )}
      </ul>
      {console.log(packet)}
    </>
  )
}