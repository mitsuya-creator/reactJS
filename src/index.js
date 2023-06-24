import React from 'react';
import ReactDOM from 'react-dom/client';
import initialContact from './reactDev/contactData';
import ContactList from './reactDev/contactList';

export default function App() {
  return (
    <>
      <ContactList contacts={initialContact} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
