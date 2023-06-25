import React, { useState } from "react";

export default function ListContacts({ contacts }) {
    const [showEmail, setShowEmail] = useState(false);
    return (
        <>
            {contacts.map(contact => <li key={contact.id}><p>{contact.name}
                <br />
                <i>{contact.email}</i>
                <br />
                <button type="button">show email</button>
            </p>
            </li>
            )}
        </>
    )
}