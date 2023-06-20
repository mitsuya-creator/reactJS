import React from 'react';
import ReactDOM from 'react-dom/client';
import ListContents from './reactDev/showMore';

export default function App() {
  return (
    <>
      <ListContents />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
