import React from "react";

export default function AddTasks({ onAddBTn, tasks, setText, text }) {
    const handleOnChange = e => {
        setText(e.target.value);
    }
    let toggle;
    tasks.map(task => {
        if (task.title === text) {
            toggle = true;
        } else {
            toggle = false;
        }
        return toggle;
    });
    return (
        <>
            <input type="text" value={text} placeholder="Add Tasks" onChange={e => handleOnChange(e)} />
            <button type="button" onClick={() => onAddBTn(text)} disabled={toggle}>Add Tasks</button>
        </>
    )

}