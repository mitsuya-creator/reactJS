import React, { useState } from "react";

export default function AddTasks({ setAdd }) {
    const [text, setText] = useState("");
    const handleAddBtn = () => {
        setAdd(newTask => [...newTask, { title: text, done: false, id: text }]);
        setText("");
    }
    const handleOnChange = e => {
        setText(e.target.value);
    }
    return (
        <>
            <input type="text" value={text} placeholder="Add Tasks" onChange={e => handleOnChange(e)} />
            <button type="button" onClick={handleAddBtn}>Add Tasks</button>
        </>
    )

}