import React, { useState } from "react";

export default function EditTask({ tasks, setTasks, taskUpdate, id }) {
    let value;
    const [text, setText] = useState("");
    const [reset, setReset] = useState(false);
    const handleSave = id => {
        let updateTasks = tasks.map(task => {
            if (task.id === id) {
                console.log(id);
                return { ...taskUpdate, title: value, id: value, isEdit: false }
            } else {
                return task;
            }
        })
        setTasks(updateTasks);
    }
    if (reset) {
        value = taskUpdate.title;
    } else {
        value = text;
    }
    return (
        <>
            <input type="text" onChange={e => setText(e.target.value)} value={value} disabled={
                reset === true
            } />
            <button type="button" onClick={() => handleSave(id)} disabled={value === ""}>Save</button>
            <button type="button" onClick={() => {
                setText("");
                setReset(!reset);
            }}  >{reset ? "Edit" : "Reset"}</button >
        </>
    )
}