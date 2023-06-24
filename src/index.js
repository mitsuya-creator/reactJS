import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import Counter from './reactDev/counter';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Counter />
      {show ? <Counter /> : null}
      <input type='checkbox' checked={show} onChange={e => setShow(e.target.checked)} />
      <span>Show second counter</span>
    </>
  )
=======
import TextField from './reactDev/hint';

export default function App() {
  return (
    <>
      <TextField />
    </>
    )
>>>>>>> a0dd0dc8a0d6e9b80fdefbe9a9234151d2fd0c9e
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
