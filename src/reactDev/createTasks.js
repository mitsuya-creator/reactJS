import React, { useState } from "react";

export default function AddTasks({ setAdd, tasks }) {
    const [text, setText] = useState("");
    const handleAddBtn = () => {
        setAdd(newTask => [...newTask, { title: text, done: false, id: text, isEdit: false }]);
        setText("");
    }
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
            <button type="button" onClick={handleAddBtn} disabled={toggle}>Add Tasks</button>
        </>
    )

}