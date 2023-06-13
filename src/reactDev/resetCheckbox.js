import React from "react";
import { useState } from "react";
export default function ResetCheckbox({ t, key }) {
    const [list, setList] = useState(t);
    const handleResetBtn = list => {
        setList(list.done ? list.done = false : list.done = true)
    }
    return (
        <>
            <button type="button" onClick={() => handleResetBtn(list)} >Reset</button>
        </>
    )
}