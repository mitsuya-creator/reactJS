import React, { useState } from "react";

export default function EditTask({ tasks, setTasks, taskUpdate, setEdit }) {
    const [text, setText] = useState("");
    const handleSave = id => {
        let updateTasks = tasks.map(task => {
            if (tasks.id === id) {
                return { ...taskUpdate, title: text }
            } else {
                return task;
            }
        })
        setTasks(updateTasks);
        setEdit(() => false);
    }
    return (
        <>
            <input type="text" onChange={e => setText(e.target.value)} />
            <button type="button" onClick={handleSave(taskUpdate.id)}>Save</button>
        </>
    )
}