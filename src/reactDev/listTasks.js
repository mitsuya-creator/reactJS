
// Note: 
// add feature delete task
// add Feature if task already exist the save button and add button  will not be activated!


import React, { useState } from "react";

export default function ListTask({ tasks, setTasks }) {
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
    const handleEditBtn = t => {
        let updateTasks = tasks.map(task => {
            if (task.id === t.id) {
                return { ...t, isEdit: true }
            } else {
                return task;
            }
        })
        setTasks(updateTasks);
    }
    console.log(tasks)
    return (
        <>
            <ul>
                {tasks.map(task => <li key={task.id}>
                    <input type="checkbox" onChange={e => handleChange(task, e)} checked={task.done} />
                    {task.isEdit ? <EditTask tasks={tasks} setTasks={setTasks} taskUpdate={task} key={task.id} id={task.id} />
                        :
                        <>
                            <span>{task.title}</span>
                            <button type="button" onClick={() => handleEditBtn(task)}>Edit</button>
                        </>
                    }
                </li>)}
            </ul>
        </>
    )
}


function EditTask({ tasks, setTasks, taskUpdate, id }) {
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
