import React from "react";

export default function ContactsList({ ContactsList, selectedId, handleReceiver }) {
    return (
        <>
            <ul>
                {ContactsList.map(contact => <li key={contact.id}>
                    <button type="button" onClick={() => handleReceiver(contact.id)}>{contact.id === selectedId ? <b>{contact.name}</b> : contact.name}</button>
                </li>
                )}
            </ul>
        </>
    )
}