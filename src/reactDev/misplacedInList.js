import React, { useState } from "react";

export default function ListContacts({ contact }) {
    const [showEmail, setShowEmail] = useState(false);
    return (
        <>
            <li><p>{contact.name}
                <br />
                {showEmail ? <i>{contact.email}</i> : null}
                <br />
                <button type="button" onClick={() => setShowEmail(!showEmail)}>{showEmail ? "hide" : "show"} email</button>
            </p>
            </li>

        </>
    )
}