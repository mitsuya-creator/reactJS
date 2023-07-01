import React, { useState } from "react";


export default function ListTask({ tasks, onChangeTask }) {
    return (
        <>
            <ul>
                {tasks.map(task => <li key={task.id}>
                    <Task task={task} onChangeTask={onChangeTask} />
                </li>)}
            </ul>
        </>
    )
}

function Task({ task, onChangeTask }) {
    const [isEdit, setIsEdit] = useState(false);
    let taskContent;
    if (isEdit) {
        taskContent = <>
            <input type="text" onChange={e => onChangeTask({ ...task, title: e.target.value })} />
            <button type="button" onClick={setIsEdit(!isEdit)} >Save</button>
        </>
    } else {
        taskContent = <>
            {task.title}
            <button type="button" onClick={setIsEdit(true)}>Edit</button>
        </>
    }
    return (
        <>
            <label>
                <input type="checkbox" checked={task.done} onChange={e => onChangeTask({ ...task, done: e.target.checked })} />
                {taskContent}
                <button type="button" >Delete</button>
            </label>
        </>
    )
}