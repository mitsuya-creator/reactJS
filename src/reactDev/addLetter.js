import React from "react";
import { useState } from "react";

export default function AddLetter({ letter, setLetter }) {
    const [title, setTitle] = useState("");
    return (
        <>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <button type="button" onClick={() => {
                setLetter([...letter, { subject: title, isStarred: false, id: title }]);
                setTitle("");
            }}>Add</button>
        </>
    )
}