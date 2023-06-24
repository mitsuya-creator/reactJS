import React from 'react';
import ReactDOM from 'react-dom/client';
import TextField from './reactDev/hint';

export default function App() {
  return (
    <>
      <TextField />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
