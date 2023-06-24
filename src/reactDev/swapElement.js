import React, { useState } from "react";


export default function SwapField() {
    const [reverse, setReverse] = useState(false);
    return (
        <>
            {reverse ?
                <>
                    <Field label="Last Name" key="Last Name" />
                    <Field label="First Name" key="First Name" />
                </> :
                <>
                    <Field label="First Name" key="First Name" />
                    <Field label="Last Name" key="Last Name" />
                </>}
            <label>
                <input type="checkbox" checked={reverse} onChange={e => setReverse(e.target.checked)} />
                reverse order elements
            </label>
        </>
    )
}

function Field({ label }) {
    const [text, setText] = useState("");
    return (
        <p>
            <label>
                {label} :
                <input type="text" value={text} placeholder={label} onChange={e => setText(e.target.value)} />
            </label>
        </p>
    )
}