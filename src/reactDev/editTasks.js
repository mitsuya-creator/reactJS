import React, { useState } from "react";

export default function EditTask({ }) {
    const [text, setText] = useState("");
    const [reset, setReset] = useState(false);

    return (
        <>
            <input type="text" onChange={e => setText(e.target.value)} value={value} disabled={
                reset === true
            } />
            {/* <button type="button" onClick={() => handleSave(id)} disabled={value === "" || toggle}>Save</button>
            <button type="button" onClick={() => {
                setText("");
                setReset(!reset);
            }}  >{reset ? "Edit" : "Reset"}</button > */}
        </>
    )
}