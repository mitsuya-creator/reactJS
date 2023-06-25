import React from "react";
import "../css/style.css";


export default function ContactList({ contacts, onSelected }) {
    return (
        <>
            <ul className="ul-inline">
                {contacts.map(contact => <li key={contact.id} className="li"><button type="button" className="btn-contact" onClick={() => onSelected(contact.id)}>{contact.name}</button></li>
                )}
            </ul>
        </>
    )
}