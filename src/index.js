import React from 'react';
import ReactDOM from 'react-dom/client';
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
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
