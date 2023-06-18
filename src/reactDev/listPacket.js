import React from "react";

export default function ListPacket({packet,setPacket}){
  return (
    <>
       <ul>
          {packet.map(item => <li key={item.id}>{item.title}<button type="button" onClick={() => setPacket(packet.filter(id => item.id !== id.id)) }>Delete</button>
            </li>
          )}
       </ul>
    </>
    )
}