import React from 'react';
import ReactDOM from 'react-dom/client';
import Feedback from './reactDev/Feedback';

export default function App() {
  return (
    <>
      <Feedback />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
