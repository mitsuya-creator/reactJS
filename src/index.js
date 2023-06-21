import React from 'react';
import ReactDOM from 'react-dom/client';
import SyncInput from './reactDev/syncInput';

export default function App() {
  return (
    <>
      <SyncInput />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
