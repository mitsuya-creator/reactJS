import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './reactDev/showMore';

export default function App() {
  return (
    <>
      <Accordion />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
