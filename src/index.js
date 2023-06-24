import React from 'react';
import ReactDOM from 'react-dom/client';
import SwapField from './reactDev/swapElement';

export default function App() {
  return (
    <>
      <SwapField />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
