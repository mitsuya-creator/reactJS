import React, { useState } from "react";


export default function ListTask({ tasks, onChangeTask }) {
    return (
        <>
            <ul>
                {tasks.map(task => <li key={task.id}>
                    <Task list={task} onChangeTask={onChangeTask} />
                </li>)}
            </ul>
        </>
    )
}

function Task({ list, onChangeTask }) {
    const [isEdit, setIsEdit] = useState(false);
    let taskContent;
    if (isEdit) {
        taskContent = (
            <>
                <input type="text" value={list.title} onChange={e => onChangeTask({ ...list, title: e.target.value })} />
                <button type="button" onClick={() => setIsEdit(false)} >Save</button>
            </>
        )
    } else {
        taskContent = (
            <>
                {list.title}
                <button type="button" onClick={() => setIsEdit(true)}>Edit</button>
            </>
        )
    }
    return (
        <>
            <label>
                <input type="checkbox" checked={list.done} onChange={e => onChangeTask({ ...list, done: e.target.checked })} />
                {taskContent}
                <button type="button" >Delete</button>
            </label>
        </>
    )
}