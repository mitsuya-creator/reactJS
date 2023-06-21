import React from "react";
import { useState } from "react";

export default function SyncInput() {
    const [input, setInput] = useState("");
    return (
        <>
            <Label label="FirstInput" input={input} setInput={setInput} />
            <Label label="SecondInput" input={input} setInput={setInput} />
        </>
    )

}

function Label({ input, setInput, label }) {
    return (
        <>
            <p>
                <label>{label}
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                </label>
            </p>
        </>
    )
}