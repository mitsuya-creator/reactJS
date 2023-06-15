import React from 'react';
import ReactDOM from 'react-dom/client';
import IssuedTo from './reactDev/redundant';


export default function App() {
  return (
    <>
      <IssuedTo />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
