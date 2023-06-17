import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './reactDev/Clock';

export default function App() {
  return (
    <>
      <Clock />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
