import React, { useState } from "react";

export default function EditContact({ initialData, onSave }) {
    const [name, setName] = useState(initialData.name);
    const [email, setEmail] = useState(initialData.email);
    return (
        <>
            <form>
                <label>
                    Name : <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    E-mail : <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <br />
                <button type="button" className="btn" onClick={() => {
                    const updateContact = {
                        id: initialData.id,
                        name: name,
                        email: email
                    }
                    onSave(updateContact);
                }}>Save</button>
                <button type="button" className="btn" onClick={() => {
                    setName(initialData.name);
                    setEmail(initialData.email);
                }}>Reset</button>
            </form>
        </>
    )
}