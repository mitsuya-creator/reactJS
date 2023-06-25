import React from 'react';
import ReactDOM from 'react-dom/client';
import initialContact from './reactDev/contactData';
import ListContacts from './reactDev/misplacedInList';
import { useState } from 'react';

export default function App() {
  const [checkbox, setCheckBox] = useState(false);
  const displayContacts = [...initialContact];
  if (checkbox) {
    displayContacts.reverse();
  }
  return (
    <>
      <label>
        <input type="checkbox" checked={checkbox} onChange={e => {
          setCheckBox(e.target.checked);
        }} />
        Show in Reverse order
      </label>
      <ul>
        <ListContacts contacts={displayContacts} />
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
