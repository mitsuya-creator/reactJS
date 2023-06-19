import React from 'react';
import ReactDOM from 'react-dom/client';
import AddLetter from './reactDev/addLetter';
import Letter from './reactDev/letter';
import { useState } from 'react';

export default function App() {
  const [letters, setLetter] = useState([]);
  return (
    <>
      <AddLetter letter={letters} setLetter={setLetter} />
      <Letter letters={letters} setLetters={setLetter} />
      {console.log(letters)}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
