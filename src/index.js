import React from 'react';
import ReactDOM from 'react-dom/client';
import AddPacket from './reactDev/addPacket';
import ListPacket from './reactDev/listPacket'
import {useState} from 'react';

export default function App() {
  const [packet,setPacket] = useState([]);
  return (
    <>
      <AddPacket addPacket={packet} setPacket={setPacket} />
      <ListPacket packet={packet} setPacket={setPacket} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
