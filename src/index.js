import React from 'react';
import ReactDOM from 'react-dom/client';
import Img from './test';

export default function App() {
  return (
    <>
      <Img />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
