import React, { useState } from "react";

export default function EditTask({ tasks, setTasks, taskUpdate, id }) {
    let toggle, length, index, value;
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
    length = tasks.length;
    tasks.map(task => {
        if (task.id !== id) {
            for (index = 0; index < length; index++) {
                if (task.title === value) {
                    toggle = true;
                }
            }
        } else {
            toggle = false;
        }
        return toggle;
    });
    return (
        <>
            <input type="text" onChange={e => setText(e.target.value)} value={value} disabled={
                reset === true
            } />
            <button type="button" onClick={() => handleSave(id)} disabled={value === "" || toggle}>Save</button>
            <button type="button" onClick={() => {
                setText("");
                setReset(!reset);
            }}  >{reset ? "Edit" : "Reset"}</button >
        </>
    )
}