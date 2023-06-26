import React, { useState } from "react";

export default function ListTask({ tasks, setTasks }) {
    const [isEdit, setIsEdit] = useState(false);
    const handleChange = (t, event) => {
        let updateTasks = tasks.map(task => {
            if (task.id === t.id) {
                return { ...t, done: event.target.checked }
            } else {
                return task;
            }
        })
        setTasks(updateTasks);
    }
    console.log(isEdit)
    return (
        <>
            <ul>
                {tasks.map(task => <li key={task.id}>
                    <input type="checkbox" onChange={e => handleChange(task, e)} checked={task.done} />{task.title}
                    {isEdit ?
                        <EditTask tasks={tasks} setTasks={setTasks} taskUpdate={task} setEdit={setIsEdit} /> : <button type="button" onClick={() => setIsEdit(!isEdit)}>Edit</button>
                    }

                </li>)}
            </ul>
        </>
    )
}


function EditTask({ tasks, setTasks, taskUpdate, setEdit }) {
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
            <input type="text" onChange={e => setText(e.target.value)} value={taskUpdate.title} />
            <button type="button" onClick={handleSave(taskUpdate.id)}>Save</button>
        </>
    )
}