import React from 'react';
import ReactDOM from 'react-dom/client';
import AddPacket from './reactDev/addPacket';

export default function App() {
  return (
    <>
      <AddPacket />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
