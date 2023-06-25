import React from 'react';
import ReactDOM from 'react-dom/client';
import initialContact from './reactDev/contactData';
import ContactList from './reactDev/contactList';
import EditContact from './reactDev/editContact';
import { useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(initialContact);
  const [selectedId, setSelectedId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const handleSave = update => {
    const updateContact = contacts.map(contact => {
      if (contact.id === update.id) {
        return update;
      } else {
        return contact;
      }
    })
    setContacts(updateContact);
  }
  let selectedContact = contacts.find(contact => contact.id === selectedId);
  return (
    <>
      <ContactList contacts={contacts} onSelected={id => setSelectedId(id)} />
      <hr />
      <button type="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? "Close Edit" : "Open Edit"}</button>
      {isEdit ?
        <EditContact initialData={selectedContact} key={selectedId} onSave={handleSave} />
        : null
      }
    </>

  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
