import React, { useState } from "react";
import "../css/style.css"


export default function ContactList({ contacts }) {
    return (
        <>
            <ul className="ul-inline">
                {contacts.map(contact => <li key={contact.id} className="li"><button type="button" className="btn-contact">{contact.name}</button></li>
                )}
            </ul>
        </>
    )
}